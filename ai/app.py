import flask
from flask_cors import CORS
from flask import request, jsonify
from detectron2.engine import DefaultPredictor
from detectron2.config import get_cfg
from detectron2.data import MetadataCatalog
from detectron2 import model_zoo
from detectron2.utils.visualizer import Visualizer, ColorMode

import torch
import os
import cv2
import requests
import numpy as np
import time
import uuid
import copy
import collections
import config

from s3connection import s3_connection, s3_put_object
from config import AWS_S3_BUCKET_NAME, AWS_S3_BUCKET_REGION

PATH = os.path.dirname(os.path.realpath(__file__))
MODEL_PATH = config.PATH_CONFIG["MODEL_PATH"]
CONFIG_PATH = config.PATH_CONFIG["CONFIG_PATH"]
HOST_URL = config.HOST
PORT_NUMBER = config.PORT

MetadataCatalog.get("my_dataset").thing_classes = ["Can_Total", "Carton_Body", "Carton_Head", "Carton_Straw", "Carton_Total", "Paper_Total", "Pet_Body", "Pet_Head", "Pet_Label", "Pet_Total", "Plastic_Total", "Vinyl_Total"]
class_list = MetadataCatalog.get("my_dataset").thing_classes

OBJECT_LIST = [0, 4, 5, 9, 10, 11]
CLASS_CONFIG = {0: [], 4: [1, 2, 3], 5: [], 9: [6, 7, 8], 10: [], 11: []}
HAVE_CHILD_OBJECT = [4, 9]
CARTON_STRAW = 3
IMAGE_NUMBER = 0
PLAP_AREA_THRESHOLD = 60
CARTON_OUTPUTS = {"classes": [1, 3, 4], "boxes": [[1, 2, 3, 4], [1, 2, 3, 4], [1, 2, 3, 4]], "scores": [1, 1, 1]}
ERROR_MESSAGE = {"message": "any objects detected, please upload another Image"}

#detectron2의 cfg설정입니다.
cfg = get_cfg()
cfg.merge_from_file(model_zoo.get_config_file(CONFIG_PATH))

if torch.cuda.is_available() != True:
    cfg.MODEL.DEVICE = "cpu"

cfg.MODEL.ROI_HEADS.SCORE_THRESH_TEST = 0.5  
cfg.MODEL.ROI_HEADS.NUM_CLASSES = 12 
cfg.MODEL.WEIGHTS = PATH + MODEL_PATH
predictor = DefaultPredictor(cfg)


#마스크드된 이미지를 저장합니다.
def saveMaskedImage(image, outputs):
    global IMAGE_NUMBER

    v = Visualizer(image[:, :, ::-1],
        metadata = MetadataCatalog.get("my_dataset"), 
        scale = 1.0, 
        instance_mode = ColorMode.SEGMENTATION  
    )
    out = v.draw_instance_predictions(outputs["instances"].to("cpu"))
    resultImage = out.get_image()[:, :, ::-1]
    imageName = str(uuid.uuid4()) + "masked" + str(IMAGE_NUMBER) + ".jpg"

    cv2.imwrite(PATH + "/resource/" + imageName, resultImage)

    s3 = s3_connection()
    ret = s3_put_object(s3,AWS_S3_BUCKET_NAME, PATH + "/resource/" + imageName, imageName)

    if ret:
        print("파일 저장 성공")
    else:
        print("파일 저장 실패")

    maskedImageUrl = f'https://{AWS_S3_BUCKET_NAME}.s3.{AWS_S3_BUCKET_REGION}.amazonaws.com/{imageName}'
    IMAGE_NUMBER += 1
    
    return maskedImageUrl

