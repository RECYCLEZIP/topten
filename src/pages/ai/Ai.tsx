import React, { useState, useRef, useEffect } from "react";

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
  AiGuideLikeSection,
  AiGuidesContainer,
  AiGuidesTitle,
  AiGuideContainer,
  AiGuideImgWrapper,
  AiGuideImg,
  AiGuideTitle,
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
      {/* 이런 사진이 좋아요! */}
      <AiGuideLikeSection>
        {/* 타이틀 */}
        <div>
          <AiGuidesTitle>이런 사진이 좋아요!</AiGuidesTitle>
        </div>
        {/* 예시 섹션 */}
        <AiGuidesContainer>
          {/* 사진 1 섹션*/}
          <AiGuideContainer>
            {/* 사진 1 래퍼 */}
            <AiGuideImgWrapper>
              <AiGuideImg src={img.like1} />
            </AiGuideImgWrapper>
            {/* 사진 1 설명 */}
            <div>
              <AiGuideTitle>화질이 선명한 사진</AiGuideTitle>
            </div>
          </AiGuideContainer>
          {/* 사진 1 섹션*/}
          <AiGuideContainer>
            {/* 사진 1 래퍼 */}
            <AiGuideImgWrapper>
              <AiGuideImg src={img.like2} />
            </AiGuideImgWrapper>
            {/* 사진 1 설명 */}
            <div>
              <AiGuideTitle>객체가 명확히 구분되는 사진</AiGuideTitle>
            </div>
          </AiGuideContainer>
          <AiGuideContainer>
            {/* 사진 1 래퍼 */}
            <AiGuideImgWrapper>
              <AiGuideImg src={img.like3} />
            </AiGuideImgWrapper>
            {/* 사진 1 설명 */}
            <div>
              <AiGuideTitle>형태가 온전히 드러나는 사진</AiGuideTitle>
            </div>
          </AiGuideContainer>
        </AiGuidesContainer>
      </AiGuideLikeSection>
      <AiGuideLikeSection>
        {/* 타이틀 */}
        <div>
          <AiGuidesTitle>이런 식별이 어려워요!</AiGuidesTitle>
        </div>
        {/* 사진 예시 섹션 */}
        <AiGuidesContainer>
          {/* 사진 1 섹션*/}
          <AiGuideContainer>
            {/* 사진 1 래퍼 */}
            <AiGuideImgWrapper>
              <AiGuideImg src={img.hard1} />
            </AiGuideImgWrapper>
            {/* 사진 1 설명 */}
            <div>
              <AiGuideTitle>상당 부분 가려진 객체</AiGuideTitle>
            </div>
          </AiGuideContainer>
          {/* 사진 1 섹션*/}
          <AiGuideContainer>
            {/* 사진 1 래퍼 */}
            <AiGuideImgWrapper>
              <AiGuideImg src={img.hard2} />
            </AiGuideImgWrapper>
            {/* 사진 1 설명 */}
            <div>
              <AiGuideTitle>심한 파손이나 오염이 있는 객체</AiGuideTitle>
            </div>
          </AiGuideContainer>
          <AiGuideContainer>
            {/* 사진 1 래퍼 */}
            <AiGuideImgWrapper>
              <AiGuideImg src={img.hard3} />
            </AiGuideImgWrapper>
            {/* 사진 1 설명 */}
            <div>
              <AiGuideTitle>단일 객체가 아닌 사진</AiGuideTitle>
            </div>
          </AiGuideContainer>
          <AiGuideContainer>
            {/* 사진 1 래퍼 */}
            <AiGuideImgWrapper>
              <img />
            </AiGuideImgWrapper>
            {/* 사진 1 설명 */}
            <div>
              <AiGuideTitle>어두운 곳에서 촬영된 사진</AiGuideTitle>
            </div>
          </AiGuideContainer>
        </AiGuidesContainer>
      </AiGuideLikeSection>
    </Container>
  );
}

export default Ai;
