import React from "react";

import PrologueBubble from "./PrologueBubble";
import PrologueAsk from "./PrologueAsk";
import PrologueStep from "./PrologueStep";
import PrologueBinMap from "./PrologueBinMap";
import PrologueQuiz from "./PrologueQuiz";
import PrologueEnd from "./PrologueEnd";

function Prologue() {
  return (
    <>
      <PrologueBubble />
      <PrologueAsk />
      <PrologueStep />
      <PrologueBinMap />
      <PrologueQuiz />
      <PrologueEnd />
    </>
  );
}

export default Prologue;
