import React, { useState, useEffect } from "react";

import { useRecoilValue, useRecoilState } from "recoil";
import {
  QnAListState,
  QnASearchState,
  QnASearchValueState,
  QnAPageState,
  QnALengthState,
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

  const qnaAllList = useRecoilValue(QnAListState);
  const [qnaList, setQnaList] = useState<QnAType | any>();
  const qnaSearchList = useRecoilValue(QnASearchState);
  const searchValue = useRecoilValue<string>(QnASearchValueState);

  const [qnaTotal, setQnaTotal] = useRecoilState(QnALengthState);
  const [qnaPage, setQnaPage] = useRecoilState(QnAPageState);

  const offset = (qnaPage - 1) * 5;

  const date = (prop: string) => {
    return prop.split("T")[0].split("-").join(".");
  };

  useEffect(() => {
    // 검색 전 전체 리스트 세팅
    setQnaList([...qnaAllList]);
  }, [qnaAllList]);

  useEffect(() => {
    const len = (qnaList?.length);
    console.log(len)
    setQnaTotal(len);
  }, [qnaList]);

  useEffect(() => {
    if (searchValue !== "") {
      // 검색어 있을 시
      if (qnaSearchList.length !== 0) {
        // 검색 결과 있을 시
        setQnaList(qnaSearchList);
      } else {
        // 검색 결과 없을 시
        setQnaList([]);
      }
    } else {
      // 검색어 없을 시
      setQnaList(qnaAllList);
    }
  }, [qnaSearchList]);

  return (
    <>
      <BlackHr />
      <ListTable>
        <ListTbody>
          {qnaAllList.slice(offset, offset + 5).map((qna: any, idx: any) => (
            <>
              {qnaList?.length === 0 ? (
                <tr>
                  <NothingTd>조회된 게시물이 없습니다.</NothingTd>
                </tr>
              ) : (
                <ListTr>
                  {/* 게시글 번호 내림차순으로 */}
                  <ListNumber>{qnaAllList.length - idx}</ListNumber>
                  <ListTitle onClick={() => navigate(`/qna/${qna._id}`)}>
                    {qna?.title}
                  </ListTitle>
                  <ListAuthor>{qna?.author?.username}</ListAuthor>
                  <ListDate>{date(qna?.createdAt)}</ListDate>
                </ListTr>
              )}
            </>
          ))}
        </ListTbody>
      </ListTable>
      <BlackHr />
    </>
  );
}

export default QnAList;
