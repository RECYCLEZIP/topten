import React, { useEffect } from "react";

import "@toast-ui/editor/dist/toastui-editor.css";
import { Editor } from "@toast-ui/react-editor";

import { Container } from "../../styles/basicStyle";
import { TitleText } from "../../styles/TextStyle";

function QnAWrite() {
  return (
    <Container>
      <TitleText>QnA 작성</TitleText>
      <Editor
        initialValue="hello react editor world!"
        previewStyle="vertical"
        height="600px"
        initialEditType="markdown"
        useCommandShortcut={true}
      />
    </Container>
  );
}

export default QnAWrite;
