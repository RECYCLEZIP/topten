import React from "react";

import QnABar from "./QnABar";
import QnAList from "../../pages/qna/QnAList";

import { TitleText } from "../../styles/TextStyle";
import { Container } from "../../styles/basicStyle";

function QnA() {
  return (
    <Container>
      {/* 페이지 타이틀 */}
      <TitleText>Q&A</TitleText>
      {/* 바 섹션 */}
      <QnABar />
      {/* 게시글 리스트 섹션 */}
      <QnAList />
      {/* 페이지네이션 */}
      <div></div>
    </Container>
  );
}

export default QnA;
