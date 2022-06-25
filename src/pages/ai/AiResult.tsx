import React, { useEffect } from "react";

import { AiContentTitle, AiContentText } from "../../styles/aiStyles/AiStyle";

import AiResultMap from ".//AiResultMap";
import AiResultMapList from "./AiResultMapList";

import {
  AiResultSubjectSection,
  AiResultSubjectName,
  AiResultSubjectTexture,
  AiResultContentsSection,
  AiResultSummaryContainer,
  AiResultMidSummaryContainer,
  AiResultSummaryTitleWrapper,
  AiResultSummaryDesWrapper,
  AiResultDesContainer,
  AiResultDesLastContainer,
} from "../../styles/aiStyles/AiResultStyle";

import { MapBinSection } from "../../styles/mapStyles/mapStyle";

function AiResult() {
  return (
    <>
      <AiResultSubjectSection>
        <AiResultSubjectName>페트병</AiResultSubjectName>
        <AiResultSubjectTexture>플라스틱</AiResultSubjectTexture>
      </AiResultSubjectSection>
      <AiResultContentsSection>
        <AiResultSummaryContainer>
          <AiResultSummaryTitleWrapper>분석1</AiResultSummaryTitleWrapper>
          <AiResultSummaryDesWrapper>분석 내용1</AiResultSummaryDesWrapper>
        </AiResultSummaryContainer>
        <AiResultMidSummaryContainer>
          <AiResultSummaryTitleWrapper>분석1</AiResultSummaryTitleWrapper>
          <AiResultSummaryDesWrapper>분석 내용1</AiResultSummaryDesWrapper>
        </AiResultMidSummaryContainer>
        <AiResultSummaryContainer>
          <AiResultSummaryTitleWrapper>분석1</AiResultSummaryTitleWrapper>
          <AiResultSummaryDesWrapper>분석 내용1</AiResultSummaryDesWrapper>
        </AiResultSummaryContainer>
      </AiResultContentsSection>
      <div>
        <div>
          <div>
            <AiContentTitle>분석 1 상세</AiContentTitle>
          </div>
          <AiResultDesContainer>
            <AiContentText>분석 1 상세 내용</AiContentText>
          </AiResultDesContainer>
        </div>
        <div>
          <div>
            <AiContentTitle>분석 1 상세</AiContentTitle>
          </div>
          <AiResultDesContainer>
            <AiContentText>분석 1 상세 내용</AiContentText>
          </AiResultDesContainer>
        </div>
        <div>
          <div>
            <AiContentTitle>분석 1 상세</AiContentTitle>
          </div>
          <AiResultDesLastContainer>
            <AiContentText>분석 1 상세 내용</AiContentText>
          </AiResultDesLastContainer>
        </div>
      </div>
      <div>
        <div>
          <AiContentTitle>버리는 법</AiContentTitle>
        </div>
        <AiResultDesContainer>
          <AiContentText>버리는 법 상세 내용</AiContentText>
        </AiResultDesContainer>
      </div>
      <div>
        <AiResultMap />
        <AiResultMapList />
      </div>
    </>
  );
}

export default AiResult;
