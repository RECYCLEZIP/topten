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
              <AiGuideImg src={img.like1} />
            </AiGuideImgWrapper>
            <div>
              <AiGuideTitle>화질이 선명한 사진</AiGuideTitle>
            </div>
          </AiGuideContainer>
          <AiGuideContainer>
            <AiGuideImgWrapper>
              <AiGuideImg src={img.like2} />
            </AiGuideImgWrapper>
            <div>
              <AiGuideTitle>객체가 명확히 구분되는 사진</AiGuideTitle>
            </div>
          </AiGuideContainer>
          <AiGuideContainer>
            <AiGuideImgWrapper>
              <AiGuideImg src={img.like3} />
            </AiGuideImgWrapper>
            <div>
              <AiGuideTitle>형태가 온전히 드러나는 사진</AiGuideTitle>
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
