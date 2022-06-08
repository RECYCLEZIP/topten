import React, { useState, useRef, useEffect } from "react";

import { useRecoilState } from "recoil";
import { AiSituationState } from "../../stores/atoms";

import { img } from "../../assets/imgImport";

import {
  AiImageUploadSection,
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

function AiImageUpload() {
  const [fileImage, setFileImage] = useState("");

  // 이미지 업로드 전: beforeImgUpload, 이미지 업로드: imgUploaded, 분석 중: analyzing, 분석 완료: done
  const [situation, setSituation] = useRecoilState(AiSituationState);

  const [notice, setNotice] = useState("");
  const [buttonText, setButtonText] = useState("");

  const imgInput = useRef<any>();

  // 이미지 업로드
  const onClickImgUpload = (e: any) => {
    imgInput.current.click();

    setFileImage(URL.createObjectURL(e.target.files[0]));
  };

  // 이미지 업로드 시
  useEffect(() => {
    fileImage && setSituation("imgUploaded");
  }, [fileImage]);

  // 분석하기 버튼 Click 시
  const onClickAnalyze = () => {
    if (situation === "done") {
      // 다시 분석하기 Click 시, 이미지 업로드 전 상태로 초기화
      setSituation("beforeImgUpload");
      setFileImage("");
    } else {
      // 분석하기 Click 시
      setSituation("analyzing");

      // 임시 분석 완료 상태
      setTimeout(() => {
        setSituation("done");
      }, 3000);
    }

    alert("asdfa");
  };

  useEffect(() => {
    const notice = () => {
      switch (situation) {
        case "imgUploaded":
          return setNotice("분석하기 버튼을 클릭해주세요");
        case "analyzing":
          return setNotice("AI가 사진을 분석하고 있습니다");
        case "done":
          return setNotice("분석이 완료되었습니다");
        default:
          return setNotice("쓰레기 사진을 업로드해주세요");
      }

      // //   switch (situation) {
      // //     case "done":
      // //       return setTitleText("분석이 완료되었습니다");
      // //     case "analyzing":
      // //       return setTitleText("AI가 사진을 분석하고 있습니다");
      // //     case "imgUploaded":
      // //       return setTitleText("분석하기 버튼을 클릭해주세요");
      // //     default:
      // //       return setTitleText("쓰레기 사진을 업로드해주세요");
      // //   }

      //   if (situation === "done") {
      //     setTitleText("분석이 완료되었습니다");
      //   } else if (situation === "analyzing") {
      //     setTitleText("AI가 사진을 분석하고 있습니다");
      //   } else if (situation === "imgUploaded") {
      //     setTitleText("분석하기 버튼을 클릭해주세요");
      //   } else {
      //     setTitleText("쓰레기 사진을 업로드해주세요");
      //   }
    };

    notice();

    const buttonText = () => {
      if (situation === "done") {
        setButtonText("다시 분석하기");
      } else {
        setButtonText("분석하기");
      }
    };

    buttonText();
  }, [situation]);

  console.log(`${situation}`);

  return (
    <>
      {/* 사진, 카메라 */}
      <AiImageUploadSection>
        {/* 사진 */}
        <AiImageContainer>
          {situation === "analyzing" && (
            <AiImageLayer>
              <AiSpinImg src={img.spin} />
            </AiImageLayer>
          )}
          <AiImage src={fileImage}></AiImage>
        </AiImageContainer>
        {/* 아이콘 */}
        <AiIconsContainer>
          <AiIcon src={img.camera} alt="camera" />
          <form>
            <input
              name="imgUpload"
              type="file"
              accept="image/*"
              onChange={onClickImgUpload}
              ref={imgInput}
              style={{ display: "none" }}
            />
            <AiIcon src={img.image} alt="pic" onClick={onClickImgUpload} />
          </form>
        </AiIconsContainer>
      </AiImageUploadSection>
      {/* 사진 업로드 문구, 분석하기 버튼 */}
      <AiTopContainer>
        {/* 사진 업로드 문구 */}
        <AiNoticeWrapper>{notice}</AiNoticeWrapper>
        <AiButtonWrapper>
          <AiButton
            // 버튼 비활성화: 업로드 전, 분석 중
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
