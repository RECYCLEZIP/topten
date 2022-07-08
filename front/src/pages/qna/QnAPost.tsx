import React, { useState, useRef } from "react";
import { useNavigate } from "react-router";

import { qnaPostData } from "../../api";

import { toast } from "react-toastify";
import { Editor } from "@toast-ui/react-editor";
import colorSyntax from "@toast-ui/editor-plugin-color-syntax";
import "@toast-ui/editor/dist/i18n/ko-kr";

import { Container } from "../../styles/basicStyle";
import { TitleText } from "../../styles/TextStyle";
import {
  TitleInputContainer,
  TitleInput,
  PostButtonContainer,
  PostButtonWrapper,
  PostButton,
  PostCancleButton,
} from "../../styles/qnaStyles/QnAPostStyle";

import { customToastify } from "../../components/customToastify";
import { Helmet } from "react-helmet-async";

function QnAPost() {
  const navigate = useNavigate();

  const editorRef: any = useRef();

  const [titleValue, setTitleValue] = useState<string>();
  const [contentValue, setContentValue] = useState();

  const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitleValue(e.target.value);
  };

  const onChangeContent = () => {
    setContentValue(editorRef.current.getInstance().getMarkdown());
  };

  const onClickSubmit = async () => {
    const data = editorRef.current.getInstance().getMarkdown();

    if (titleValue && contentValue) {
      try {
        await qnaPostData(`posts`, {
          title: titleValue,
          content: data,
        }).then((res) => console.log(res));

        navigate(`/qna`);
      } catch (err: any) {
        customToastify("error", err?.response?.data?.message);
      }
    } else {
      if (!titleValue) {
        toast.warn("제목을 입력해주세요");
      } else {
        toast.warn("내용을 입력해주세요");
      }
    }
  };

  return (
    <Container>
      <Helmet>
        <title>분리수ZIP - 글 쓰기</title>
      </Helmet>
      <TitleText>Q&A 글 쓰기</TitleText>
      <TitleInputContainer>
        <TitleInput
          id="title"
          type="text"
          placeholder="제목을 입력해주세요."
          onChange={onChangeTitle}
        ></TitleInput>
      </TitleInputContainer>
      <Editor
        ref={editorRef}
        initialValue=" "
        placeholder="내용을 입력해주세요."
        previewStyle="vertical"
        height="600px"
        initialEditType="wysiwyg"
        useCommandShortcut={false}
        plugins={[colorSyntax]} // colorSyntax 플러그인 적용
        language="ko-KR"
        onChange={onChangeContent}
      />
      <PostButtonContainer>
        <PostButtonWrapper>
          <PostCancleButton onClick={() => navigate(`/qna`)}>
            작성 취소
          </PostCancleButton>
          <PostButton onClick={onClickSubmit}>작성 완료</PostButton>
        </PostButtonWrapper>
      </PostButtonContainer>
    </Container>
  );
}

export default QnAPost;
