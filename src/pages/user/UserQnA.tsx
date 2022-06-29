import React from "react";
import { useNavigate } from "react-router-dom";

import { getData } from "../../api";

import UserAllQnA from "./UserAllQnA";

import {
  ListTable,
  ListTbody,
  ListTr,
  NothingTd,
  ListNumber,
  ListTitle,
  ListDate,
} from "../../styles/qnaStyles/QnAStyle";

import {
  TitleContainer,
  TitleWrapper,
  SubTitleWrapper,
  QnaContainer,
} from "../../styles/userStyles/userPage";

function UserQnA() {
  const navigate = useNavigate();

  return (
    <div>
      {/* 타이틀 섹션 */}
      <TitleContainer>
        <TitleWrapper>나의 Q&A</TitleWrapper>
        <SubTitleWrapper onClick={() => navigate("qna")}>
          자세히 보기
        </SubTitleWrapper>
      </TitleContainer>
      {/* 컨텐츠 */}
      <QnaContainer>
        <ListTable>
          <ListTbody>
            {/* {qnaList?.map((qna: any, idx: number) => (
              <>
                <>{console.log(qnaPage)}</>
                {qnaList?.length === 0 ? (
                  <tr>
                    <NothingTd>조회된 게시물이 없습니다.</NothingTd>
                  </tr>
                ) : ( */}
            <ListTr>
              {/* 게시글 번호 내림차순으로 */}
              <ListNumber>{/* {qnaList.length - idx} */}1</ListNumber>
              <ListTitle
              // onClick={() => navigate(`/qna/${qna._id}`)}
              >
                {/* {qna?.title} */}목 데이터
              </ListTitle>
              <ListDate>
                {/* {date(qna?.createdAt)} */}
                2022.06.29
              </ListDate>
            </ListTr>
            <ListTr>
              {/* 게시글 번호 내림차순으로 */}
              <ListNumber>{/* {qnaList.length - idx} */}1</ListNumber>
              <ListTitle
              // onClick={() => navigate(`/qna/${qna._id}`)}
              >
                {/* {qna?.title} */}목 데이터
              </ListTitle>
              <ListDate>
                {/* {date(qna?.createdAt)} */}
                2022.06.29
              </ListDate>
            </ListTr>
            {/* )} */}
            {/* </> */}
            {/* ))} */}
          </ListTbody>
        </ListTable>
      </QnaContainer>
    </div>
  );
}

export default UserQnA;
