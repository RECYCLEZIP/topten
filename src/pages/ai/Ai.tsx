import React from "react";

import AiImageUpload from "./AiImageUpload";
import AiGuide from "./AiGuide";
import AiResult from "./AiResult";

import { useRecoilValue } from "recoil";
import { AiSituationState } from "../../stores/atoms";

import { Container, AiTopTitle } from "../../styles/aiStyles/AiStyle";

function Ai() {
  const situation = useRecoilValue(AiSituationState);

  return (
    <Container>
      <AiTopTitle>AI 분리수거</AiTopTitle>
      <AiImageUpload />
      {situation === "done" ? <AiResult /> : <AiGuide />}
    </Container>
  );
}

export default Ai;
