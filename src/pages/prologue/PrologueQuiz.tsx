import React from "react";

import { img } from "../../../src/assets/imgImport";

import {
  PrologueSection,
  PrologueTitleWrapper,
  PrologueTitle,
  PrologueSubTitleWhite,
  PrologueQuizTitleContainer,
  PrologueQuizSubTitleContainer,
  PrologueSubTitleGray,
  QuizImgContainer,
  Quiz1ImgWrapper,
  Quiz2ImgWrapper,
  Quiz1Img,
  PrologueQuiz2,
} from "../../styles/prologueStyles/PrologueStyle";

function PrologueQuiz() {
  return (
    <PrologueSection>
      <PrologueQuizTitleContainer>
        <PrologueTitleWrapper className="fade-class">
          <PrologueTitle>분리수거 퀴즈</PrologueTitle>
        </PrologueTitleWrapper>
      </PrologueQuizTitleContainer>
      <PrologueQuizSubTitleContainer className="fade-class">
        <PrologueSubTitleGray>분리수거 상식,</PrologueSubTitleGray>
        <PrologueSubTitleGray>퀴즈로 재밌게 배우자!</PrologueSubTitleGray>
      </PrologueQuizSubTitleContainer>
      <QuizImgContainer className="fade-class">
        <Quiz1ImgWrapper>
          <Quiz1Img src={img.quiz1} />
        </Quiz1ImgWrapper>
      </QuizImgContainer>
      <QuizImgContainer className="fade-class" delay="0.7s">
        <Quiz2ImgWrapper>
          <Quiz1Img src={img.quiz2} />
        </Quiz2ImgWrapper>
      </QuizImgContainer>
      <div>
        <PrologueSubTitleGray className="fade-class" delay="0.9s">
          객관식부터 OX까지 다양한 질문 수록
        </PrologueSubTitleGray>
      </div>
    </PrologueSection>
  );
}

export default PrologueQuiz;
