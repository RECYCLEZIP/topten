import React from "react";

import { img } from "../../assets/imgImport";

import {
    PrologueSection,
    PrologueTitle,
    PrologueAskTitleContainer,
    PrologueTitleLightGreen,
    PrologueTitleGreen,
    PrologueAskImgWrapper,
    PrologueAskImg,
  } from "../../styles/prologueStyles/PrologueStyle";

function PrologueAsk() {
  return (
    <PrologueSection>
      <PrologueAskTitleContainer>
        <div>
          <PrologueTitleLightGreen>올바른 </PrologueTitleLightGreen>
          <PrologueTitle>분리수거,</PrologueTitle>
        </div>
        <div>
          <PrologueTitleGreen>확실히 </PrologueTitleGreen>
          <PrologueTitle>하고 계신가요?</PrologueTitle>
        </div>
      </PrologueAskTitleContainer>
      <PrologueAskImgWrapper>
        <PrologueAskImg src={img.bin} alt="bins" />
      </PrologueAskImgWrapper>
    </PrologueSection>
  );
}

export default PrologueAsk;
