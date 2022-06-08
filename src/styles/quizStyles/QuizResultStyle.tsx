import styled from "styled-components";
import { ResultTextType } from "../../types/QuizTypes/QuizResultTyle";

export const QuizResultCard = styled.div`
  height: 80%;
  background-color: white;
  border: 1px solid #bebdbd;
  border-radius: 1rem;
  padding: 8% 5%;
  text-align: center;
`;

export const ResultList = styled.div`
  display: flex;
  border-bottom: 1px solid black;
  align-items: center;
  justify-content: center;
`;

export const ResultButton = styled.p<{ background?: string }>`
  background-color: ${(props) => props.background || "#51cf66"};
  width: 3rem;
  color: white;
  font-size: 0.45rem;
  padding: 0.3rem 0.05rem;
  border-radius: 0.6rem;
  font-weight: 500;
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
  cursor: pointer;
  align-items: center;
`;
