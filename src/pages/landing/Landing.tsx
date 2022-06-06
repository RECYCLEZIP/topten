import React from "react";

import { Button } from "../../styles/ButtonStyles";

import { img } from "../../assets/imgImport";

import {
  LandingTitle,
  LandingSubTitleWhite,
  LandingTitleWhite,
  Section1,
  Section2,
  LandingBubble1,
  LandingBubble2,
  LandingBubble3,
  LandingSection2TitleContainer,
  LandingTitleLightGreen,
  LandingTitleGreen,
  LandingSection2ImgWrapper,
  LandingSection2Img,
  Section3,
  LandingSection3StepContainer,
  LandingSectionStepContainer,
  LandingSection3StepLabel,
  LandingSection3StepTitle,
  LandingSection3StepSubTitle,
  Section4,
  LandingSection4TitleContainer,
  LandingSubTitleContainer,
  Section4Label,
  PrologueSection4ImgContainer,
  PrologueSection4ImgWrapper,
  PrologueSection4Img,
  Section5,
  LandingSection5TitleContainer,
  LandingSection5SubTitleContainer,
  LandingSubTitleGray,
  LandingQuiz1,
  LandingQuiz2,
  Section6,
  LandingSection6TitleContainer,
} from "../../styles/landingStyles/LandingStyle";

function Landing() {
  return (
    <>
      <Section1>
        <LandingBubble1>치킨 뼈는 음식 쓰레기인가요?</LandingBubble1>
        <LandingBubble2>
          <span>페트병 뚜껑은</span>
          <span>따로 버려야 하나요?</span>
        </LandingBubble2>
        <LandingBubble3>바나나 껍질은 어떻게 버려요?</LandingBubble3>
      </Section1>
      <Section2>
        <LandingSection2TitleContainer>
          <div>
            <LandingTitleLightGreen>올바른 </LandingTitleLightGreen>
            <LandingTitle>분리수거,</LandingTitle>
          </div>
          <div>
            <LandingTitleGreen>확실히 </LandingTitleGreen>
            <LandingTitle>하고 계신가요?</LandingTitle>
          </div>
        </LandingSection2TitleContainer>
        <LandingSection2ImgWrapper>
          <LandingSection2Img src={img.bin} alt="bins" />
        </LandingSection2ImgWrapper>
      </Section2>
      <Section3>
        <div>
          <LandingTitle>AI가 알려주는</LandingTitle>
        </div>
        <div>
          <LandingTitle>분리수거 </LandingTitle>
          <LandingTitleGreen>3 STEP</LandingTitleGreen>
        </div>
        <LandingSection3StepContainer>
          <LandingSectionStepContainer>
            <LandingSection3StepLabel>STEP 1</LandingSection3StepLabel>
            <LandingSection3StepTitle>사진 올리고,</LandingSection3StepTitle>
            <LandingSection3StepSubTitle>
              쓰레기 사진 업로드
            </LandingSection3StepSubTitle>
          </LandingSectionStepContainer>
          <LandingSectionStepContainer>
            <LandingSection3StepLabel>STEP 2</LandingSection3StepLabel>
            <LandingSection3StepTitle>
              AI 분석 확인하고,
            </LandingSection3StepTitle>
            <LandingSection3StepSubTitle>
              쓰레기 별 적절한 폐기 방법 분석
            </LandingSection3StepSubTitle>
          </LandingSectionStepContainer>
          <LandingSectionStepContainer>
            <LandingSection3StepLabel>STEP 3</LandingSection3StepLabel>
            <LandingSection3StepTitle>사진 올리고,</LandingSection3StepTitle>
            <LandingSection3StepSubTitle>
              AI가 알려준대로 분리수거
            </LandingSection3StepSubTitle>
          </LandingSectionStepContainer>
        </LandingSection3StepContainer>
      </Section3>
      <Section4>
        <div>
          <LandingSection4TitleContainer>
            <div>
              <Section4Label>서울시 전지역</Section4Label>
              <LandingTitleWhite>서울시</LandingTitleWhite>
            </div>
            <div>
              <LandingTitleWhite>공공 쓰레기통 지도</LandingTitleWhite>
            </div>
          </LandingSection4TitleContainer>
          <LandingSubTitleContainer>
            <LandingSubTitleWhite>25개 구에 설치된</LandingSubTitleWhite>
            <LandingSubTitleWhite>
              공공 쓰레기통의 위치를 한 눈에!
            </LandingSubTitleWhite>
          </LandingSubTitleContainer>
        </div>
        <PrologueSection4ImgContainer>
          <PrologueSection4ImgWrapper>
            <PrologueSection4Img src={img.map} alt="map" />
          </PrologueSection4ImgWrapper>
        </PrologueSection4ImgContainer>
      </Section4>
      <Section5>
        <LandingSection5TitleContainer>
          <LandingTitle>분리수거 퀴즈</LandingTitle>
        </LandingSection5TitleContainer>
        <LandingSection5SubTitleContainer>
          <LandingSubTitleGray>분리수거 상식,</LandingSubTitleGray>
          <LandingSubTitleGray>퀴즈로 재밌게 배우자!</LandingSubTitleGray>
        </LandingSection5SubTitleContainer>
        <LandingQuiz1>
          <LandingSubTitleWhite>페트병의 올바른</LandingSubTitleWhite>
          <LandingSubTitleWhite>폐기 방법을 고르세요.</LandingSubTitleWhite>
        </LandingQuiz1>
        <LandingQuiz2>
          <LandingSubTitleWhite>폐트병은 뚜껑와 라벨을</LandingSubTitleWhite>
          <LandingSubTitleWhite> 분리하여 버려야 한다?</LandingSubTitleWhite>
        </LandingQuiz2>
        <LandingSubTitleGray>
          객관식부터 OX까지 다양한 질문 수록
        </LandingSubTitleGray>
      </Section5>
      <Section6>
        <LandingSection6TitleContainer>
          <LandingTitleWhite>녹색 환경을 위한 작은 첫걸음,</LandingTitleWhite>
          <LandingTitleWhite>함께 하세요!</LandingTitleWhite>
        </LandingSection6TitleContainer>
        <Button onClick={() => alert("시작하기")}>시작하기</Button>
      </Section6>
    </>
  );
}

export default Landing;
