import React from "react";

import AiImageupload from "./AiImageUpload";
import AiGuide from "./AiGuide";

import { useRecoilValue } from "recoil";
import { AiSituationState } from "../../stores/atoms";

import { Container, AiTopTitle } from "../../styles/aiStyles/AiStyle";

function Ai() {
  const situation = useRecoilValue(AiSituationState);

  return (
    <Container>
      <AiTopTitle>AI 분리수거</AiTopTitle>
      <AiImageupload />
      {situation === "done" ? <></> : <AiGuide />}
    </Container>
  );
}

export default Ai;
