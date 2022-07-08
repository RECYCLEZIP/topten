import React from "react";

import {
  PrologueTitle,
  PrologueTitleGreen,
  PrologueStepSection,
  PrologueTitleWrapper,
  PrologueStepsContainer,
  PrologueStepContainer,
  PrologueStepLeftContainer,
  PrologueStepRightContainer,
  PrologueStepLabel,
  PrologueStepTitle,
  PrologueStepSubTitle,
} from "../../styles/prologueStyles/PrologueStyle";

function PrologueStep() {
  return (
    <PrologueStepSection>
      <PrologueTitleWrapper className="fade-class">
        <PrologueTitle>AI가 알려주는</PrologueTitle>
      </PrologueTitleWrapper>
      <PrologueTitleWrapper className="fade-class" delay="0.5s">
        <PrologueTitle>분리수거 </PrologueTitle>
        <PrologueTitleGreen>3 STEP</PrologueTitleGreen>
      </PrologueTitleWrapper>
      <PrologueStepsContainer className="fade-class">
        <PrologueStepLeftContainer className="fade-class">
          <PrologueStepLabel>STEP 1</PrologueStepLabel>
          <PrologueStepTitle>사진 올리고,</PrologueStepTitle>
          <PrologueStepSubTitle>쓰레기 사진 업로드</PrologueStepSubTitle>
        </PrologueStepLeftContainer>
        <PrologueStepContainer className="fade-class">
          <PrologueStepLabel>STEP 2</PrologueStepLabel>
          <PrologueStepTitle>AI 분석 확인하고,</PrologueStepTitle>
          <PrologueStepSubTitle>
            쓰레기 별 적절한 폐기 방법 분석
          </PrologueStepSubTitle>
        </PrologueStepContainer>
        <PrologueStepRightContainer className="fade-class">
          <PrologueStepLabel>STEP 3</PrologueStepLabel>
          <PrologueStepTitle>분리수거 하기</PrologueStepTitle>
          <PrologueStepSubTitle>AI가 알려준대로 분리수거</PrologueStepSubTitle>
        </PrologueStepRightContainer>
      </PrologueStepsContainer>
    </PrologueStepSection>
  );
}

export default PrologueStep;
