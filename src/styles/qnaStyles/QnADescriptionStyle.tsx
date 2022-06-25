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

  padding-right: 1rem;
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

  align-self: center;

  color: #979797;
`;

export const Author = styled.div`
  /* background: yellow; */
  margin-right: 1.5rem;

  font-size: 0.53rem;
  font-weight: 500;
  /* flex-grow: 1; */
  float: right;
  /* text-align: right; */
`;

export const Date = styled.div`
  /* background: green; */
  font-size: 0.53rem;
  font-weight: 500;

  /* flex-grow: 1; */
  float: right;
  /* text-align: right; */
`;

export const ContentContainer = styled.div`
  padding: 0.5rem 1.5rem;
  font-size: 0.6rem;
  /* color: #979797; */
`;

export const CommentContainer = styled.div`
  padding: 0.5rem 1.5rem;
`;

export const CommentWrapper = styled.div`
  padding: 1rem;
  margin-bottom: 1rem;

  display: flex;

  background-color: #ececec;
  border-radius: 0.5rem;
`;

export const CommentTitle = styled(Title)`
  display: inline-block;

  margin: 1rem 0;
  padding: 0;
`;

export const CommentContent = styled(ContentContainer)`
  padding: 0;
`;

export const SquareButton = styled(Button)`
  float: right;

  margin-top: 0.5rem;

  border-radius: 0.3rem;
`;

export const CommnetInputContainer = styled.div`
  /* display: */
  display: flex;

  margin-bottom: 1rem;
  /* background-color: pink; */
`;

export const CommentInput = styled.input`
  width: 90%;

  margin-right: 1rem;
  padding: 0.5rem;

  font-size: 0.53rem;

  background: #f0f2f5;
  border: none;
  border-radius: 0.3rem;

  &:focus {
    background: #e2e4e8;
    outline: none;
  }
`;

export const CommnetButtonWrapper = styled.div`
  flex-grow: 1;
  align-self: center;

  /* background: purple; */
`;

export const CommentButton = styled(Button)`
  width: max-content;
  height: 1.7rem;

  padding: 0.5rem 0.7rem;

  float: right;

  border-radius: 0.3rem;
  background: #9eacba;

  &:hover {
    background: #86919c;
    outline: none;
  }
`;
