import React, { useState, useRef, useEffect } from "react";
import { useNavigate, useParams } from "react-router";

import { getData, putData } from "../../api";

import { QnAType } from "../../types/QnA";

import { Editor } from "@toast-ui/react-editor";

import colorSyntax from "@toast-ui/editor-plugin-color-syntax";

import "@toast-ui/editor/dist/i18n/ko-kr";

import { toast } from "react-toastify";

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
import Loading from "../../components/Loading";

function QnAEdit() {
  const navigate = useNavigate();

  // 글의 id
  const id = useParams().id;

  const editorRef: any = useRef();

  const [qna, setQna] = useState<QnAType>();
  const [titleValue, setTitleValue] = useState<string | undefined>("");
  const [contentValue, setContentValue] = useState<string | undefined>("");
  const [loading, setLoading] = useState(false);

  const get = async () => {
    try {
      await getData(`posts/${id}`).then((res) => setQna(res.data));
    } catch (err: any) {
      customToastify("error", err?.response?.data?.message);
    }
    setLoading(true);
  };

  const setValues = () => {
    setTitleValue(qna?.title);
    setContentValue(qna?.content);
  };

  const onTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitleValue(e.target.value);
  };

  const onChangeContent = () => {
    setContentValue(editorRef.current.getInstance().getMarkdown());
  };

  const onClickSubmit = async () => {
    const data = editorRef.current.getInstance().getMarkdown();

    if (titleValue && contentValue) {
      try {
        await putData(`posts/${id}`, { title: titleValue, content: data }).then(
          (res) => console.log(res),
        );

        navigate(`/qna/${id}`);
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

  useEffect(() => {
    get();
  }, []);

  useEffect(() => {
    setValues();
  }, [qna]);

  if (!loading) {
    return <Loading />;
  }

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
      {qna && (
        <Editor
          initialValue={qna?.content}
          ref={editorRef}
          previewStyle="vertical"
          height="600px"
          initialEditType="wysiwyg"
          useCommandShortcut={true}
          plugins={[colorSyntax]} // colorSyntax 플러그인 적용
          language="ko-KR"
          onChange={onChangeContent}
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
