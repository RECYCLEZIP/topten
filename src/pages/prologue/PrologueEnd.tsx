import React from "react";

import { img } from "../../assets/imgImport";

import { Button } from "../../styles/ButtonStyles";

import {
  PrologueTitleWhite,
  PrologueEndSection,
  LogoImgWrapper,
  LogoImg,
  PrologueEndTitleContainer,
  StartButton,
} from "../../styles/prologueStyles/PrologueStyle";

function PrologueEnd() {
  return (
    <PrologueEndSection>
      <LogoImgWrapper className="fade-class">
        <LogoImg src={img.greenBackLogo} alt="서비스 로고" />
      </LogoImgWrapper>
      <PrologueEndTitleContainer>
        <PrologueTitleWhite className="fade-class" delay="0.5s">
          녹색 환경을 위한 작은 첫걸음,
        </PrologueTitleWhite>
        <PrologueTitleWhite className="fade-class" delay="0.7s">
          함께 하세요!
        </PrologueTitleWhite>
      </PrologueEndTitleContainer>
      <StartButton className="fade-class" onClick={() => alert("시작하기")}>
        시작하기
      </StartButton>
    </PrologueEndSection>
  );
}

export default PrologueEnd;
