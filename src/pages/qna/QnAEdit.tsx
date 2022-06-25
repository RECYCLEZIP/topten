import React, { useState, useRef, useEffect } from "react";
import { useNavigate, useParams } from "react-router";

import { getData, putData } from "../../api";

import { QnAType } from "../../types/QnA";

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

function QnAEdit() {
  const navigate = useNavigate();

  const id = useParams().id;

  const editorRef: any = useRef();

  const [qna, setQna] = useState<QnAType>();
  const [titleValue, setTitleValue] = useState<string | undefined>("");
  const [contentValue, setContentValue] = useState<string | undefined>("");

  const get = async () => {
    try {
      await getData(`posts/${id}`).then((res) => setQna(res.data));
    } catch (err) {
      console.log(err);
    }
  };

  const setValues = () => {
    setTitleValue(qna?.title);
    setContentValue(qna?.content);
  };

  const onTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitleValue(e.target.value);
  };

  const onClickSubmit = async () => {
    const data = editorRef.current.getInstance().getMarkdown();

    console.log(data);

    try {
      await putData(`posts/${id}`, { title: titleValue, content: data }).then(
        (res) => console.log(res),
      );

      navigate(`/qna/${id}`);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    get();
  }, []);

  useEffect(() => {
    setValues();
  }, [qna]);

  const test = "제발";

  return (
    <Container>
      <TitleText>Q&A 수정하기</TitleText>
      <TitleInputContainer>
        {/* <TitleInputText>제목</TitleInputText> */}
        <TitleInput
          id="title"
          type="text"
          value={titleValue}
          onChange={onTitleChange}
        ></TitleInput>
      </TitleInputContainer>
      <>
        {/* <TitleInputText>내용</TitleInputText> */}
        {console.log(contentValue)}
        {contentValue && (
          <Editor
            // initialValue="***오늘***"
            // initialValue={test}
            initialValue={contentValue}
            ref={editorRef}
            previewStyle="vertical"
            height="600px"
            initialEditType="wysiwyg"
            useCommandShortcut={true}
            plugins={[colorSyntax]} // colorSyntax 플러그인 적용
            language="ko-KR"
          />
        )}
      </>
      <PostButtonWrapper>
        <PostCancleButton onClick={() => navigate(`/qna/${id}`)}>
          수정 취소
        </PostCancleButton>
        <PostButton onClick={onClickSubmit}>수정 완료</PostButton>
      </PostButtonWrapper>
    </Container>
  );
}

export default QnAEdit;
