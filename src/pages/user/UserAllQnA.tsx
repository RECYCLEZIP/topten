import React from "react";

import { Container } from "../../styles/basicStyle";

import UserAllQnAList from "./UserAllQnAList";
import QnAPagination from "../../pages/qna/QnAPagination";

import { TitleText } from "../../styles/TextStyle";
import { Helmet } from "react-helmet-async";

function UserAllQnA() {
  return (
    <Container>
      <Helmet>
        <title>분리수ZIP - 나의 Q&A</title>
      </Helmet>
      <TitleText>나의 Q&A</TitleText>
      <UserAllQnAList />
      <QnAPagination />
    </Container>
  );
}

export default UserAllQnA;
