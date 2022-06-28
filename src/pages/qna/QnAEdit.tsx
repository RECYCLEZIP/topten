import React, { useState, useRef, useEffect } from "react";
import { useNavigate, useParams } from "react-router";

import { getData, putData } from "../../api";

import { QnAType } from "../../types/QnA";

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
import { customTostify } from "../../components/customTostify";

function QnAEdit() {
  const navigate = useNavigate();

  // 글의 id
  const id = useParams().id;

  const editorRef: any = useRef();

  const [qna, setQna] = useState<QnAType>();
  const [titleValue, setTitleValue] = useState<string | undefined>("");
  const [contentValue, setContentValue] = useState<string | undefined>("");

  const get = async () => {
    try {
      await getData(`posts/${id}`).then((res) => setQna(res.data));
    } catch (err: any) {
      customTostify("error", err.message);
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

    try {
      await putData(`posts/${id}`, { title: titleValue, content: data }).then(
        (res) => console.log(res),
      );

      navigate(`/qna/${id}`);
    } catch (err: any) {
      customTostify("error", err.message);
    }
  };

  useEffect(() => {
    get();
  }, []);

  useEffect(() => {
    setValues();
  }, [qna]);

  return (
    <Container>
      <TitleText>Q&A 수정하기</TitleText>
      <TitleInputContainer>
        <TitleInput
          id="title"
          type="text"
          value={titleValue}
          onChange={onTitleChange}
        ></TitleInput>
      </TitleInputContainer>
      {contentValue && (
        <Editor
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
      <PostButtonContainer>
        <PostButtonWrapper>
          <PostCancleButton onClick={() => navigate(`/qna/${id}`)}>
            수정 취소
          </PostCancleButton>
          <PostButton onClick={onClickSubmit}>수정 완료</PostButton>
        </PostButtonWrapper>
      </PostButtonContainer>
    </Container>
  );
}

export default QnAEdit;
