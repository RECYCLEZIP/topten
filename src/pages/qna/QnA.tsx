import React from "react";

import { useNavigate } from "react-router";

import { useRecoilValue } from "recoil";
import { loginState } from "../../stores/atoms";

import QnABar from "./QnABar";
import QnAList from "../../pages/qna/QnAList";
import QnAPagination from "../../pages/qna/QnAPagination";

import { toast } from "react-toastify";

import { TitleText } from "../../styles/TextStyle";
import { Container } from "../../styles/basicStyle";
import { Button } from "../../styles/ButtonStyles";
import {
  ButtonContainer,
  ButtonWrapper,
} from "../../styles/qnaStyles/QnAStyle";

function QnA() {
  const navigate = useNavigate();

  const isLogin = useRecoilValue(loginState);

  const onClickPost = () => {
    if (isLogin) {
      navigate(`/qna/post`);
    } else {
      toast.warn('로그인 후 이용할 수 있습니다.')
    }
  };

  return (
    <Container>
      <TitleText>Q&A</TitleText>
      <QnABar />
      <QnAList />
      <ButtonContainer>
        <ButtonWrapper>
          <Button onClick={onClickPost}>작성하기</Button>
        </ButtonWrapper>
      </ButtonContainer>
      <QnAPagination />
    </Container>
  );
}

export default QnA;
