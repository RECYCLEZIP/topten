import styled from "styled-components";
import { ResultTextType } from "../../types/QuizTypes/QuizResultTyle";

export const QuizResultCard = styled.div`
  height: 80%;
  background-color: white;
  border-radius: 1rem;
  padding: 8% 7%;
  text-align: center;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
`;

export const ResultList = styled.div`
  display: flex;
  border-bottom: 1px solid black;
  align-items: center;
  justify-content: space-around;
`;

export const ResultButton = styled.p<{ background?: string }>`
  background-color: ${(props) => props.background || "#51cf66"};
  width: 3rem;
  color: white;
  font-size: 0.45rem;
  padding: 0.3rem 0.05rem;
  border-radius: 0.6rem;
  font-weight: 500;
  cursor: pointer;
`;

export const ResultText = styled.p<ResultTextType>`
  font-size: ${(props) => props.size || "0.7rem"};
  margin-right: ${(props) => props.margin || "3%"};
  color: ${(props) => props.color};
`;

export const ScoreBox = styled.div`
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ResultBottom = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AnswerCard = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 2% 0;
  margin-bottom: 3%;
`;

export const AnswerProblem = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 3% 0;
  border-bottom: 1px solid black;
`;

export const AnswerDescription = styled.div`
  width: 100%;
  padding: 2% 0;
`;

export const AnswerText = styled.p<ResultTextType>`
  font-size: ${(props) => props.size || "0.7rem"};
  color: ${(props) => props.color};
  text-align: left;
  padding: 0 2%;
  margin: 0;
  margin-bottom: ${(props) => props.margin};
`;
