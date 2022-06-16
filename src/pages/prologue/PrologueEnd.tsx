import React from "react";

import { Button } from "../../styles/ButtonStyles";

import {
  PrologueTitleWhite,
  PrologueEndSection,
  PrologueEndTitleContainer,
  StartButton,
} from "../../styles/prologueStyles/PrologueStyle";

function PrologueEnd() {
  return (
    <PrologueEndSection>
      <PrologueEndTitleContainer>
        <PrologueTitleWhite className="fade-class">
          녹색 환경을 위한 작은 첫걸음,
        </PrologueTitleWhite>
        <PrologueTitleWhite className="fade-class" delay="0.8s">
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
