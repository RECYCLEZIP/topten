import React, { useEffect } from "react";

import { img } from "../../assets/imgImport";

import {
  PrologueSection,
  PrologueTitle,
  AskTopContainer,
  PrologueAskTitleContainer,
  AskTitleWrapper,
  PrologueTitleLightGreen,
  PrologueTitleGreen,
  AskHandWrapper,
  PrologueAskImgWrapper,
  AskHandImg,
  PrologueAskImg,
} from "../../styles/prologueStyles/PrologueStyle";

function PrologueAsk() {
  return (
    <PrologueSection>
      <AskTopContainer>
        <PrologueAskTitleContainer>
          <AskTitleWrapper className="fade-class">
            <PrologueTitleLightGreen>올바른 </PrologueTitleLightGreen>
            <PrologueTitle>분리수거,</PrologueTitle>
          </AskTitleWrapper>
          <AskTitleWrapper className="fade-class" delay="0.5s">
            <PrologueTitleGreen>확실히 </PrologueTitleGreen>
            <PrologueTitle>하고 계신가요?</PrologueTitle>
          </AskTitleWrapper>
        </PrologueAskTitleContainer>
        <AskHandWrapper className="fade-class">
          <AskHandImg src={img.hand} alt="hand" />
        </AskHandWrapper>
      </AskTopContainer>
      <PrologueAskImgWrapper className="fade-class">
        <PrologueAskImg src={img.bin} alt="bins" />
      </PrologueAskImgWrapper>
    </PrologueSection>
  );
}

export default PrologueAsk;
