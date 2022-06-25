import styled from "styled-components";

import { Button } from "../ButtonStyles";

export const TitleInputContainer = styled.div`
  margin-bottom: 1rem;
`;
export const TitleInputText = styled.div`
  /* color: #9eacba; */
  font-size: 0.6rem;
`;

export const TitleInput = styled.input`
  width: 97.5%;

  padding: 0.5rem;
  line-height: 1rem;

  border: 1px solid #dadde6;
  border-radius: 3px;

  font-size: 0.6rem;
`;

export const PostButtonContainer = styled.div`
  margin: 1rem 0;

  display: flex;
`;

export const PostButtonWrapper = styled.div`
  margin-left: auto;
  /* float: right; */
`;

export const PostButton = styled(Button)`
  margin-left: auto;

  border-radius: 0.7rem;
`;

export const PostCancleButton = styled(Button)`
  margin-left: auto;

  border-radius: 0.7rem;

  background: #f0f2f5;
  color: black;

  margin-right: 1rem;
`;
