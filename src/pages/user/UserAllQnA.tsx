import React from "react";

import { Container } from "../../styles/basicStyle";

import UserAllQnAList from "./UserAllQnAList";
import QnAPagination from "../../pages/qna/QnAPagination";

import { TitleText } from "../../styles/TextStyle";
import { Button } from "../../styles/ButtonStyles";
import {
  ButtonContainer,
  ButtonWrapper,
} from "../../styles/qnaStyles/QnAStyle";

function UserAllQnA() {
  return (
    <Container>
      <TitleText>Q&A</TitleText>
      <UserAllQnAList />
      <QnAPagination />
    </Container>
  );
}

export default UserAllQnA;
