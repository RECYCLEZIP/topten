import React, { useState, useRef } from "react";

import { img } from "../../assets/imgImport";

import {
  Container,
  AiTopTitle,
  AiImageUploadSection,
  AiImageContainer,
  AiImageWrapper,
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

  const imgInput = useRef<any>();

  // 파일 저장
  const onClickImgUpload = (e: any) => {
    imgInput.current.click();
    
    setFileImage(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <Container>
      <div>
        <AiTopTitle>AI 분리수거</AiTopTitle>
      </div>
      {/* 사진, 카메라 */}
      <AiImageUploadSection>
        {/* 사진 */}
        <AiImageContainer>
          <AiImageWrapper>
            <AiImage></AiImage>
          </AiImageWrapper>
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
        <AiTitleWrapper>쓰레기 사진을 업로드해주세요</AiTitleWrapper>
        <AiButtonWrapper>
          <AiButton>분석하기</AiButton>
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
