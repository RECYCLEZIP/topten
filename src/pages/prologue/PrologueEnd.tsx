import React from "react";

import { useNavigate } from "react-router";

import { img } from "../../assets/imgImport";

import {
  PrologueTitleWhite,
  PrologueEndSection,
  LogoImgWrapper,
  LogoImg,
  PrologueEndTitleContainer,
  StartButton,
} from "../../styles/prologueStyles/PrologueStyle";

function PrologueEnd() {
  const navigate = useNavigate();

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
      <StartButton className="fade-class" onClick={() => navigate("/")}>
        시작하기
      </StartButton>
    </PrologueEndSection>
  );
}

export default PrologueEnd;
