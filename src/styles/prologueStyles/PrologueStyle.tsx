import styled from "styled-components";

// 공통
export const PrologueSection = styled.div`
  margin: 20% 8%;

  display: flow-root;
`;

export const PrologueTitle = styled.span`
  font-size: 1.5rem;
`;

export const PrologueTitleWhite = styled(PrologueTitle)`
  color: white;
`;

export const PrologueTitleLightGreen = styled(PrologueTitle)`
  color: #97ccaf;
`;
export const PrologueTitleGreen = styled(PrologueTitle)`
  color: #21a663;
`;

export const PrologueSubTitle = styled.span`
  font-size: 0.8rem;
`;

export const PrologueSubTitleWhite = styled(PrologueSubTitle)`
  color: white;
`;

export const PrologueLabel = styled.div`
  display: inline-block;

  margin-bottom: 1%;
  padding: 3px 15px;
  border-radius: 30px;

  font-size: 0.5rem;
  font-weight: 500;
`;

export const PrologueImg = styled.img`
  border-radius: 10px;
`;

// 섹션 1 - 말풍선
export const Section1 = styled(PrologueSection)`
  /* background: yellow; */

  margin-top: 10%;
`;

// 말풍선 공통
export const PrologueBubble = styled.div`
  height: auto;
  padding: 1rem 2rem;
  margin: 10px 0;

  border-radius: 2rem;

  color: white;
  font-size: 1rem;
`;

export const PrologueBubble1 = styled(PrologueBubble)`
  background: #c2e9d4;

  width: 50%;
  float: left;

  color: black;
`;

export const PrologueBubble2 = styled(PrologueBubble)`
  background: #5bc691;

  width: 60%;
  display: grid;

  float: right;
  text-align: right;
`;

export const PrologueBubble3 = styled(PrologueBubble)`
  background: #21a663;

  width: 60%;
  float: left;
`;

// 섹션 2 - 올바른 분리수거, 확실히 하고 계신가요?
export const PrologueSection2ImgWrapper = styled.div`
  /* background: red;

  width: 100%;

  overflow: hidden;

  @media screen and (min-width: 768px) {
    max-width: 80%;
  } */

  /* background: red; */
  position: relative;
  width: 15rem;
  width: 100%;

  @media screen and (min-width: 768px) {
    max-width: 60%;
  }
  /* height: 15rem; */

  /* background: red;
  max-width: 100%;
  height: 10rem;
  overflow: hidden;*/
`;

export const PrologueSection2Img = styled(PrologueImg)`
  /* max-width: 100%;
  height: auto;

  top: 50%;
  left: 50%;
  transform: translate(-10%, -15%); */

  /* position: absolute; */
  top: 0;
  left: 0;
  transform: 50, 50;
  width: 100%;
  height: 100%;
  height: auto;
  object-fit: cover;
  margin: auto;

  /* position: absolute; */
  /* max-width: 120%;
  height: auto;
  top: 50%;
  left: 50%;
  transform: translate(-10%, -15%); */
`;

export const PrologueSection2TitleContainer = styled.div`
  height: auto;

  margin-bottom: 3%;
`;

// 섹션 3 - AI가 알려주는 분리수거 3 STEP
export const Section3 = styled(PrologueSection)`
  /* background: skyblue; */

  text-align: center;
`;

export const PrologueSection3StepContainer = styled.div`
  width: 100%;

  margin-top: 5%;
  padding: 5% 0;

  display: grid;
  justify-items: center;

  border-radius: 30px;
  background: #f0f4f9;
`;

export const PrologueSectionStepContainer = styled.div`
  display: inline-block;

  /* background: lightsalmon; */

  margin: 20px 0;
`;

export const PrologueSection3StepLabel = styled(PrologueLabel)`
  background: #51cf66;
  color: white;
`;

export const PrologueSection3StepTitle = styled.div`
  margin-bottom: 1%;

  font-size: 1rem;
`;

export const PrologueSection3StepSubTitle = styled.div`
  font-size: 0.8rem;
  font-weight: 500;
`;

// 섹션 4 - 서울시 공공 쓰레기통 지도
export const Section4 = styled(PrologueSection)`
  background: #69db7c;

  margin: 10% 0;
  padding: 8%;

  display: block;

  @media screen and (min-width: 768px) {
    display: flex;
  }
`;

export const PrologueSection4TextContainer = styled.div`
  /* background: brown; */

  align-self: center;
  margin-bottom: 1rem;
`;

export const PrologueSection4TitleContainer = styled.div`
  /* background: red; */

  width: fit-content;

  margin-bottom: 1rem;
`;

export const Section4Label = styled(PrologueLabel)`
  float: right;
  margin-top: 2%;

  background: #54af63;

  color: white;
  font-weight: bold;
`;

export const PrologueSubTitleContainer = styled.div`
  display: grid;
`;

export const PrologueSection4ImgContainer = styled.div`
  /* background: blue; */

  height: 15rem;

  display: flex;
  justify-content: center;
  flex-grow: 1;

  overflow: hidden;

  @media screen and (min-width: 768px) {
    margin-left: 3rem;
    justify-content: right;
  }
`;

export const PrologueSection4ImgWrapper = styled.div`
  background: red;

  width: 15rem;
  height: 100%;

  border-radius: 2rem;

  overflow: hidden;
`;

export const PrologueSection4Img = styled.img`
  width: auto;
  height: 100%;
`;

// 섹션 5 - 분리수거 퀴즈
export const PrologueSection5TitleContainer = styled.div`
  /* background: orange; */

  text-align: right;
`;

export const PrologueSection5SubTitleContainer = styled(
  PrologueSubTitleContainer,
)`
  margin-top: 0.5rem;
  margin-bottom: 1rem;
  // background: white;

  text-align: right;
`;

export const PrologueSubTitleGray = styled(PrologueSubTitle)`
  color: #9eacba;
`;

export const PrologueQuiz = styled.div`
  border-radius: 0.5rem;

  padding: 0.5rem 1rem;
`;

export const PrologueQuiz1 = styled(PrologueQuiz)`
  background: #22be70;
`;
export const PrologueQuiz2 = styled(PrologueQuiz)`
  background: #69db7c;

  margin-bottom: 0.5rem;
`;

// 섹션 6 - 최하단, 시작하기
export const Section6 = styled(PrologueSection)`
  margin: 10% 0;
  padding: 2rem 0;
  background: #69db7c;

  text-align: center;
`;

export const PrologueSection6TitleContainer = styled.div`
  display: grid;
  margin-bottom: 2rem;

  color: white;
`;
