import React, { useEffect, useState } from "react";

import { Container } from "../../styles/basicStyle";

import UserAllQnAList from "./UserAllQnAList";
import QnAPagination from "../../pages/qna/QnAPagination";

import { TitleText } from "../../styles/TextStyle";

import { Helmet } from "react-helmet-async";

function UserAllQnA() {
  const [loading, setLoading] = useState(false);

  const [qnaPage, setQnaPage] = useState(1);

  useEffect(() => {
    setTimeout(() => setLoading(true), 10);
  }, []);

  if (!loading) {
    return <></>;
  }

  return (
    <Container>
      <Helmet>
        <title>분리수ZIP - 나의 Q&A</title>
      </Helmet>
      <TitleText>나의 Q&A</TitleText>
      <UserAllQnAList qnaPage={qnaPage} setQnaPage={setQnaPage} />
      <QnAPagination qnaPage={qnaPage} setQnaPage={setQnaPage} />
    </Container>
  );
}

export default UserAllQnA;
