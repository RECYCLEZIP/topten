import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router";

import "@toast-ui/editor/dist/toastui-editor-viewer.css";
import { Viewer } from "@toast-ui/react-editor";

import markdownIt from "markdown-it";
import DOMPurify from "dompurify";

import { getData, qnaPostData } from "../../api";
import { delData } from "../../api";

import { QnAType } from "../../types/QnA";

import { useRecoilValue } from "recoil";
import { userState } from "../../stores/atoms";

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
  CommentContainer,
  CommentWrapper,
  CommentTitle,
  CommentContent,
  SquareButton,
  CommnetInputContainer,
  CommentInput,
  CommnetButtonWrapper,
  CommentButton,
} from "../../styles/qnaStyles/QnADescriptionStyle";

function QnADescription() {
  const id = useParams().id;
  console.log(id);

  const navigate = useNavigate();

  const user = useRecoilValue(userState);

  const [qna, setQna] = useState<QnAType>();
  const [commentValue, setCommentValue] = useState<string>();

  const onCommentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCommentValue(e.target.value);
  };

  const get = async () => {
    try {
      await getData(`posts/${id}`).then((res) => setQna(res.data));
    } catch (err) {
      console.log(err);
    }
  };

  const date = (prop: any) => {
    return prop?.split("T")[0].split("-").join(".");
  };

  const onClickDelete = async () => {
    try {
      await delData(`posts/${id}`);

      navigate(`/qna`);
    } catch (err) {
      console.log(err);
    }
  };

  const onClickCommentSubmit = async () => {
    try {
      await qnaPostData(`comments/${id}`, {
        content: commentValue,
      }).then((res) => console.log(res));

      setCommentValue("");
      get();
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    get();
  }, []);

  console.log(qna?.comments);

  return (
    <Container>
      <TitleText>Q&A</TitleText>
      <BlackHr />
      <TitleContainer>
        <Title>{qna?.title}</Title>
        <RightContainer>
          <Date>
            <>
              {console.log(qna?.createdAt)}
              <span>{date(qna?.createdAt)}</span>
            </>
          </Date>
          <Author>{qna?.author?.username}</Author>
        </RightContainer>
      </TitleContainer>
      <GrayHr />
      {qna?.content && (
        <ContentContainer>
          <Viewer initialValue={qna?.content} />
        </ContentContainer>
      )}
      <BlackHr />
      <>
        {user._id === qna?.author._id && (
          <ButtonContainer>
            <GrayButton onClick={() => navigate(`edit/`)}>수정</GrayButton>
            <RedButton onClick={onClickDelete}>삭제</RedButton>
          </ButtonContainer>
        )}
      </>
      <CommentContainer>
        <CommentTitle>답변</CommentTitle>
        <CommnetInputContainer>
          <CommentInput
            id="comment-write"
            type="text"
            placeholder="댓글을 입력해주세요."
            value={commentValue}
            onChange={onCommentChange}
          ></CommentInput>
          <CommnetButtonWrapper>
            <CommentButton onClick={onClickCommentSubmit}>등록</CommentButton>
          </CommnetButtonWrapper>
        </CommnetInputContainer>
        {qna?.comments.map((comment) => (
          <CommentWrapper>
            <CommentContent>{comment?.content}</CommentContent>
            <RightContainer>
              <Date>{date(comment?.createdAt)}</Date>
              <Author>{comment?.author.username}</Author>
            </RightContainer>
          </CommentWrapper>
        ))}
      </CommentContainer>
      <BlackHr />
      <SquareButton onClick={() => navigate(`/qna/`)}>목록</SquareButton>
    </Container>
  );
}

export default QnADescription;
