import React from "react";

import { useNavigate } from "react-router";

import QnABar from "./QnABar";
import QnAList from "../../pages/qna/QnAList";
import QnAPagination from '../../pages/qna/QnAPagination'

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
      <TitleText>Q&A</TitleText>
      <QnABar />
      <QnAList />
      <ButtonContainer>
        <ButtonWrapper>
          <Button onClick={() => navigate(`/qna/post`)}>작성하기</Button>
        </ButtonWrapper>
      </ButtonContainer>
      <QnAPagination />
    </Container>
  );
}

export default QnA;
