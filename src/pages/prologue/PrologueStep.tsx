import react from "React";

import {
  PrologueTitle,
  PrologueTitleGreen,
  PrologueStepSection,
  PrologueStepsContainer,
  PrologueStepContainer,
  PrologueStepLabel,
  PrologueStepTitle,
  PrologueStepSubTitle,
} from "../../styles/prologueStyles/PrologueStyle";

function PrologueStep() {
  return (
    <PrologueStepSection>
      <div>
        <PrologueTitle>AI가 알려주는</PrologueTitle>
      </div>
      <div>
        <PrologueTitle>분리수거 </PrologueTitle>
        <PrologueTitleGreen>3 STEP</PrologueTitleGreen>
      </div>
      <PrologueStepsContainer>
        <PrologueStepContainer>
          <PrologueStepLabel>STEP 1</PrologueStepLabel>
          <PrologueStepTitle>사진 올리고,</PrologueStepTitle>
          <PrologueStepSubTitle>
            쓰레기 사진 업로드
          </PrologueStepSubTitle>
        </PrologueStepContainer>
        <PrologueStepContainer>
          <PrologueStepLabel>STEP 2</PrologueStepLabel>
          <PrologueStepTitle>
            AI 분석 확인하고,
          </PrologueStepTitle>
          <PrologueStepSubTitle>
            쓰레기 별 적절한 폐기 방법 분석
          </PrologueStepSubTitle>
        </PrologueStepContainer>
        <PrologueStepContainer>
          <PrologueStepLabel>STEP 3</PrologueStepLabel>
          <PrologueStepTitle>사진 올리고,</PrologueStepTitle>
          <PrologueStepSubTitle>
            AI가 알려준대로 분리수거
          </PrologueStepSubTitle>
        </PrologueStepContainer>
      </PrologueStepsContainer>
    </PrologueStepSection>
  );
}

export default PrologueStep;
