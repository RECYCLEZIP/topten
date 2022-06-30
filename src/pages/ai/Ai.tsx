import React from "react";

import AiImageUpload from "./AiImageUpload";
import AiGuide from "./AiGuide";
import AiResult from "./AiResult";

import { useRecoilValue } from "recoil";
import { AiSituationState } from "../../stores/atoms";

import { Container, TopTitle } from "../../styles/basicStyle";
import { Helmet } from "react-helmet-async";

function Ai() {
  const situation = useRecoilValue(AiSituationState);

  return (
    <>
      <Helmet>
        <title>분리수ZIP - AI</title>
        <meta
          name="description"
          content="AI가 분류해주는 분리수거 서비스 분석페이지"
        />
        <link rel="canonical" href="/ai" />
      </Helmet>
      <Container>
        <TopTitle>AI 분리수거</TopTitle>
        <AiImageUpload />
        {/* 분석 완료일 시 분석 결과, 완료 전일 시 분석 가이드 */}
        {situation === "done" || situation === "fail" ? (
          <AiResult />
        ) : (
          <AiGuide />
        )}
      </Container>
    </>
  );
}

export default Ai;