#Total클래스 중 Confidence가 가장큰 것만 남깁니다.
def getMaxConfidenceObject(outputs):
    tempOutputs = copy.deepcopy(outputs)
    
    global OBJECT_LIST

    classList = outputs["classes"]

    maxConfidenceObjectIndex = "None"
    maxConfidence = 0
    delList = []

    for index, value in enumerate(classList):
        if value in OBJECT_LIST:
            if maxConfidenceObjectIndex == "None":
                maxConfidence = tempOutputs["scores"][index]
                maxConfidenceObjectIndex = index
            elif tempOutputs["scores"][index] > maxConfidence:
                delList.append(maxConfidenceObjectIndex)
                maxConfidenceObjectIndex = index
                maxConfidence = tempOutputs["scores"][index]
            else:
                delList.append(index)

    for i in sorted(delList, reverse = True):
        del tempOutputs["classes"][i]
        del tempOutputs["boxes"][i]
        del tempOutputs["scores"][i]

    for index,value in enumerate(tempOutputs["classes"]):
        if value in OBJECT_LIST:
            maxConfidenceObjectIndex = index
            break

    return  tempOutputs, maxConfidenceObjectIndex

#이미지파일을 불러옵니다.
def getImage(image_url):
    try:
        image_reponse = requests.get(image_url)
        image_as_np_array = np.frombuffer(image_reponse.content, np.uint8)
        image = cv2.imdecode(image_as_np_array, cv2.IMREAD_COLOR)
        return image
    except:
        return None

#두 사각형좌표를 이용하여 겹치는 영역의 넓이를 계산합니다.
def overplapArea(box1, box2):
    
    x1, y1 = box1[0], box1[1]
    x2, y2 = box1[2], box1[3]
    x3, y3 = box2[0], box2[1]
    x4, y4 = box2[2], box2[3]
    
    if x2 < x3:
        return 0
    if x1 > x4:
        return 0
    if y2 < y3:
        return 0
    if y1 > y4:
        return 0
    
    left_x = max(x1, x3)
    left_y = max(y1, y3)
    right_x = min(x2, x4)
    right_y = min(y2, y4)
    
    width = right_x - left_x
    height = right_y - left_y
    
    return width * height

#ToTal이란 클래스가 존재하는지 체크합니다.
def isTotalExists(classList):
    global OBJECT_LIST
    
    totalClassExist = False

    for value in classList:
        if value in OBJECT_LIST:
            totalClassExist = True
            break

    return totalClassExist

#Total클래스가 부속클래스를 가지는지 체크합니다.
def isObjectHaveChild(classList):
    global HAVE_CHILD_OBJECT
    
    isChildExistClass = False

    for index, value in enumerate(classList):
        if value in HAVE_CHILD_OBJECT:
            isChildExistClass=True

    return isChildExistClass

#자신의 부속클래스들만 남깁니다.
def filteredChild(outputs, objectIndex):
    global CLASS_CONFIG
    global OBJECT_LIST
    
    tempOutputs = copy.deepcopy(outputs)
    # ouputs의 class를 담을 변수를 지정합니다
    classList = outputs["classes"]
    objectClass = classList[objectIndex]
    delList=[]

    for index, value in enumerate(classList):
        if (value == objectClass) or (value in CLASS_CONFIG[objectClass]):
            continue
        else:
            delList.append(index)
            
    for i in sorted(delList, reverse = True):
        del tempOutputs["classes"][i]
        del tempOutputs["boxes"][i]
        del tempOutputs["scores"][i] 

    for index, value in enumerate(tempOutputs["classes"]):
        if value in OBJECT_LIST:
            objectIndex = index
            break

    return tempOutputs, objectIndex

#Total클래스와의 면적률이 가장큰 클래스들만 남깁니다.
def filterOutputWithArea(outputs, objectIndex):
    global PLAP_AREA_THRESHOLD

    classList = outputs["classes"]
    currentObjectBox = outputs["boxes"][objectIndex]

    compareDict = {}
    delIndexList = []

    for index, value in enumerate(classList):
        if index == objectIndex:
            continue

        currentClassBox = outputs["boxes"][index]
        area = overplapArea(currentObjectBox, currentClassBox)
        totalArea = abs(currentClassBox[2] - currentClassBox[0]) * abs(currentClassBox[3] - currentClassBox[1])
        plapPerTotal = round((area / totalArea) * 100)

        if plapPerTotal > PLAP_AREA_THRESHOLD:
            if value in compareDict:     
                if plapPerTotal > compareDict[value]:
                    compareDict[value] = plapPerTotal
                else:   
                    delIndexList.append(index)
            else:
                compareDict[value] = plapPerTotal      
        else:
            delIndexList.append(index)
            
    for i in sorted(delIndexList, reverse = True):
        del outputs["classes"][i]
        del outputs["boxes"][i]
        del outputs["scores"][i]

    return outputs


