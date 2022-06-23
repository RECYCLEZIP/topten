import React from "react";

import {
  BarSection,
  BarText,
  BarRedText,
  ListTable,
  ListTbody,
  ListTr,
  ListNumber,
  ListTitle,
  ListAuthor,
  ListDate,
} from "../../styles/qnaStyles/QnAStyle";

import { TitleText } from "../../styles/TextStyle";
import { Container } from "../../styles/basicStyle";

function QnA() {
  return (
    <Container>
      {/* 페이지 타이틀 */}
      <TitleText>Q&A</TitleText>
      {/* 바 섹션 */}
      <BarSection>
        {/* 전체 게시글 수 */}
        <BarText>
          전체 <BarRedText>12</BarRedText>건
        </BarText>
        {/* 페이지 번호 */}
        <BarText>
          페이지 <BarRedText>1</BarRedText>
          /32
        </BarText>
        {/* 검색  */}
        <div></div>
      </BarSection>
      {/* 게시글 리스트 섹션 */}
      <ListTable>
        {/* 리스트 tbody */}
        <ListTbody>
          <ListTr>
            {/* 페이지 번호 */}
            <ListNumber>12</ListNumber>
            <ListTitle>어떻게? 하는 거</ListTitle>
            <ListAuthor>강*선</ListAuthor>
            <ListDate>2022.01.10</ListDate>
          </ListTr>
          <ListTr>
            {/* 페이지 번호 */}
            <ListNumber>12</ListNumber>
            <ListTitle>어떻게?</ListTitle>
            <ListAuthor>강*선</ListAuthor>
            <ListDate>2022.01.10</ListDate>
          </ListTr>
          <ListTr>
            {/* 페이지 번호 */}
            <ListNumber>12</ListNumber>
            <ListTitle>어떻게?</ListTitle>
            <ListAuthor>강*선</ListAuthor>
            <ListDate>2022.01.10</ListDate>
          </ListTr>
        </ListTbody>
      </ListTable>
      {/* 페이지네이션 */}
      <div></div>
    </Container>
  );
}

export default QnA;
