import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { getData, qnaPostData, putData, delData } from "../../api";

import { QnAType } from "../../types/QnA";

import { useRecoilValue } from "recoil";
import { userState, loginState } from "../../stores/atoms";

import { toast } from "react-toastify";

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
  WarnText,
} from "../../styles/qnaStyles/QnACommentStyle";
import { customToastify } from "../../components/customToastify";

import { UserType } from "../../types/User";

function QnAComment() {
  // 게시글 id
  const id = useParams().id;

  // 로그인한 사용자
  // const user = useRecoilValue(userState);
  const [user, setUser] = useState<UserType>();
  const isLogin = useRecoilValue(loginState);

  const [qna, setQna] = useState<QnAType>();

  const [commentValue, setCommentValue] = useState<string>();

  const [commentEditValue, setCommentEditValue] = useState<string>();
  const [editComment, setEditComment] = useState("");

  const [isComment, setIsComment] = useState<boolean>(true);
  const [isCommentEdit, setIsCommentEdit] = useState<boolean>(true);

  const getUser = async () => {
    if (isLogin) {
      try {
        const res = await getData(`users/current`);
        setUser(res.data);
      } catch (err: any) {
        console.log(err.response.data.message);
      }
    }
  };

  const getQna = async () => {
    try {
      await getData(`posts/${id}`).then((res) => setQna(res.data));
    } catch (err: any) {
      customToastify("error", err?.response?.data?.message);
    }
  };

  const date = (prop: string) => {
    return prop?.split("T")[0].split("-").join(".");
  };

  const onCommentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCommentValue(e.target.value);
  };

  // 댓글 작성
  const onClickCommentSubmit = async () => {
    if (isLogin) {
      if (commentValue) {
        try {
          await qnaPostData(`posts/${id}/comments`, {
            content: commentValue,
          }).then((res) => console.log(res));

          // 댓글 전송 후 input 초기화
          setCommentValue("");
          setIsComment(true);
          getQna();
        } catch (err: any) {
          customToastify("error", err?.response?.data?.message);
        }
      } else {
        setIsComment(false);
      }
    } else {
      toast.warn("로그인 후 이용할 수 있습니다.");
    }
  };

  // 댓글 수정
  const onClickCommentEdit = async (commentId: string) => {
    if (commentEditValue) {
      try {
        await putData(`posts/${id}/comments/${commentId}`, {
          content: commentEditValue,
        }).then((res) => console.log(res));

        // 댓글 전송 후 input 초기화
        setEditComment("");
        setIsCommentEdit(true);
        getQna();
      } catch (err: any) {
        customToastify("error", err?.response?.data?.message);
      }
    } else {
      setIsCommentEdit(false);
    }
  };

  // 댓글 삭제
  const onClickCommentDelete = async (commentId: string) => {
    try {
      await delData(`posts/${id}/comments/${commentId}`);
      getQna();
    } catch (err: any) {
      customToastify("error", err?.response?.data?.message);
    }
  };

  const onCommentEditChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCommentEditValue(e.target.value);
  };

  const onKeyPressEnter = (e: any, commentId: string) => {
    // 엔터키가 눌렸을 때
    if (e.key === "Enter") {
      onClickCommentEdit(commentId);
    }
  };

  useEffect(() => {
    getQna();
  }, []);

  useEffect(() => {
    getUser();
  }, [isLogin]);

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
      {!isComment && <WarnText>댓글을 입력해주세요.</WarnText>}
      {qna?.comments.map((comment, index) => (
        <CommentWrapper key={index}>
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
                  <CommentEditInput
                    id="comment-edit"
                    type="text"
                    value={commentEditValue}
                    onChange={onCommentEditChange}
                    onKeyPress={() => {
                      onKeyPressEnter(window.event, comment?._id);
                    }}
                  ></CommentEditInput>
                  {!isCommentEdit && <WarnText>댓글을 입력해주세요.</WarnText>}
                </>
              ) : (
                <>
                  <CommentContent>{comment?.content}</CommentContent>
                  <CommentDate>{date(comment?.createdAt)}</CommentDate>
                </>
              )}
            </>
          </div>
          {/* 현재 로그인한 사용자가 댓글의 작성자일 시 */}
          {user?._id === comment?.author.userId && (
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
