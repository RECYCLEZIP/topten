import React, { useState, useRef, useEffect } from "react";

import { useRecoilState } from "recoil";
import { AiSituationState } from "../../stores/atoms";

import { Camera } from "react-camera-pro";

import { img } from "../../assets/imgImport";

import {
  AiImageUploadSection,
  UploadContainer,
  UploadWrapper,
  UploadNoticeWrapper,
  UploadButton,
  CameraShutterWrapper,
  CameraShutterIcon,
  AiImageContainer,
  AiImageLayer,
  AiSpinImg,
  AiImage,
  AiIconsContainer,
  AiIcon,
  AiTopContainer,
  AiNoticeWrapper,
  AiButtonWrapper,
  AiButton,
} from "../../styles/aiStyles/AiStyle";
import { Upload } from "@mui/icons-material";

function AiImageUpload() {
  const [fileImage, setFileImage] = useState("");

  // 이미지 업로드 전: beforeImgUpload, 이미지 업로드: imgUploaded, 분석 중: analyzing, 분석 완료: done
  const [situation, setSituation] = useRecoilState(AiSituationState);

  // 안내 문구 (e.g. 사진을 업로드 해주세요 ...)
  const [notice, setNotice] = useState("");
  const [buttonText, setButtonText] = useState("");

  // 카메라
  const camera: any = useRef(null);
  const imgInput = useRef<any>();
  const [isCameraOn, setIsCameraOn] = useState(false);

  // 이미지 업로드
  const onClickImgUpload = (e: any) => {
    console.log("asdfds");
    imgInput.current.click();

    setFileImage(URL.createObjectURL(e.target.files[0]));
  };

  // 이미지 업로드 시
  useEffect(() => {
    console.log(fileImage);
    fileImage && setSituation("imgUploaded");
  }, [fileImage]);

  // 분석하기 버튼 Click 시
  const onClickAnalyze = () => {
    if (situation === "done") {
      // 다시 분석하기 Click 시 이미지 업로드 전 상태로 초기화
      setSituation("beforeImgUpload");
      setFileImage("");
    } else {
      // 분석하기 Click 시
      setSituation("analyzing");

      // 분석 완료 상태 (3초 후 완료라고 임시 설정)
      setTimeout(() => {
        setSituation("done");
      }, 3000);
    }
  };

  // 페이지 상태 별 문구
  const messages = {
    beforeImgUpload: "분석하기 버튼을 클릭해주세요",
    imgUploaded: "쓰레기 사진을 업로드해주세요",
    analyzing: "AI가 사진을 분석하고 있습니다",
    done: "분석이 완료되었습니다",
  };

  useEffect(() => {
    // 페이지 상태에 따라 notice 변경
    const notice = () => {
      if (situation === "done") {
        setNotice("분석이 완료되었습니다");
      } else if (situation === "analyzing") {
        setNotice("AI가 사진을 분석하고 있습니다");
      } else if (situation === "imgUploaded") {
        setNotice("분석하기 버튼을 클릭해주세요");
      } else {
        setNotice("쓰레기 사진을 업로드해주세요");
      }
    };

    notice();

    // 페이지 상태에 따라 버튼 문구 변경
    const buttonText = () => {
      if (situation === "done") {
        setButtonText("다시 분석하기");
      } else {
        setButtonText("분석하기");
      }
    };

    buttonText();
  }, [situation]);

  return (
    <>
      <AiImageUploadSection>
        <AiImageContainer>
          {situation === "beforeImgUpload" && (
            <UploadContainer onClick={onClickImgUpload}>
              <UploadWrapper>
                <UploadNoticeWrapper>사진을 업로드 하세요.</UploadNoticeWrapper>
                <form>
                  <input
                    name="imgUpload"
                    type="file"
                    accept="image/*"
                    onChange={onClickImgUpload}
                    ref={imgInput}
                    style={{ display: "none" }}
                  />
                  <UploadButton>사진 업로드</UploadButton>
                </form>
              </UploadWrapper>
            </UploadContainer>
          )}
          {isCameraOn ? (
            <>
              <Camera
                ref={camera}
                aspectRatio="cover"
                errorMessages={{
                  noCameraAccessible:
                    "No camera device accessible. Please connect your camera or try a different browser.",
                  permissionDenied:
                    "Permission denied. Please refresh and give camera permission.",
                  switchCamera:
                    "It is not possible to switch camera to different one because there is only one video device accessible.",
                  canvas: "Canvas is not supported.",
                }}
              />
              <CameraShutterWrapper>
                <CameraShutterIcon
                  src={img.shutter}
                  alt="shutter"
                  onClick={() => {
                    if (camera.current) {
                      const photo: any = camera?.current?.takePhoto();

                      // 촬영 시 이미지에 저장
                      setFileImage(photo);
                    }
                    // 카메라 종료
                    setIsCameraOn(false);
                  }}
                />
              </CameraShutterWrapper>
            </>
          ) : (
            // 분석 중이라면 이미지 위에 반투명 레이어, 스피너
            <>
              {situation === "analyzing" && (
                <AiImageLayer>
                  <AiSpinImg src={img.spin} />
                </AiImageLayer>
              )}
              {situation !== "beforeImgUpload" &&
                (situation === "imgUploaded" ? (
                  <form style={{ display: "contents" }}>
                    <input
                      name="imgUpload"
                      type="file"
                      accept="image/*"
                      onChange={onClickImgUpload}
                      ref={imgInput}
                      style={{ display: "none" }}
                    />
                    <AiImage
                      src={fileImage}
                      alt="img"
                      onClick={onClickImgUpload}
                      style={{ cursor: "pointer" }}
                    />
                  </form>
                ) : (
                  <AiImage src={fileImage}></AiImage>
                ))}
            </>
          )}
        </AiImageContainer>
        <AiIconsContainer>
          {/* <AiIcon
            src={img.camera}
            alt="camera"
            onClick={() => {
              setIsCameraOn(true);
            }}
          /> */}
          {/* 업로드 아이콘 클릭 = 업로드 폼 클릭 */}
          {/* <form>
            <input
              name="imgUpload"
              type="file"
              accept="image/*"
              onChange={onClickImgUpload}
              ref={imgInput}
              style={{ display: "none" }}
            />
            <AiIcon src={img.image} alt="pic" onClick={onClickImgUpload} />
          </form> */}
        </AiIconsContainer>
      </AiImageUploadSection>
      <AiTopContainer>
        <AiNoticeWrapper>{notice}</AiNoticeWrapper>
        <AiButtonWrapper>
          <AiButton
            // 이미지 업로드 전, 분석 중이라면 버튼 비활성화
            disabled={
              situation === "beforeImgUpload" || situation === "analyzing"
            }
            situation={situation}
            onClick={onClickAnalyze}
          >
            {buttonText}
          </AiButton>
        </AiButtonWrapper>
      </AiTopContainer>
    </>
  );
}

export default AiImageUpload;
