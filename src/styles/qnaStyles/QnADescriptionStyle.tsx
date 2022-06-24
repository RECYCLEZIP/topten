import styled from "styled-components";

import { Button } from "../../styles/ButtonStyles";

export const BlackHr = styled.hr`
  border: 1px solid black;
`;

export const GrayHr = styled.hr`
  border: 0.5px solid #979797;
`;

export const ButtonContainer = styled.div`
  /* background: green; */
  width: 100%;

  float: right;
  text-align-last: right;

  padding-right: 1.5rem;
`;

export const GrayButton = styled.button`
  padding: 0.3rem 0.8rem;
  margin-right: 0.5rem;

  font-size: 0.53rem;
  font-weight: bold;
  color: white;

  border: none;
  border-radius: 0.3rem;
  background: #979797;

  cursor: pointer;
`;

export const RedButton = styled(GrayButton)`
  background: #a62121;
`;

export const TitleContainer = styled.div`
  padding: 0.5rem 1.5rem;
  display: flex;
`;

export const Title = styled.div`
  /* background: red; */
  font-size: 0.8rem;
`;

export const RightContainer = styled.div`
  /* float: right; */
  flex-grow: 1;

  color: #979797;
`;

export const Author = styled.div`
  /* background: yellow; */
  margin-right: 1.5rem;

  font-size: 0.6rem;
  /* flex-grow: 1; */
  float: right;
  /* text-align: right; */
`;

export const Date = styled.div`
  /* background: green; */
  font-size: 0.6rem;

  /* flex-grow: 1; */
  float: right;
  /* text-align: right; */
`;

export const ContentContainer = styled.div`
  padding: 0.5rem 1.5rem;
  font-size: 0.6rem;
  color: #979797;
`;

export const AnswerContainer = styled.div`
  padding: 0.5rem 1.5rem;
`;

export const AnswerWrapper = styled.div`
  background-color: pink;
  padding: 1rem;

  display: flex;

  background-color: #ececec;
  border-radius: 0.5rem;
`;

export const AnswerTitle = styled(Title)`
  display: inline-block;

  margin: 1rem 0;
  padding: 0;
`;

export const AnswerContent = styled(ContentContainer)`
  padding: 0;
`;

export const SquareButton = styled(Button)`
  float: right;

  margin-top: 0.5rem;

  border-radius: 0.3rem;
`;
