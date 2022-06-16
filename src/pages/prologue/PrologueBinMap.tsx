import React from "react";

import { img } from "../../assets/imgImport";

import {
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
            <PrologueTitleWhite className="fade-class">
              서울시
            </PrologueTitleWhite>
          </div>
          <div>
            <PrologueTitleWhite className="fade-class" delay="0.8s">
              공공 쓰레기통 지도
            </PrologueTitleWhite>
          </div>
        </PrologueBinMapTitleContainer>
        <PrologueSubTitleContainer className="fade-class" delay="1.8s">
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
