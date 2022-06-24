import React, { useState, useRef } from "react";
import { useNavigate } from "react-router";

import { postData } from "../../api";

import "@toast-ui/editor/dist/toastui-editor.css";
import { Editor } from "@toast-ui/react-editor";

import "tui-color-picker/dist/tui-color-picker.css";
import "@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css";
import colorSyntax from "@toast-ui/editor-plugin-color-syntax";

import "@toast-ui/editor/dist/i18n/ko-kr";

import { Button } from "../../styles/ButtonStyles";
import { Container } from "../../styles/basicStyle";
import { TitleText } from "../../styles/TextStyle";
import {
  TitleInputContainer,
  TitleInputText,
  TitleInput,
  PostButtonWrapper,
  PostButton,
  PostCancleButton,
} from "../../styles/qnaStyles/QnAPostStyle";

function QnAPost() {
  const navigate = useNavigate();

  const editorRef: any = useRef();

  const [titleValue, setTitleValue] = useState<string>();

  const onTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitleValue(e.target.value);
  };

  const onClickSubmit = async () => {
    const data = editorRef.current.getInstance().getMarkdown();

    console.log(data);

    try {
      await postData(`posts`, { title: titleValue, content: data }).then(
        (res) => console.log(res),
      );
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container>
      <TitleText>Q&A 글 쓰기</TitleText>
      <TitleInputContainer>
        <TitleInputText>제목</TitleInputText>
        <TitleInput
          id="title"
          type="text"
          onChange={onTitleChange}
        ></TitleInput>
      </TitleInputContainer>
      <TitleInputText>내용</TitleInputText>
      <Editor
        initialValue="hello react editor world!"
        ref={editorRef}
        previewStyle="vertical"
        height="600px"
        initialEditType="markdown"
        useCommandShortcut={true}
        plugins={[colorSyntax]} // colorSyntax 플러그인 적용
        language="ko-KR"
      />
      <PostButtonWrapper>
        <PostCancleButton onClick={() => navigate(`/qna`)}>
          작성 취소
        </PostCancleButton>
        <PostButton onClick={onClickSubmit}>작성 완료</PostButton>
      </PostButtonWrapper>
    </Container>
  );
}

export default QnAPost;
