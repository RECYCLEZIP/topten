import React from "react";

import { img } from "../../assets/imgImport";

import {
  AiGuideSection,
  AiGuidesContainer,
  AiGuidesTitle,
  AiGuideContainer,
  AiGuideImgWrapper,
  AiGuideImg,
  AiGuideTitle,
} from "../../styles/aiStyles/AiStyle";

function AiGuide() {
  return (
    <>
      <AiGuideSection>
        <div>
          <AiGuidesTitle>이런 사진이 좋아요!</AiGuidesTitle>
        </div>
        <AiGuidesContainer>
          <AiGuideContainer>
            <AiGuideImgWrapper>
              <AiGuideImg src={img.like5} />
            </AiGuideImgWrapper>
            <div>
              <AiGuideTitle>화질이 좋고 객체 구분이 명확한 사진</AiGuideTitle>
            </div>
          </AiGuideContainer>
          <AiGuideContainer>
            <AiGuideImgWrapper>
              <AiGuideImg src={img.like4} />
            </AiGuideImgWrapper>
            <div>
              <AiGuideTitle>물체를 세워서 정면으로 찍은 사진</AiGuideTitle>
            </div>
          </AiGuideContainer>
          <AiGuideContainer>
            <AiGuideImgWrapper>
              <AiGuideImg src={img.like6} />
            </AiGuideImgWrapper>
            <div>
              <AiGuideTitle>형태가 온전히 드러날 수 있는 사진</AiGuideTitle>
            </div>
          </AiGuideContainer>
          <AiGuideContainer>
            <AiGuideImgWrapper>
              <AiGuideImg src={img.like7} />
            </AiGuideImgWrapper>
            <div>
              <AiGuideTitle>깔끔한 단일 배경에서 찍은 사진</AiGuideTitle>
            </div>
          </AiGuideContainer>
        </AiGuidesContainer>
      </AiGuideSection>
      <AiGuideSection>
        <div>
          <AiGuidesTitle>이런 사진은 식별이 어려워요!</AiGuidesTitle>
        </div>
        <AiGuidesContainer>
          <AiGuideContainer>
            <AiGuideImgWrapper>
              <AiGuideImg src={img.hard1} />
            </AiGuideImgWrapper>
            <div>
              <AiGuideTitle>상당 부분 가려진 객체</AiGuideTitle>
            </div>
          </AiGuideContainer>
          <AiGuideContainer>
            <AiGuideImgWrapper>
              <AiGuideImg src={img.hard2} />
            </AiGuideImgWrapper>
            <div>
              <AiGuideTitle>심한 파손이나 오염이 있는 객체</AiGuideTitle>
            </div>
          </AiGuideContainer>
          <AiGuideContainer>
            <AiGuideImgWrapper>
              <AiGuideImg src={img.hard3} />
            </AiGuideImgWrapper>
            <div>
              <AiGuideTitle>단일 객체가 아닌 사진</AiGuideTitle>
            </div>
          </AiGuideContainer>
          <AiGuideContainer>
            <AiGuideImgWrapper>
              <AiGuideImg src={img.hard4} />
            </AiGuideImgWrapper>
            <div>
              <AiGuideTitle>어두운 곳에서 촬영된 사진</AiGuideTitle>
            </div>
          </AiGuideContainer>
        </AiGuidesContainer>
      </AiGuideSection>
    </>
  );
}

export default AiGuide;
