import React, { useState, useRef } from "react";

import { postData } from "../../api";

import "@toast-ui/editor/dist/toastui-editor.css";
import { Editor } from "@toast-ui/react-editor";

import "tui-color-picker/dist/tui-color-picker.css";
import "@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css";
import colorSyntax from "@toast-ui/editor-plugin-color-syntax";

import { Container } from "../../styles/basicStyle";
import { TitleText } from "../../styles/TextStyle";
import {
  TitleInputContainer,
  TitleInputText,TitleInput,
} from "../../styles/qnaStyles/QnAPostStyle";

function QnAPost() {
  const editorRef: any = useRef();

  const [titleValue, setTitleValue] = useState<string>();

  const onTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitleValue(e.target.value);
  };

  const onClickSubmit = async () => {
    const data = editorRef.current.getInstance().getMarkdown();

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
      <TitleText>QnA 작성</TitleText>
      <TitleInputContainer>
        <TitleInputText>제목</TitleInputText>
        <TitleInput id="title" type="text" onChange={onTitleChange}></TitleInput>
      </TitleInputContainer>
      <Editor
        initialValue="hello react editor world!"
        ref={editorRef}
        previewStyle="vertical"
        height="600px"
        initialEditType="markdown"
        useCommandShortcut={true}
        plugins={[colorSyntax]} // colorSyntax 플러그인 적용
        // language="ko-KR"
      />
      <button onClick={onClickSubmit}>등록</button>
    </Container>
  );
}

export default QnAPost;
