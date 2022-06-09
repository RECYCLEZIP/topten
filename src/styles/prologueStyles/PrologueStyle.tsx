import styled from "styled-components";

import { motion } from "framer-motion";

// 공통
export const PrologueSection = styled.div`
  margin: 13% 8%;

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

  box-shadow: 0px 0px 20px rgb(0 0 0 / 20%);
`;

// 섹션 1 - 말풍선
export const PrologueBubbleSection = styled(PrologueSection)`
  /* background: yellow; */

  margin-top: 5%;
  /* padding-top: 10%; */
`;

// 말풍선 공통
// export const PrologueBubble = styled.div`
export const PrologueBubble = styled(motion.div).attrs(() => ({
  // animate: { y: "3rem" },
  // animate: { y: [-30, 0] },
}))`
  height: auto;
  padding: 1rem 2rem;
  margin: 1rem 0;

  border-radius: 2rem;

  color: white;
  font-size: 0.8rem;

  /* hidden: { opacity: 1; scale: 0 };
  visible: {
    opacity: 1;
    scale: 1;
    transition: {
      delayChildren: 0.3;
      staggerChildren: 0.2
    }
  } */
`;

export const PrologueBubble1 = styled(PrologueBubble)`
  background: #c2e9d4;

  width: 40%;
  float: left;

  color: black;

  box-shadow: 0px 0px 20px rgb(0 0 0 / 15%);

  animate: {
    y: 100;
  }
`;

export const PrologueBubble2 = styled(PrologueBubble)`
  background: #5bc691;

  width: 50%;
  display: grid;

  float: right;
  text-align: right;

  box-shadow: 0px 0px 20px rgb(0 0 0 / 20%);
`;

export const PrologueBubble3 = styled(PrologueBubble)`
  background: #21a663;

  width: 50%;
  float: left;

  box-shadow: 0px 0px 25px rgb(0 0 0 / 25%);
`;

// 섹션 2 - 올바른 분리수거, 확실히 하고 계신가요?
export const PrologueAskImgWrapper = styled.div`
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

export const PrologueAskImg = styled(PrologueImg)`
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

export const PrologueAskTitleContainer = styled.div`
  height: auto;

  margin-bottom: 5%;
`;

// 섹션 3 - AI가 알려주는 분리수거 3 STEP
export const PrologueStepSection = styled(PrologueSection)`
  /* background: skyblue; */

  text-align: center;
`;

export const PrologueStepsContainer = styled.div`
  width: 100%;

  margin-top: 5%;
  padding: 5% 0;

  display: grid;
  /* display: inline-flex; */
  justify-items: center;

  border-radius: 30px;
  background: #ffffff;
  box-shadow: 0px 0px 30px rgb(0 0 0 / 10%);

  @media screen and (min-width: 768px) {
    display: inline-block;
  }
`;

export const PrologueStepContainer = styled.div`
  display: inline-block;

  /* background: lightsalmon; */

  margin: 20px 0;

  @media screen and (min-width: 768px) {
    margin: 0 1rem;
  }
`;

export const PrologueStepLeftContainer = styled(PrologueStepContainer)`
  float: left;

  @media screen and (min-width: 768px) {
    margin-left: 3rem;
  }
`;

export const PrologueStepRightContainer = styled(PrologueStepContainer)`
  float: right;

  @media screen and (min-width: 768px) {
    margin-right: 3rem;
  }
`;

export const PrologueStepLabel = styled(PrologueLabel)`
  background: #51cf66;
  color: white;
`;

export const PrologueStepTitle = styled.div`
  margin: 0.2rem 0rem;

  font-size: 0.8rem;
`;

export const PrologueStepSubTitle = styled.div`
  font-size: 0.6rem;
  font-weight: 400;
`;

// 섹션 4 - 서울시 공공 쓰레기통 지도
export const PrologueBinMapSection = styled(PrologueSection)`
  background: #69db7c;

  margin: 10% 0;
  padding: 5%;

  display: block;

  @media screen and (min-width: 768px) {
    display: flex;
  }
`;

export const PrologueBinMapTextContainer = styled.div`
  /* background: brown; */

  align-self: center;
  margin-bottom: 1rem;
`;

export const PrologueBinMapTitleContainer = styled.div`
  /* background: red; */

  width: fit-content;

  margin-bottom: 0.5rem;
  
  @media screen and (min-width: 768px) {
    margin-bottom: 1.5rem;
  }
`;

export const BinMapLabel = styled(PrologueLabel)`
  float: right;
  margin-top: 2%;

  background: #54af63;

  color: white;
  font-weight: bold;
`;

export const PrologueSubTitleContainer = styled.div`
  display: grid;
`;

export const PrologueBinMapImgContainer = styled.div`
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

export const PrologueBinMapImgWrapper = styled.div`
  background: red;

  width: 15rem;
  height: 100%;

  border-radius: 2rem;

  overflow: hidden;
`;

export const PrologueBinMapImg = styled.img`
  width: auto;
  height: 100%;
`;

// 섹션 5 - 분리수거 퀴즈
export const PrologueQuizTitleContainer = styled.div`
  /* background: orange; */

  text-align: right;
`;

export const PrologueQuizSubTitleContainer = styled(PrologueSubTitleContainer)`
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
export const PrologueEndSection = styled(PrologueSection)`
  margin: 10% 0;
  padding: 2rem 0;
  background: #69db7c;

  text-align: center;
`;

export const PrologueEndTitleContainer = styled.div`
  display: grid;
  margin-bottom: 2rem;

  color: white;
`;
