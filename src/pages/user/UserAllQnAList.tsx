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
  ListDate,
} from "../../styles/qnaStyles/QnAStyle";

function UserAllQnAList() {
  const navigate = useNavigate();

  const qnaAllList = useRecoilValue(QnAListState);
  const [qnaList, setQnaList] = useState<QnAType | any>();

  const [qnaTotal, setQnaTotal] = useRecoilState(QnALengthState);
  const [qnaPage, setQnaPage] = useRecoilState(QnAPageState);

  const [numPages, setNumPages] = useRecoilState(QnANumPagesState);

  const offset = (qnaPage - 1) * 10;

  const date = (prop: string) => {
    return prop.split("T")[0].split("-").join(".");
  };

  useEffect(() => {
    // 검색 전 전체 리스트 세팅
    console.log(qnaAllList);
    setQnaList([...qnaAllList]);
  }, [qnaAllList]);

  return (
    <>
      <ListTable>
        <ListTbody>
          {/* {qnaList?.slice(offset, offset + 10).map((qna: any, idx: number) => ( */}
          {qnaList?.map((qna: any, idx: number) => (
            <>
              <>{console.log(qnaPage)}</>
              {qnaList?.length === 0 ? (
                <tr>
                  <NothingTd>조회된 게시물이 없습니다.</NothingTd>
                </tr>
              ) : (
                <ListTr>
                  {/* 게시글 번호 내림차순으로 */}
                  <ListNumber>{qnaList.length - idx}</ListNumber>
                  <ListTitle onClick={() => navigate(`/qna/${qna._id}`)}>
                    {qna?.title}
                  </ListTitle>
                  <ListDate>{date(qna?.createdAt)}</ListDate>
                </ListTr>
              )}
            </>
          ))}
        </ListTbody>
      </ListTable>
    </>
  );
}

export default UserAllQnAList;
