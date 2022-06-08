import React, { useState, useRef, useEffect } from "react";

import AiGuide from './AiGuide'

import { img } from "../../assets/imgImport";

import {
  Container,
  AiTopTitle,
  AiImageUploadSection,
  AiImageContainer,
  AiImageLayer,
  AiSpinImg,
  AiImage,
  AiIconsContainer,
  AiIcon,
  AiTopContainer,
  AiTitleWrapper,
  AiButtonWrapper,
  AiButton,
} from "../../styles/aiStyles/AiStyle";

function Ai() {
  const [fileImage, setFileImage] = useState("");

  // 이미지 업로드, 분석 중, 분석 완료 -> 페이지 상황 구분
  const [isImgUploaded, setIsImgUploaded] = useState(false);
  const [isAnalyzed, setIsAnalyzed] = useState(false);
  const [isCompletion, setIsCompletion] = useState(false);

  const [titleText, setTitleText] = useState("");
  const [buttonText, setButtonText] = useState("");

  const imgInput = useRef<any>();

  // 이미지 업로드
  const onClickImgUpload = (e: any) => {
    imgInput.current.click();

    setFileImage(URL.createObjectURL(e.target.files[0]));
  };

  // 이미지 업로드 시
  useEffect(() => {
    fileImage ? setIsImgUploaded(true) : setIsImgUploaded(false);
  }, [fileImage]);

  // 분석하기 버튼 Click 시
  const onClickAnalyze = () => {
    if (isCompletion) {
      // 다시 분석하기 Click 시, 이미지 업로드 전 상태로 
      setIsCompletion(false);
      setFileImage("");
    } else {
      // 분석하기 Click 시
      setIsAnalyzed(true);

      // 임시 분석 완료 상태
      setTimeout(() => {
        setIsCompletion(true);
        setIsAnalyzed(false);
      }, 3000);
    }

    alert("asdfa");
  };

  useEffect(() => {
    const titleText = () => {
      if (isCompletion) {
        setTitleText("분석이 완료되었습니다");
      } else if (isAnalyzed) {
        setTitleText("AI가 사진을 분석하고 있습니다");
      } else if (isImgUploaded) {
        setTitleText("분석하기 버튼을 클릭해주세요");
      } else {
        setTitleText("쓰레기 사진을 업로드해주세요");
      }
    };

    titleText();

    const buttonText = () => {
      if (isCompletion) {
        setButtonText("다시 분석하기");
      } else {
        setButtonText("분석하기");
      }
    };

    buttonText();
  }, [isImgUploaded, isAnalyzed, isCompletion]);

  console.log(
    `사진 업로드: ${isImgUploaded}, 분석 중: ${isAnalyzed}, 분석 완료: ${isCompletion}`,
  );

  return (
    <Container>
      <div>
        <AiTopTitle>AI 분리수거</AiTopTitle>
      </div>
      {/* 사진, 카메라 */}
      <AiImageUploadSection>
        {/* 사진 */}
        <AiImageContainer isAnalyzed={isAnalyzed}>
          {isAnalyzed && (
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
        <AiTitleWrapper>{titleText}</AiTitleWrapper>
        <AiButtonWrapper>
          <AiButton
            // 버튼 활성화: 업로드 전, 분석 중
            disabled={(!isImgUploaded || isAnalyzed) && !isCompletion}
            isImgUploaded={isImgUploaded}
            isAnalyzed={isAnalyzed}
            isCompletion={isCompletion}
            onClick={onClickAnalyze}
          >
            {buttonText}
          </AiButton>
        </AiButtonWrapper>
      </AiTopContainer>
      <AiGuide />
    </Container>
  );
}

export default Ai;
