import React, { useEffect } from "react";

import { getData } from "../../api";

import "@toast-ui/editor/dist/toastui-editor.css";
import { Editor } from "@toast-ui/react-editor";

import "tui-color-picker/dist/tui-color-picker.css";
import "@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css";
import colorSyntax from "@toast-ui/editor-plugin-color-syntax";

import { Container } from "../../styles/basicStyle";
import { TitleText } from "../../styles/TextStyle";

function QnAPost() {
  return (
    <Container>
      <TitleText>QnA 작성</TitleText>
      <Editor
        initialValue="hello react editor world!"
        previewStyle="vertical"
        height="600px"
        initialEditType="markdown"
        useCommandShortcut={true}
        plugins={[colorSyntax]} // colorSyntax 플러그인 적용
      />
    </Container>
  );
}

export default QnAPost;
