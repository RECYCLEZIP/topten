import React, { useEffect } from "react";

import { img } from "../../assets/imgImport";

import {
  PrologueSection,
  PrologueTitle,
  PrologueAskTitleContainer,
  AskTitleContainer1,
  AskTitleContainer2,
  PrologueTitleLightGreen,
  PrologueTitleGreen,
  PrologueAskImgWrapper,
  PrologueAskImg,
} from "../../styles/prologueStyles/PrologueStyle";

function PrologueAsk() {
  return (
    <PrologueSection>
      <PrologueAskTitleContainer>
        <AskTitleContainer1 className="fade-class">
          <PrologueTitleLightGreen>올바른 </PrologueTitleLightGreen>
          <PrologueTitle>분리수거,</PrologueTitle>
        </AskTitleContainer1>
        <AskTitleContainer2 className="fade-class">
          <PrologueTitleGreen>확실히 </PrologueTitleGreen>
          <PrologueTitle>하고 계신가요?</PrologueTitle>
        </AskTitleContainer2>
      </PrologueAskTitleContainer>
      <PrologueAskImgWrapper className="fade-class">
        <PrologueAskImg src={img.bin} alt="bins" />
      </PrologueAskImgWrapper>
    </PrologueSection>
  );
}

export default PrologueAsk;
