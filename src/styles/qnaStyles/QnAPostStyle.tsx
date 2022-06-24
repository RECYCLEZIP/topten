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
  width: 100%;
  line-height: 1rem;

  border: 1px solid #dadde6;
  border-radius: 3px;

  font-size: 0.6rem;
`;

export const PostButtonWrapper = styled.div`
  margin: 1rem 0;
  float: right;
`;

export const PostButton = styled(Button)`
  border-radius: 0.7rem;
`;

export const PostCancleButton = styled(Button)`
  border-radius: 0.7rem;

  background: #f0f2f5;
  color: black;

  margin-right: 1rem;
`;
