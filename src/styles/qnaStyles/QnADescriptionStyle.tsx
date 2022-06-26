import styled from "styled-components";

import { Button } from "../../styles/ButtonStyles";

export const BlackHr = styled.hr`
  border: none;
  height: 1px;
  background-color: black;
`;

export const GrayHr = styled.hr`
  border: none;
  height: 1px;
  background-color: rgb(219, 219, 219);
`;

export const ButtonContainer = styled.div`
  display: flex;
`;

export const ButtonWrapper = styled.div`
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
  color: #424242;

  border: none;
  border-radius: 0.3rem;
  background: #e1e1e1;
  /* background: #e4e4e4; */
  /* background: #bdbdbd; */
  /* background: #979797; */

  cursor: pointer;
`;

export const RedButton = styled(GrayButton)`
  background: #a62121;

  color: white;
`;

export const TitleContainer = styled.div`
  padding: 0.5rem 1.5rem;
  display: flex;
`;

export const Title = styled.div`
  /* background: red; */
  font-size: 0.6rem;
`;

export const SectionTitle = styled.div`
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
  padding: 0.8rem 1rem;
  padding-top: 0.4rem;
  margin-bottom: 1rem;

  display: flex;
  position: relative;

  background-color: #f5f5f5;
  /* background-color: #ececec; */
  border-radius: 0.3rem;
`;

export const CommentRight = styled.div`
  margin-bottom: 1rem;
  bottom: 0;

  position: absolute;
  right: 0;
`;

export const CommentTitle = styled(SectionTitle)`
  display: inline-block;

  margin: 1rem 0;
  padding: 0;
`;

export const CommentContent = styled(ContentContainer)`
  padding: 0;
  margin: 0.2rem 0;

  font-weight: 500;
`;

export const CommentAuthorContainer = styled.div`
  display: inline-flex;
`;

export const CommentAuthor = styled.div`
  font-size: 0.6rem;
`;

export const CommentAuthorLabel = styled.div`
  background: #21a663;
  /* background: #69db7c; */
  font-size: 0.4rem;
  font-weight: 500;
  color: white;
  border-radius: 0.1rem;
  padding: 0.1rem 0.2rem;
  height: fit-content;
  align-self: center;
  margin-left: 0.5rem;
`;

export const CommentDate = styled.div`
  font-size: 0.6rem;
  font-weight: 500;
  color: #979797;
`;

export const SquareButton = styled(Button)`
  /* float: right; */

  margin-left: auto;
  margin-top: 0.5rem;

  border-radius: 0.3rem;
`;

export const CommentInputContainer = styled.div`
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

export const CommentEditInput = styled.input`
  width: 100%;

  /* margin-right: 1rem; */
  padding: 0.5rem;

  font-size: 0.53rem;

  background: #ededed;
  border: 1px solid #cdc9c9;
  border-radius: 0.3rem;

  &:focus {
    background: #e7e7e7;
    outline: none;
  }
`;

export const CommentButtonWrapper = styled.div`
  flex-grow: 1;
  align-self: center;

  /* background: purple; */
`;

export const CommentPostButton = styled(Button)`
  width: max-content;
  height: 1.7rem;

  padding: 0.5rem 0.7rem;

  float: right;

  border-radius: 0.3rem;
  /* background: #e9ecf3; */

  /* color: #44576c; */
  background: #86919c;
  /* background: #9eacba; */

  &:hover {
    background: rgb(130, 140, 148);
    outline: none;
  }
`;

export const CommentRightButton = styled(RedButton)`
  margin-right: 1rem;

  /* font-size: 0.6rem  */
`;
