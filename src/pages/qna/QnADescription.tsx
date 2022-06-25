import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router";

import { getData } from "../../api";

import { QnAType } from "../../types/QnA";

import { Container } from "../../styles/basicStyle";
import { TitleText } from "../../styles/TextStyle";
import {
  BlackHr,
  GrayHr,
  TitleContainer,
  Title,
  RightContainer,
  Author,
  Date,
  ContentContainer,
  ButtonContainer,
  GrayButton,
  RedButton,
  AnswerContainer,
  AnswerWrapper,
  AnswerTitle,
  AnswerContent,
  SquareButton,
} from "../../styles/qnaStyles/QnADescriptionStyle";

function QnADescription() {
  const id = useParams().id;
  console.log(id);

  const navigate = useNavigate();

  const [qna, setQna] = useState<QnAType>();

  const get = async () => {
    try {
      await getData(`posts/${id}`).then((res) => console.log(res.data));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    get();
  }, []);

  return (
    <Container>
      <TitleText>Q&A</TitleText>
      <BlackHr />
      <TitleContainer>
        <Title>제목</Title>
        <RightContainer>
          <Date>
            <span>2022.06.14</span>
          </Date>
          <Author>강*선</Author>
        </RightContainer>
      </TitleContainer>
      <GrayHr />
      <ContentContainer>내용</ContentContainer>
      <BlackHr />
      <ButtonContainer>
        <GrayButton>수정</GrayButton>
        <RedButton>삭제</RedButton>
      </ButtonContainer>
      <AnswerContainer>
        <AnswerTitle>답변</AnswerTitle>
        <AnswerWrapper>
          <AnswerContent>안녕</AnswerContent>
          <RightContainer>
            <Date>2022.06.24</Date>
            <Author>임*민</Author>
          </RightContainer>
        </AnswerWrapper>
      </AnswerContainer>
      <BlackHr />
      <SquareButton onClick={() => navigate(`/qna/`)}>
        목록
      </SquareButton>
    </Container>
  );
}

export default QnADescription;
