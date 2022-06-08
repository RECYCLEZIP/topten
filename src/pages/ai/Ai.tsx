import React from "react";

import AiImageupload from "./AiImageUpload";
import AiGuide from "./AiGuide";

import { Container, AiTopTitle } from "../../styles/aiStyles/AiStyle";

function Ai() {
  return (
    <Container>
      <AiTopTitle>AI 분리수거</AiTopTitle>
      <AiImageupload />
      <AiGuide />
    </Container>
  );
}

export default Ai;
