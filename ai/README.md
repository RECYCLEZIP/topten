## Installation

* ### Prerequisite
    * If you have GPU and enough Ram(with CUDA 11.1)
    ```
    pip install torch==1.9.0+cu111 torchvision==0.10.0+cu111 torchaudio==0.9.0 -f https://download.pytorch.org/whl/torch_stable.html
    ```
    * If you dont have GPU and enough Ram
    ```
    pip install torch==1.9.0+cpu torchvision==0.10.0+cpu torchaudio==0.9.0 -f https://download.pytorch.org/whl/torch_stable.html
    ```

* ### Packages
    ```
    pip install -r requirements.txt
    ```
* ### modelFile
    ```
    git lfs install
    git lfs track "resource/model/50_epoch_model_final.pth" 
    git lfs pull
    ```
## MODEL
- COCO dataset으로 사전학습을 거친 **detectron2 기반의 faster-Rcnn R101 모델**을 전이학습하였습니다.
---
- ### Model evaluation with COCO
  - ![evaluation](/uploads/7a48b67cca5cd97307346e99bcb06167/evaluation.JPG)

## 데이터셋 분포도
### <img width="700" height="600" src="/uploads/71615e84df9b2fb4bedd74f0d2aaf335/dataset.jpg">
---
- 총 2602장(.JPG)
  - PET : 844
  - CARTON : 515
  - PAPER : 310
  - PLASTIC : 319
  - CAN : 304
  - VINYL : 310


## 데이터셋 라벨링
1.  convert to VOC format
    (https://github.com/tzutalin/labelImg)


2.  convert to COCO annotations from xmlfiles
    <https://github.com/Tony607/voc2coco>

![labeling](/uploads/db63e2f228626d5ea9ae01dd85a81df2/labeling.png)

## 데이터셋 출처
- 상세분류 서비스에 속하는 PET, CARTON 카테고리는 직접 촬영한 원천 데이터로 라벨링 작업을 하여 학습시켰습니다.
- PAPER, CAN, PLASTIC, VINYL 카테고리는 AI HUB의 생활 폐기물 이미지 데이터셋(https://aihub.or.kr/aidata/27708)의 원천 데이터를 수집해 라벨링 작업을 하여 학습시켰습니다.

## Run
```
python app.py
```
