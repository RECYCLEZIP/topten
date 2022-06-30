import React, { useState, useEffect } from "react";

import { useRecoilValue, useRecoilState } from "recoil";
import {
  UserQnaListState,
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

function UserAlluserQnaList() {
  const navigate = useNavigate();

  const [user, setUser] = useRecoilState(userState);

  const [userQnaList, setUseruserQnaList] = useRecoilState(UserQnaListState);

  const [qnaTotal, setQnaTotal] = useRecoilState(QnALengthState);
  const [qnaPage, setQnaPage] = useRecoilState(QnAPageState);

  const [numPages, setNumPages] = useRecoilState(QnANumPagesState);

  const [qnaNumber, setQnaNumber] = useState(0);

  const [mQuery, setMQuery] = useState(window.innerWidth > 768 ? true : false);

  const getList = async () => {
    try {
      await getData(`posts/users/${user._id}?pageno=${qnaPage}&limit=10`).then(
        (res) => {
          setUseruserQnaList(res.data?.data);
          setQnaTotal(res.data?.count);
        },
      );
    } catch (err) {
      console.log(err);
    }
  };

  const date = (prop: string) => {
    return prop.split("T")[0].split("-").join(".").substr(2);
  };

  const screenChange = (event: any) => {
    const matches = event.matches;
    setMQuery(matches);
  };

  const mediaQuery = () => {
    const media = window.matchMedia("screen and (min-width: 768px)");
    media.addEventListener("change", screenChange);

    return () => media.removeEventListener("change", screenChange);
  };

  useEffect(() => {
    mediaQuery();
    setQnaPage(1);
  }, []);

  useEffect(() => {
    getList();
  }, [user, qnaPage]);

  useEffect(() => {
    setQnaNumber((qnaPage - 1) * 10);
  }, [userQnaList]);

  return (
    <>
      <ListTable>
        <ListTbody>
          {userQnaList?.map((qna: any, idx: number) => (
            <>
              {userQnaList?.length === 0 ? (
                <tr>
                  <NothingTd>조회된 게시물이 없습니다.</NothingTd>
                </tr>
              ) : (
                <ListTr>
                  {/* 게시글 번호 내림차순으로 */}
                  {mQuery && (
                    <ListNumber>{qnaTotal - idx - qnaNumber}</ListNumber>
                  )}
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

export default UserAlluserQnaList;
