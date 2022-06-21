import React from "react";

import { img } from "../../assets/imgImport";

import {
  PrologueTitleWrapper,
  PrologueSubTitleWhite,
  PrologueTitleWhite,
  PrologueBinMapSection,
  PrologueBinMapTextContainer,
  PrologueBinMapTitleContainer,
  PrologueSubTitleContainer,
  BinMapLabel,
  PrologueBinMapImgContainer,
  PrologueBinMapImgWrapper,
  PrologueBinMapImg,
} from "../../styles/prologueStyles/PrologueStyle";

function PrologueBinMap() {
  return (
    <PrologueBinMapSection>
      <PrologueBinMapTextContainer>
        <PrologueBinMapTitleContainer>
          <div>
            <BinMapLabel className="fade-class">서울시 전지역</BinMapLabel>
            <PrologueTitleWrapper className="fade-class">
              <PrologueTitleWhite>서울시</PrologueTitleWhite>
            </PrologueTitleWrapper>
          </div>
          <div>
            <PrologueTitleWrapper className="fade-class" delay="0.5s">
              <PrologueTitleWhite>
                공공 쓰레기통 지도
              </PrologueTitleWhite>
            </PrologueTitleWrapper>
          </div>
        </PrologueBinMapTitleContainer>
        <PrologueSubTitleContainer className="fade-class" delay="0.9s">
          <PrologueSubTitleWhite>25개 구에 설치된</PrologueSubTitleWhite>
          <PrologueSubTitleWhite>
            공공 쓰레기통의 위치를 한 눈에!
          </PrologueSubTitleWhite>
        </PrologueSubTitleContainer>
      </PrologueBinMapTextContainer>
      <PrologueBinMapImgContainer>
        <PrologueBinMapImgWrapper className="fade-class">
          <PrologueBinMapImg src={img.map} alt="map" />
        </PrologueBinMapImgWrapper>
      </PrologueBinMapImgContainer>
    </PrologueBinMapSection>
  );
}

export default PrologueBinMap;
