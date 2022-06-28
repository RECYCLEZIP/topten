import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router";

import "@toast-ui/editor/dist/toastui-editor-viewer.css";
import { Viewer } from "@toast-ui/react-editor";

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
  ButtonWrapper,
  GrayButton,
  RedButton,
  CommentContainer,
  CommentWrapper,
  CommentTitle,
  CommentContent,
  SquareButton,
  CommnetInputContainer,
  CommentInput,
  CommentAuthorContainer,
  CommentAuthor,
  CommentAuthorLabel,
  CommentDate,
  CommentRight,
  CommnetButtonWrapper,
  CommentPostButton,
  CommentRightButton,
  ButtonContainer,
} from "../../styles/qnaStyles/QnADescriptionStyle";

function QnADescription() {
  const navigate = useNavigate();

  // 게시글 id
  const id = useParams().id;

  // 로그인한 사용자
  const user = useRecoilValue(userState);

  const [qna, setQna] = useState<QnAType>();
  const [commentValue, setCommentValue] = useState<string>();

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

  const onCommentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCommentValue(e.target.value);
  };

  const onClickCommentSubmit = async () => {
    try {
      await qnaPostData(`comments/${id}`, {
        content: commentValue,
      }).then((res) => console.log(res));

      // 댓글 전송 후 input 초기화
      setCommentValue("");
      get();
    } catch (err) {
      console.log(err);
    }
  };

  // 백 수정 후 연동
  const onClickCommentEdit = async () => {};

  const onClickCommentDelete = async () => {
    try {
      await delData(`posts/${id}`);

      navigate(`/qna`);
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
        <Title>{qna?.title}</Title>
        <RightContainer>
          <Date>
            <span>{date(qna?.createdAt)}</span>
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
        {/* 현재 로그인한 사용자가 게시글의 작성자일 시 */}
        {user._id === qna?.author._id && (
          <ButtonWrapper>
            <GrayButton onClick={() => navigate(`edit/`)}>수정</GrayButton>
            <RedButton onClick={onClickDelete}>삭제</RedButton>
          </ButtonWrapper>
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
            <CommentPostButton onClick={onClickCommentSubmit}>
              등록
            </CommentPostButton>
          </CommnetButtonWrapper>
        </CommnetInputContainer>
        {qna?.comments.map((comment) => (
          <CommentWrapper>
            <div>
              <CommentAuthorContainer>
                <CommentAuthor>{comment?.author.username}</CommentAuthor>
                {/* 글의 작성자가 작성한 댓글일 시 */}
                {qna?.author?._id === comment?.author._id && (
                  <CommentAuthorLabel>작성자</CommentAuthorLabel>
                )}
              </CommentAuthorContainer>
              <CommentContent>{comment?.content}</CommentContent>
              <CommentDate>{date(comment?.createdAt)}</CommentDate>
            </div>
            {/* 현재 로그인한 사용자가 댓글의 작성자일 시 */}
            {user._id === comment?.author._id && (
              <CommentRight>
                <GrayButton>수정</GrayButton>
                <CommentRightButton>삭제</CommentRightButton>
              </CommentRight>
            )}
          </CommentWrapper>
        ))}
      </CommentContainer>
      <BlackHr />
      <ButtonContainer>
        <SquareButton onClick={() => navigate(`/qna/`)}>목록</SquareButton>
      </ButtonContainer>
    </Container>
  );
}

export default QnADescription;
