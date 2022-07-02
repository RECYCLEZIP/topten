import styled from "styled-components";
import { ResultTextType } from "../../types/Quiz";

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
  padding: 0 0.8rem;
  justify-content: space-between;
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
  font-size: 0.8rem;
  width: ${(props) => props.width || "2rem"};
  color: ${(props) => props.color};
  text-align: left;
`;

export const ScoreText = styled.span<{ size?: string; margin?: string }>`
  font-size: ${(props) => props.size || "0.8rem"};
  margin-right: ${(props) => props.margin || "3%"};
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
  margin-bottom: 0.5rem;
`;

export const AnswerProblem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 0.5rem 0.6rem;
  border-bottom: 1px solid black;

  @media (min-width: 768px) {
    padding: 1rem 0.6rem;
  }
`;

export const AnswerDescription = styled.div`
  width: 70%;
  margin: 0.5rem auto 0;
`;

export const AnswerText = styled.p<ResultTextType>`
  font-size: ${(props) => props.size || "0.65rem"};
  color: ${(props) => props.color};
  text-align: left;
  margin: 0;
  margin-top: ${(props) => props.margin};
`;
