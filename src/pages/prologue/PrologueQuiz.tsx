import React from "react";

import {
  PrologueSection,
  PrologueTitle,
  PrologueSubTitleWhite,
  PrologueQuizTitleContainer,
  PrologueQuizSubTitleContainer,
  PrologueSubTitleGray,
  PrologueQuiz1,
  PrologueQuiz2,
} from "../../styles/prologueStyles/PrologueStyle";

function PrologueQuiz() {
  return (
    <PrologueSection>
      <PrologueQuizTitleContainer>
        <PrologueTitle className="fade-class">분리수거 퀴즈</PrologueTitle>
      </PrologueQuizTitleContainer>
      <PrologueQuizSubTitleContainer className="fade-class">
        <PrologueSubTitleGray>분리수거 상식,</PrologueSubTitleGray>
        <PrologueSubTitleGray>퀴즈로 재밌게 배우자!</PrologueSubTitleGray>
      </PrologueQuizSubTitleContainer>
      <PrologueQuiz1>
        <PrologueSubTitleWhite>페트병의 올바른</PrologueSubTitleWhite>
        <PrologueSubTitleWhite>폐기 방법을 고르세요.</PrologueSubTitleWhite>
      </PrologueQuiz1>
      <PrologueQuiz2>
        <PrologueSubTitleWhite>폐트병은 뚜껑와 라벨을</PrologueSubTitleWhite>
        <PrologueSubTitleWhite> 분리하여 버려야 한다?</PrologueSubTitleWhite>
      </PrologueQuiz2>
      <PrologueSubTitleGray className="fade-class" delay="2.1s">
        객관식부터 OX까지 다양한 질문 수록
      </PrologueSubTitleGray>
    </PrologueSection>
  );
}

export default PrologueQuiz;
