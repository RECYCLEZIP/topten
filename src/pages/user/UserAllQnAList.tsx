import React, { useState, useEffect } from "react";

import { useRecoilState } from "recoil";
import {
  UserQnaAllListState,
  QnAPageState,
  QnALengthState,
  QnANumPagesState,
  userState,
} from "../../stores/atoms";

import { getData } from "../../api";

import { useNavigate } from "react-router";

import { QnAType } from "../../types/QnA";

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

  const [userQnaList, setUserQnaList] = useRecoilState(UserQnaAllListState);

  const [qnaTotal, setQnaTotal] = useRecoilState(QnALengthState);
  const [qnaPage, setQnaPage] = useRecoilState(QnAPageState);

  const [qnaNumber, setQnaNumber] = useState(0);

  const [mQuery, setMQuery] = useState(window.innerWidth > 768 ? true : false);

  const getList = async () => {
    if (user?._id || user.userId) {
      try {
        await getData(
          `posts/users/${user._id || user.userId}?pageno=${qnaPage}&limit=10`,
        ).then((res) => {
          setUserQnaList(res.data?.data);
          setQnaTotal(res.data?.count);
        });
      } catch (err) {
        console.log(err);
      }
    }
  };

  const date = (prop: string) => {
    return prop.split("T")[0].split("-").join(".").substr(2);
  };

  // 화면 크기에 따라서 글 번호 여부
  const screenChange = (event: MediaQueryListEvent) => {
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
          {userQnaList?.length === 0 ? (
            <tr>
              <NothingTd>조회된 게시물이 없습니다.</NothingTd>
            </tr>
          ) : (
            <>
              {userQnaList?.map((qna: QnAType, idx: number) => (
                <ListTr>
                  {mQuery && (
                    <ListNumber>{qnaTotal - idx - qnaNumber}</ListNumber>
                  )}
                  <ListTitle onClick={() => navigate(`/qna/${qna._id}`)}>
                    {qna?.title}
                  </ListTitle>
                  <ListDate>{date(qna?.createdAt)}</ListDate>
                </ListTr>
              ))}
            </>
          )}
        </ListTbody>
      </ListTable>
    </>
  );
}

export default UserAlluserQnaList;
