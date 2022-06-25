import React, { useState, useRef } from "react";
import { useNavigate } from "react-router";

import { qnaPostData } from "../../api";

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
  PostButtonContainer,
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

    // var myHeaders = new Headers();
    // myHeaders.append("Authorization", "Bearer mF_9.B5f-4.1JqM");

    // console.log(`${sessionStorage.getItem("token")}`);
    try {
      await qnaPostData(`posts`, {
        title: titleValue,
        content: data,
      }).then((res) => console.log(res));

      navigate(`/qna`);
      // await postData(`posts`, {
      //   body: {
      //     title: titleValue,
      //     content: data,
      //   },
      //   headers: {
      //     authorization: `Bearer ${sessionStorage.getItem("token")}`,
      //   },
      // }).then((res) => console.log(res));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container>
      <TitleText>Q&A 글 쓰기</TitleText>
      <TitleInputContainer>
        {/* <TitleInputText>제목</TitleInputText> */}
        <TitleInput
          id="title"
          type="text"
          placeholder="제목을 입력해주세요."
          onChange={onTitleChange}
        ></TitleInput>
      </TitleInputContainer>
      {/* <TitleInputText>내용</TitleInputText> */}
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
