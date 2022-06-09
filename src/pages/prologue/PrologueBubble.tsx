import React from "react";

import {
  PrologueBubbleSection,
  PrologueBubble1,
  PrologueBubble2,
  PrologueBubble3,
} from "../../styles/prologueStyles/PrologueStyle";

function PrologueBubble() {
  return (
    <PrologueBubbleSection>
      <PrologueBubble1>치킨 뼈는 음식 쓰레기인가요?</PrologueBubble1>
      <PrologueBubble2>
        <span>페트병 뚜껑은</span>
        <span>따로 버려야 하나요?</span>
      </PrologueBubble2>
      <PrologueBubble3>바나나 껍질은 어떻게 버려요?</PrologueBubble3>
    </PrologueBubbleSection>
  );
}

export default PrologueBubble;
