import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router";

import { Viewer } from "@toast-ui/react-editor";

import { getData, delData } from "../../api";

import { QnAType } from "../../types/QnA";

import { useRecoilValue } from "recoil";
import { loginState } from "../../stores/atoms";

import QnAComment from "./QnAComment";
import QnAModal from "./QnAModal";

import { Container } from "../../styles/basicStyle";
import { TitleText } from "../../styles/TextStyle";
import {
  BlackHr,
  GrayHr,
  TitleContainer,
  Title,
  RightContainer,
  Author,
  Date,
  ContentContainer,
  ButtonWrapper,
  GrayButton,
  RedButton,
  SquareButton,
  ButtonContainer,
} from "../../styles/qnaStyles/QnADescriptionStyle";
import { customToastify } from "../../components/customToastify";
import { Helmet } from "react-helmet-async";

import { UserType } from "../../types/User";
import Loading from "../../components/Loading";

function QnADescription() {
  const navigate = useNavigate();

  // 게시글 id
  const id = useParams().id;

  // 로그인한 사용자
  // const user = useRecoilValue(userState);
  const [user, setUser] = useState<UserType>();
  const isLogin = useRecoilValue(loginState);

  const [qna, setQna] = useState<QnAType>();
  const [loading, setLoading] = useState(false);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);

  const getUser = async () => {
    if (isLogin) {
      try {
        const res = await getData(`users/current`);
        setUser(res.data);
      } catch (err: any) {
        console.log(err.response.data.message);
      }
    }
  };

  const getQnA = async () => {
    try {
      await getData(`posts/${id}`).then((res) => setQna(res.data));
    } catch (err: any) {
      customToastify("error", err?.response?.data?.message);
    }
    setLoading(true);
  };

  const date = (prop: string) => {
    return prop?.split("T")[0].split("-").join(".");
  };

  useEffect(() => {
    getQnA();
  }, []);

  useEffect(() => {
    getUser();
  }, [isLogin]);

  if (!loading) {
    return <Loading />;
  }

  return (
    <Container>
      <Helmet>
        <title>분리수ZIP - {qna?.title}</title>
      </Helmet>
      <TitleText>Q&A</TitleText>
      <BlackHr />
      <TitleContainer>
        <Title>{qna?.title}</Title>
        <RightContainer>
          <Date>{qna && <span>{date(qna?.createdAt)}</span>}</Date>
          <Author>{qna?.author?.username}</Author>
        </RightContainer>
      </TitleContainer>
      <GrayHr />
      {qna?.content && (
        <ContentContainer>
          <Viewer initialValue={qna?.content} />
        </ContentContainer>
      )}
      <BlackHr />
      <>
        {/* 현재 로그인한 사용자가 게시글의 작성자일 시 */}
        {user?._id === qna?.author._id && (
          <>
            <ButtonWrapper>
              <GrayButton onClick={() => navigate(`edit/`)}>수정</GrayButton>
              <RedButton onClick={handleOpen}>삭제</RedButton>
            </ButtonWrapper>
            <QnAModal open={open} setOpen={setOpen} />
          </>
        )}
      </>
      <QnAComment />
      <BlackHr />
      <ButtonContainer>
        <SquareButton onClick={() => navigate(`/qna/`)}>목록</SquareButton>
      </ButtonContainer>
    </Container>
  );
}

export default QnADescription;
