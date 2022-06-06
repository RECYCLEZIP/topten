import React from "react";

import { Button } from "../../styles/ButtonStyles";

import { img } from "../../assets/imgImport";

import {
  PrologueSection,
  PrologueTitle,
  PrologueSubTitleWhite,
  PrologueTitleWhite,
  Section1,
  PrologueBubble1,
  PrologueBubble2,
  PrologueBubble3,
  PrologueSection2TitleContainer,
  PrologueTitleLightGreen,
  PrologueTitleGreen,
  PrologueSection2ImgWrapper,
  PrologueSection2Img,
  Section3,
  PrologueSection3StepContainer,
  PrologueSectionStepContainer,
  PrologueSection3StepLabel,
  PrologueSection3StepTitle,
  PrologueSection3StepSubTitle,
  Section4,
  PrologueSection4TextContainer,
  PrologueSection4TitleContainer,
  PrologueSubTitleContainer,
  Section4Label,
  PrologueSection4ImgContainer,
  PrologueSection4ImgWrapper,
  PrologueSection4Img,
  PrologueSection5TitleContainer,
  PrologueSection5SubTitleContainer,
  PrologueSubTitleGray,
  PrologueQuiz1,
  PrologueQuiz2,
  Section6,
  PrologueSection6TitleContainer,
} from "../../styles/prologueStyles/PrologueStyle";

function Prologue() {
  return (
    <>
      <Section1>
        <PrologueBubble1>치킨 뼈는 음식 쓰레기인가요?</PrologueBubble1>
        <PrologueBubble2>
          <span>페트병 뚜껑은</span>
          <span>따로 버려야 하나요?</span>
        </PrologueBubble2>
        <PrologueBubble3>바나나 껍질은 어떻게 버려요?</PrologueBubble3>
      </Section1>
      <PrologueSection>
        <PrologueSection2TitleContainer>
          <div>
            <PrologueTitleLightGreen>올바른 </PrologueTitleLightGreen>
            <PrologueTitle>분리수거,</PrologueTitle>
          </div>
          <div>
            <PrologueTitleGreen>확실히 </PrologueTitleGreen>
            <PrologueTitle>하고 계신가요?</PrologueTitle>
          </div>
        </PrologueSection2TitleContainer>
        <PrologueSection2ImgWrapper>
          <PrologueSection2Img src={img.bin} alt="bins" />
        </PrologueSection2ImgWrapper>
      </PrologueSection>
      <Section3>
        <div>
          <PrologueTitle>AI가 알려주는</PrologueTitle>
        </div>
        <div>
          <PrologueTitle>분리수거 </PrologueTitle>
          <PrologueTitleGreen>3 STEP</PrologueTitleGreen>
        </div>
        <PrologueSection3StepContainer>
          <PrologueSectionStepContainer>
            <PrologueSection3StepLabel>STEP 1</PrologueSection3StepLabel>
            <PrologueSection3StepTitle>사진 올리고,</PrologueSection3StepTitle>
            <PrologueSection3StepSubTitle>
              쓰레기 사진 업로드
            </PrologueSection3StepSubTitle>
          </PrologueSectionStepContainer>
          <PrologueSectionStepContainer>
            <PrologueSection3StepLabel>STEP 2</PrologueSection3StepLabel>
            <PrologueSection3StepTitle>
              AI 분석 확인하고,
            </PrologueSection3StepTitle>
            <PrologueSection3StepSubTitle>
              쓰레기 별 적절한 폐기 방법 분석
            </PrologueSection3StepSubTitle>
          </PrologueSectionStepContainer>
          <PrologueSectionStepContainer>
            <PrologueSection3StepLabel>STEP 3</PrologueSection3StepLabel>
            <PrologueSection3StepTitle>사진 올리고,</PrologueSection3StepTitle>
            <PrologueSection3StepSubTitle>
              AI가 알려준대로 분리수거
            </PrologueSection3StepSubTitle>
          </PrologueSectionStepContainer>
        </PrologueSection3StepContainer>
      </Section3>
      <Section4>
        <PrologueSection4TextContainer>
          <PrologueSection4TitleContainer>
            <div>
              <Section4Label>서울시 전지역</Section4Label>
              <PrologueTitleWhite>서울시</PrologueTitleWhite>
            </div>
            <div>
              <PrologueTitleWhite>공공 쓰레기통 지도</PrologueTitleWhite>
            </div>
          </PrologueSection4TitleContainer>
          <PrologueSubTitleContainer>
            <PrologueSubTitleWhite>25개 구에 설치된</PrologueSubTitleWhite>
            <PrologueSubTitleWhite>
              공공 쓰레기통의 위치를 한 눈에!
            </PrologueSubTitleWhite>
          </PrologueSubTitleContainer>
        </PrologueSection4TextContainer>
        <PrologueSection4ImgContainer>
          <PrologueSection4ImgWrapper>
            <PrologueSection4Img src={img.map} alt="map" />
          </PrologueSection4ImgWrapper>
        </PrologueSection4ImgContainer>
      </Section4>
      <PrologueSection>
        <PrologueSection5TitleContainer>
          <PrologueTitle>분리수거 퀴즈</PrologueTitle>
        </PrologueSection5TitleContainer>
        <PrologueSection5SubTitleContainer>
          <PrologueSubTitleGray>분리수거 상식,</PrologueSubTitleGray>
          <PrologueSubTitleGray>퀴즈로 재밌게 배우자!</PrologueSubTitleGray>
        </PrologueSection5SubTitleContainer>
        <PrologueQuiz1>
          <PrologueSubTitleWhite>페트병의 올바른</PrologueSubTitleWhite>
          <PrologueSubTitleWhite>폐기 방법을 고르세요.</PrologueSubTitleWhite>
        </PrologueQuiz1>
        <PrologueQuiz2>
          <PrologueSubTitleWhite>폐트병은 뚜껑와 라벨을</PrologueSubTitleWhite>
          <PrologueSubTitleWhite> 분리하여 버려야 한다?</PrologueSubTitleWhite>
        </PrologueQuiz2>
        <PrologueSubTitleGray>
          객관식부터 OX까지 다양한 질문 수록
        </PrologueSubTitleGray>
      </PrologueSection>
      <Section6>
        <PrologueSection6TitleContainer>
          <PrologueTitleWhite>녹색 환경을 위한 작은 첫걸음,</PrologueTitleWhite>
          <PrologueTitleWhite>함께 하세요!</PrologueTitleWhite>
        </PrologueSection6TitleContainer>
        <Button onClick={() => alert("시작하기")}>시작하기</Button>
      </Section6>
    </>
  );
}

export default Prologue;