#predict값들을 전체적으로 로직처리합니다.
def validateOutput(outputs):
    global OBJECT_LIST
    global CLASS_CONFIG
    global CARTON_OUTPUTS
    global CARTON_STRAW
    global ERROR_MESSAGE
    
    classList = outputs["classes"]
            
    if CARTON_STRAW in classList:
        return CARTON_OUTPUTS
    elif isTotalExists(classList):
        outputs, objectIndex = getMaxConfidenceObject(outputs)
        classList = outputs["classes"]
        if isObjectHaveChild(classList):
            outputs, objectIndex = filteredChild(outputs, objectIndex)
            outputs = filterOutputWithArea(outputs, objectIndex)
            return outputs
        else:
            resultOutput = {}
            for key, value in outputs.items():
                resultOutput[key] = [value[objectIndex]]
            return resultOutput              
    else:
        return ERROR_MESSAGE


#응답형태를 만듭니다.
def makeResponse(image_url, validatedOutputs, makedImageUrl):
    global class_list
    global OBJECT_LIST

    response = {}
    response["imageUrl"] = image_url
    currentClassList=validatedOutputs["classes"]

    for i in currentClassList:
        if i in OBJECT_LIST:
            currentObject = i
            break

    response["type"] = class_list[currentObject]

    for index, value in enumerate(currentClassList):
        className = str(value)
        response[className] = {}
        response[className]["box"] = validatedOutputs["boxes"][index]
        response[className]["confidence"] = round(validatedOutputs["scores"][index] * 100)
    
    return response


#예측형태은 tensor자료형에서 python의 자료형으로 변환합니다.
def tensoroutToList(output):
    result = {"classes" : [], "boxes" : [], "scores" : []}

    if len(output["instances"].pred_boxes) == 0:
        return result

    boxes = output["instances"].pred_boxes
    scores = output["instances"].scores
    classes = output["instances"].pred_classes
    
    listBoxes = []
    listScores = []
    listClasses = []
    
    for box in list(boxes):
        listBoxes.append(box.detach().cpu().numpy().tolist())

    for score in list(scores):
        listScores.append(score.detach().cpu().numpy().tolist())

    for tensorClass in list(classes):
        listClasses.append(tensorClass.detach().cpu().numpy().tolist())
    
    result["boxes"] = listBoxes
    result["classes"] = listClasses
    result["scores"] = listScores

    return result

app = flask.Flask(__name__)
CORS(app)

@app.route("/image/predictor", methods=["POST"])
def process_score_image_request():
    try:
        global predictor

        image_url = request.json["imageUrl"]
        
        start = time.time()
        image = getImage(image_url)

        if not isinstance(image, np.ndarray):
            response = {"message": "invalid imageUrl, please send another imageUrl"}
            return jsonify(response), 200

        print("getImage time :", time.time() - start)

        start = time.time()
        tensoroutputs = predictor(image)

        print("getpredictBymodel time :", time.time() - start)
        
        outputs = tensoroutToList(tensoroutputs)
        
        start = time.time()
        makedImageUrl = saveMaskedImage(image, tensoroutputs)
        print("saveMaskImage time :", time.time() - start)
        
        validatedOutputs = validateOutput(outputs)
        
        if validatedOutputs.get("message"):
            return jsonify(validatedOutputs), 200

        response = makeResponse(image_url, validatedOutputs, makedImageUrl)
        print(response)
        return jsonify(response)

    except:
        response = {"message": "ServerError"}
        return jsonify(response), 400


if __name__ == '__main__':
    app.run(host = HOST_URL, port = PORT_NUMBER, debug = True)