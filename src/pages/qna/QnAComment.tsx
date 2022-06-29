import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { getData, qnaPostData, putData, delData } from "../../api";

import { QnAType } from "../../types/QnA";

import { useRecoilValue } from "recoil";
import { userState } from "../../stores/atoms";

import { GrayButton } from "../../styles/qnaStyles/QnADescriptionStyle";

import {
  CommentContainer,
  CommentWrapper,
  CommentTitle,
  CommentContent,
  CommentInputContainer,
  CommentInput,
  CommentEditInput,
  CommentAuthorContainer,
  CommentAuthor,
  CommentAuthorLabel,
  CommentDate,
  CommentRight,
  CommentButtonWrapper,
  CommentPostButton,
  CommentRightButton,
} from "../../styles/qnaStyles/QnACommentStyle";
import { customToastify } from "../../components/customToastify";

function QnAComment() {
  // 게시글 id
  const id = useParams().id;

  // 로그인한 사용자
  const user = useRecoilValue(userState);

  const [qna, setQna] = useState<QnAType>();

  const [commentValue, setCommentValue] = useState<string>();

  const [commentEditValue, setCommentEditValue] = useState<string>();
  const [editComment, setEditComment] = useState("");

  const get = async () => {
    try {
      await getData(`posts/${id}`).then((res) => setQna(res.data));
    } catch (err: any) {
      customToastify("error", err.message);
    }
  };

  const date = (prop: any) => {
    return prop?.split("T")[0].split("-").join(".");
  };

  const onCommentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCommentValue(e.target.value);
  };

  // 댓글 작성
  const onClickCommentSubmit = async () => {
    try {
      await qnaPostData(`posts/${id}/comments`, {
        content: commentValue,
      }).then((res) => console.log(res));

      // 댓글 전송 후 input 초기화
      setCommentValue("");
      get();
    } catch (err) {
      console.log(err);
    }
  };

  // 댓글 수정
  const onClickCommentEdit = async (commentId: string) => {
    try {
      await putData(`posts/${id}/comments/${commentId}`, {
        content: commentEditValue,
      }).then((res) => console.log(res));

      // 댓글 전송 후 input 초기화
      setEditComment("");
      get();
    } catch (err) {
      console.log(err);
    }
  };

  // 댓글 삭제
  const onClickCommentDelete = async (commentId: string) => {
    try {
      await delData(`posts/${id}/comments/${commentId}`);
      get();
    } catch (err: any) {
      customToastify("error", err.message);
    }
  };

  const onCommentEditChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCommentEditValue(e.target.value);
  };

  const onKeyPressEnter = (e: any, commentId: string) => {
    // 엔터키가 눌렸을 때
    if (e.key === "Enter") {
      console.log(e.target);
      onClickCommentEdit(commentId);
    }
  };

  useEffect(() => {
    get();
  }, []);

  return (
    <CommentContainer>
      <CommentTitle>답변</CommentTitle>
      <CommentInputContainer>
        <CommentInput
          id="comment-write"
          type="text"
          placeholder="댓글을 입력해주세요."
          value={commentValue}
          onChange={onCommentChange}
        ></CommentInput>
        <CommentButtonWrapper>
          <CommentPostButton onClick={onClickCommentSubmit}>
            등록
          </CommentPostButton>
        </CommentButtonWrapper>
      </CommentInputContainer>
      {qna?.comments.map((comment) => (
        <CommentWrapper>
          <div>
            <CommentAuthorContainer>
              <CommentAuthor>{comment?.author.username}</CommentAuthor>
              {/* 글의 작성자가 작성한 댓글일 시 */}
              {qna?.author?._id === comment?.author.userId && (
                <CommentAuthorLabel>작성자</CommentAuthorLabel>
              )}
            </CommentAuthorContainer>
            <>
              {editComment === comment?._id ? (
                <>
                  {console.log(editComment)}
                  <CommentEditInput
                    id="comment-edit"
                    type="text"
                    value={commentEditValue}
                    onChange={onCommentEditChange}
                    onKeyPress={() => {
                      onKeyPressEnter(window.event, comment?._id);
                    }}
                  ></CommentEditInput>
                </>
              ) : (
                <>
                  {console.log(editComment)}
                  <CommentContent>{comment?.content}</CommentContent>
                  <CommentDate>{date(comment?.createdAt)}</CommentDate>
                </>
              )}
            </>
          </div>
          {/* 현재 로그인한 사용자가 댓글의 작성자일 시 */}
          {user._id === comment?.author.userId && (
            <CommentRight>
              {editComment === comment?._id ? (
                <>
                  <GrayButton
                    onClick={() => {
                      setEditComment("");
                    }}
                  >
                    취소
                  </GrayButton>
                  <CommentRightButton
                    onClick={() => {
                      onClickCommentEdit(comment?._id);
                    }}
                  >
                    확인
                  </CommentRightButton>
                </>
              ) : (
                <>
                  <GrayButton
                    onClick={() => {
                      setEditComment(comment?._id);
                      setCommentEditValue(comment?.content);
                    }}
                  >
                    수정
                  </GrayButton>
                  <CommentRightButton
                    onClick={() => {
                      onClickCommentDelete(comment?._id);
                    }}
                  >
                    삭제
                  </CommentRightButton>
                </>
              )}
            </CommentRight>
          )}
        </CommentWrapper>
      ))}
    </CommentContainer>
  );
}

export default QnAComment;
