import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router";

import markdownIt from "markdown-it";
import DOMPurify from "dompurify";

import { getData } from "../../api";
import { delData } from "../../api";

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
      await getData(`posts/${id}`).then((res) => setQna(res.data));
    } catch (err) {
      console.log(err);
    }
  };

  const date = (prop: any) => {
    return prop.split("T")[0].split("-").join(".");
  };

  const onClickDelete = async () => {
    try {
      await delData(`post/${id}`);
    } catch (err) {
      console.log(err);
    }
  };

  // ****************************************************************
  const sanitizer = DOMPurify.sanitize;
  const handleClick = () => {
    // setText(editorRef.current.getInstance().getMarkdown());
    // console.log("작동함", text);

    qna?.content && console.log(markdownIt().render(qna?.content));
  };

  // const handleFocus = () => {
  //   console.log("focus!!");
  //   editorRef.current.getRootElement().classList.add("my-editor-root");
  // };

  // ********************************

  useEffect(() => {
    get();
    handleClick();
  }, []);

  return (
    <Container>
      <TitleText>Q&A</TitleText>
      <BlackHr />
      <TitleContainer>
        <Title>{qna?.title}</Title>
        <RightContainer>
          <Date>
            <span>{date(qna?.createdAt)}</span>
          </Date>
          <Author>{qna?.author?.username}</Author>
        </RightContainer>
      </TitleContainer>
      <GrayHr />
      <ContentContainer>{qna?.content}</ContentContainer>
      {/* **************************************************************** */}
      {qna?.content && (
        <div
          dangerouslySetInnerHTML={{
            __html: sanitizer(markdownIt().render(qna?.content)),
          }}
        ></div>
      )}
      <BlackHr />
      <ButtonContainer>
        <GrayButton onClick={() => navigate(`qna/edit/${qna?._id}`)}>
          수정
        </GrayButton>
        <RedButton onClick={onClickDelete}>삭제</RedButton>
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
      <SquareButton onClick={() => navigate(`/qna/`)}>목록</SquareButton>
    </Container>
  );
}

export default QnADescription;
