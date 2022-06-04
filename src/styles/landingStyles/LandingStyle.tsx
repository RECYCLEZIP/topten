import styled from "styled-components";

// 공통
export const LandingSection = styled.div`
  margin: 20% 5%;

  display: flow-root;
`;

export const LandingTitle = styled.span`
  font-size: 1.5rem;
`;

export const LandingTitleWhite = styled(LandingTitle)`
  color: white;
`;

export const LandingTitleLightGreen = styled(LandingTitle)`
  color: #97ccaf;
`;
export const LandingTitleGreen = styled(LandingTitle)`
  color: #21a663;
`;

export const LandingSubTitle = styled.span`
  font-size: 0.8rem;
`;

export const LandingSubTitleWhite = styled(LandingSubTitle)`
  color: white;
`;

export const LandingLabel = styled.div`
  display: inline-block;

  margin-bottom: 1%;
  padding: 3px 15px;
  border-radius: 30px;

  font-size: 0.5rem;
  font-weight: 500;
`;

export const LandingImg = styled.img`
  border-radius: 10px;
`;

// 섹션 1 - 말풍선
export const Section1 = styled(LandingSection)`
  background: yellow;

  margin-top: 10%;
`;

// 말풍선 공통
export const LandingBubble = styled.div`
  height: auto;
  padding: 1rem 2rem;
  margin: 10px 0;

  border-radius: 2rem;

  color: white;
  font-size: 1rem;
  font-weight: bold;
`;

export const LandingBubble1 = styled(LandingBubble)`
  background: #c2e9d4;

  width: 50%;
  float: left;

  color: black;
`;

export const LandingBubble2 = styled(LandingBubble)`
  background: #5bc691;

  width: 60%;
  display: grid;

  float: right;
  text-align: right;
`;

export const LandingBubble3 = styled(LandingBubble)`
  background: #21a663;

  width: 60%;
  float: left;
`;

// 섹션 2 - 올바른 분리수거, 확실히 하고 계신가요?
export const Section2 = styled(LandingSection)`
  background: pink;
`;

export const LandingSection2Img = styled(LandingImg)`
  width: 100%;
`;

export const LandingSection2TitleContainer = styled.div`
  height: auto;

  margin-bottom: 3%;
`;

// 섹션 3 - AI가 알려주는 분리수거 3 STEP
export const Section3 = styled(LandingSection)`
  background: skyblue;

  text-align: center;
`;

export const LandingSection3StepContainer = styled.div`
  width: 100%;

  margin-top: 5%;
  padding: 5% 0;

  display: grid;
  justify-items: center;

  border-radius: 30px;
  background: #f0f4f9;
`;

export const LandingSectionStepContainer = styled.div`
  display: inline-block;

  background: lightsalmon;

  margin: 20px 0;
`;

export const LandingSection3StepLabel = styled(LandingLabel)`
  background: #51cf66;
  color: white;
`;

export const LandingSection3StepTitle = styled.div`
  margin-bottom: 1%;

  font-size: 1rem;
  font-weight: bold;
`;

export const LandingSection3StepSubTitle = styled.div`
  font-size: 0.8rem;
  font-weight: 500;
`;

// 섹션 4 - 서울시 공공 쓰레기통 지도
export const Section4 = styled(LandingSection)`
  background: #69db7c;

  margin: 10% 0;
  padding: 5% 5%;
`;

export const LandingSection4TitleContainer = styled.div`
  background: red;

  width: fit-content;

  margin-bottom: 5%;
`;

export const Section4Label = styled(LandingLabel)`
  float: right;
  margin-top: 2%;

  background: #54af63;

  color: white;
  font-weight: bold;
`;

export const LandingSubTitleContainer = styled.div`
  display: grid;

  margin-bottom: 0.5rem;
`;

// 섹션 5 - 분리수거 퀴즈
export const Section5 = styled(LandingSection)`
  background: lightsalmon;
`;

export const LandingSection5TitleContainer = styled.div`
  background: orange;

  text-align: right;
`;

export const LandingSection5SubTitleContainer = styled(
  LandingSubTitleContainer,
)`
  margin-top: 0.5rem;
  margin-bottom: 1rem;
  background: white;

  text-align: right;
`;

export const LandingSubTitleGray = styled(LandingSubTitle)`
  color: #9eacba;
`;

export const LandingQuiz = styled.div`
  border-radius: 0.5rem;

  padding: 0.5rem 1rem;
`;

export const LandingQuiz1 = styled(LandingQuiz)`
  background: #22be70;
`;
export const LandingQuiz2 = styled(LandingQuiz)`
  background: #69db7c;

  margin-bottom: 0.5rem;
`;

// 섹션 6 - 최하단, 시작하기
export const Section6 = styled(LandingSection)`
  margin: 10% 0;
  padding: 2rem 0;
  background: #69db7c;

  text-align: center;
`;

export const LandingSection6TitleContainer = styled.div`
  display: grid;
  margin-bottom: 1rem;

  color: white;
`;
