import React from "react";

import { Button } from "../../styles/ButtonStyles";

import {
  PrologueTitleWhite,
  PrologueEndSection,
  PrologueEndTitleContainer,
} from "../../styles/prologueStyles/PrologueStyle";

function PrologueEnd() {
  return (
    <PrologueEndSection>
      <PrologueEndTitleContainer>
        <PrologueTitleWhite>녹색 환경을 위한 작은 첫걸음,</PrologueTitleWhite>
        <PrologueTitleWhite>함께 하세요!</PrologueTitleWhite>
      </PrologueEndTitleContainer>
      <Button onClick={() => alert("시작하기")}>시작하기</Button>
    </PrologueEndSection>
  );
}

export default PrologueEnd;
