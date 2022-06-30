import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { useRecoilState, useResetRecoilState } from "recoil";
import {
  UserQnaListState,
  QnAPageState,
  QnANumPagesState,
  QnALengthState,
  userState,
} from "../../stores/atoms";

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
  ListTitleWrapper,
  ListAuthorWrapper,
} from "../../styles/qnaStyles/QnAStyle";

import {
  TitleContainer,
  TitleWrapper,
  SubTitleWrapper,
  QnaContainer,
} from "../../styles/userStyles/userPage";

function UserQnA() {
  const navigate = useNavigate();

  const [user, setUser] = useRecoilState(userState);

  const [userQnaList, setUserQnaList] = useRecoilState(UserQnaListState);

  const [qnaTotal, setQnaTotal] = useRecoilState(QnALengthState);

  const [qnaPage, setQnaPage] = useRecoilState(QnAPageState);
  const [numPages, setNumPages] = useRecoilState(QnANumPagesState);

  const [mQuery, setMQuery] = useState(window.innerWidth > 768 ? true : false);

  const getList = async () => {
    if (user?._id || user.userId) {
      try {
        await getData(
          `posts/users/${user._id || user.userId}?pageno=${qnaPage}&limit=3`,
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
    console.log("바뀜");
    getList();
  }, [user]);

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
                      <ListNumber>{userQnaList?.length - idx}</ListNumber>
                    )}
                    <ListTitle onClick={() => navigate(`/qna/${qna._id}`)}>
                      <ListTitleWrapper>{qna?.title}</ListTitleWrapper>
                    </ListTitle>
                    <ListDate>
                      {date(qna?.createdAt)}
                      {/* 2022.06.29 */}
                    </ListDate>
                  </ListTr>
                )}
              </>
            ))}
          </ListTbody>
        </ListTable>
      </QnaContainer>
    </div>
  );
}

export default UserQnA;
