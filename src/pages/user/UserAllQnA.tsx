import React, { useEffect, useState } from "react";

import { Container } from "../../styles/basicStyle";

import UserAllQnAList from "./UserAllQnAList";
import QnAPagination from "../../pages/qna/QnAPagination";

import { TitleText } from "../../styles/TextStyle";
import { Helmet } from "react-helmet-async";

function UserAllQnA() {
  const [loading, setLoading] = useState(false);

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
      <UserAllQnAList />
      <QnAPagination />
    </Container>
  );
}

export default UserAllQnA;
