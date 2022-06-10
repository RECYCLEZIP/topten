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
      {/* 이런 사진이 좋아요! */}
      <AiGuideSection>
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
      </AiGuideSection>
      {/* 이런 사진은 식별이 어려워요! */}
      <AiGuideSection>
        {/* 타이틀 */}
        <div>
          <AiGuidesTitle>이런 사진은 식별이 어려워요!</AiGuidesTitle>
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
      </AiGuideSection>
    </>
  );
}

export default AiGuide;
