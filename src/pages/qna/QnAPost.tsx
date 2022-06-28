import React, { useState, useRef } from "react";
import { useNavigate } from "react-router";

import { qnaPostData } from "../../api";

import "@toast-ui/editor/dist/toastui-editor.css";
import { Editor } from "@toast-ui/react-editor";

import "tui-color-picker/dist/tui-color-picker.css";
import "@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css";
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
import { customTostify } from "../../components/customTostify";

function QnAPost() {
  const navigate = useNavigate();

  const editorRef: any = useRef();

  const [titleValue, setTitleValue] = useState<string>();

  const onTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitleValue(e.target.value);
  };

  const onClickSubmit = async () => {
    const data = editorRef.current.getInstance().getMarkdown();

    try {
      await qnaPostData(`posts`, {
        title: titleValue,
        content: data,
      }).then((res) => console.log(res));

      navigate(`/qna`);
    } catch (err: any) {
      customTostify("error", err.message);
    }
  };

  return (
    <Container>
      <TitleText>Q&A 글 쓰기</TitleText>
      <TitleInputContainer>
        <TitleInput
          id="title"
          type="text"
          placeholder="제목을 입력해주세요."
          onChange={onTitleChange}
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
