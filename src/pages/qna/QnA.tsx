import React from "react";

import { useNavigate } from "react-router";

import QnABar from "./QnABar";
import QnAList from "../../pages/qna/QnAList";

import { TitleText } from "../../styles/TextStyle";
import { Container } from "../../styles/basicStyle";
import { Button } from "../../styles/ButtonStyles";
import {
  ButtonContainer,
  ButtonWrapper,
} from "../../styles/qnaStyles/QnAStyle";

function QnA() {
  const navigate = useNavigate();

  return (
    <Container>
      {/* 페이지 타이틀 */}
      <TitleText>Q&A</TitleText>
      {/* 바 섹션 */}
      <QnABar />
      {/* 게시글 리스트 섹션 */}
      <QnAList />
      {/* 페이지네이션 */}
      <ButtonContainer>
        <ButtonWrapper>
          <Button onClick={() => navigate(`/qna/post`)}>작성하기</Button>
        </ButtonWrapper>
      </ButtonContainer>
    </Container>
  );
}

export default QnA;
