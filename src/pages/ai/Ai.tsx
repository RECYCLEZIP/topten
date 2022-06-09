import React from "react";

import AiImageUpload from "./AiImageUpload";
import AiGuide from "./AiGuide";
import AiResult from "./AiResult";

import { useRecoilValue } from "recoil";
import { AiSituationState } from "../../stores/atoms";

import { Container, TopTitle } from "../../styles/basicStyle";

function Ai() {
  const situation = useRecoilValue(AiSituationState);

  return (
    <Container>
      <TopTitle>AI 분리수거</TopTitle>
      <AiImageUpload />
      {situation === "done" ? <AiResult /> : <AiGuide />}
    </Container>
  );
}

export default Ai;
