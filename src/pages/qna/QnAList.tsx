import React, { useState, useEffect } from "react";

import { useRecoilValue, useRecoilState } from "recoil";
import {
  QnAListState,
  QnAPageState,
  QnALengthState,
  QnANumPagesState,
} from "../../stores/atoms";

import { QnAType } from "../../types/QnA";

import { useNavigate } from "react-router";

import {
  ListTable,
  ListTbody,
  ListTr,
  NothingTd,
  ListNumber,
  ListTitle,
  ListAuthor,
  ListDate,
} from "../../styles/qnaStyles/QnAStyle";

import { BlackHr } from "../../styles/qnaStyles/QnADescriptionStyle";

function QnAList() {
  const navigate = useNavigate();

  const qnaList = useRecoilValue(QnAListState);

  const [qnaPage, setQnaPage] = useRecoilState(QnAPageState);

  const [numPages, setNumPages] = useRecoilState(QnANumPagesState);

  const date = (prop: string) => {
    return prop.split("T")[0].split("-").join(".");
  };

  return (
    <>
      <BlackHr />
      <ListTable>
        <ListTbody>
          {qnaList?.length === 0 ? (
            <tr>
              <NothingTd>조회된 게시물이 없습니다.</NothingTd>
            </tr>
          ) : (
            <>
              {qnaList?.map((qna: any, idx: number) => (
                <ListTr>
                  {/* 게시글 번호 내림차순으로 */}
                  <ListNumber>{qnaList.length - idx}</ListNumber>
                  <ListTitle onClick={() => navigate(`/qna/${qna._id}`)}>
                    {qna?.title}
                  </ListTitle>
                  <ListAuthor>{qna?.author?.username}</ListAuthor>
                  <ListDate>{date(qna?.createdAt)}</ListDate>
                </ListTr>
              ))}
            </>
          )}
        </ListTbody>
      </ListTable>
      <BlackHr />
    </>
  );
}

export default QnAList;
