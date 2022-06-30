import React, { useState, useEffect } from "react";

import { useRecoilValue, useRecoilState } from "recoil";
import {
  QnAListState,
  QnAPageState,
  QnALengthState,
  QnANumPagesState,
  userState,
} from "../../stores/atoms";

import { getData } from "../../api";

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

  const [user, setUser] = useRecoilState(userState);

  const [qnaList, setQnaList] = useRecoilState(QnAListState);

  const [qnaTotal, setQnaTotal] = useRecoilState(QnALengthState);
  const [qnaPage, setQnaPage] = useRecoilState(QnAPageState);

  const [numPages, setNumPages] = useRecoilState(QnANumPagesState);

  const getList = async () => {
    try {
      await getData(`posts/users/${user._id}?pageno=${qnaPage}&limit=10`).then(
        (res) => {
          setQnaList(res.data?.data);
          setQnaTotal(res.data?.count);
        },
      );
    } catch (err) {
      console.log(err);
    }
  };

  const date = (prop: string) => {
    return prop.split("T")[0].split("-").join(".");
  };

  useEffect(() => {
    setQnaPage(1);
  }, []);

  useEffect(() => {
    getList();
  }, [user, qnaPage]);

  return (
    <>
      <ListTable>
        <ListTbody>
          {qnaList?.map((qna: any, idx: number) => (
            <>
              {qnaList?.length === 0 ? (
                <tr>
                  <NothingTd>조회된 게시물이 없습니다.</NothingTd>
                </tr>
              ) : (
                <ListTr>
                  {/* 게시글 번호 내림차순으로 */}
                  <ListNumber>{qnaTotal - idx - (qnaPage - 1) * 10}</ListNumber>
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
