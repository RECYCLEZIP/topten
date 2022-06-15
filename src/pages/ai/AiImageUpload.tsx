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

  // 안내 문구 (e.g. 사진을 업로드 해주세요 ...)
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
          {/* 분석 중이라면 이미지 위에 반투명 레이어, 스피너 */}
          {situation === "analyzing" && (
            <AiImageLayer>
              <AiSpinImg src={img.spin} />
            </AiImageLayer>
          )}
          <AiImage src={fileImage}></AiImage>
        </AiImageContainer>
        <AiIconsContainer>
          <AiIcon src={img.camera} alt="camera" />
          {/* 업로드 아이콘 클릭 = 업로드 폼 클릭 */}
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
