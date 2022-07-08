import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { useRecoilState } from "recoil";
import {
  UserQnaListState,
  QnALengthState,
  userState,
} from "../../stores/atoms";

import { getData } from "../../api";

import { QnAType } from "../../types/QnA";

import {
  ListTable,
  ListTbody,
  ListTr,
  NothingTd,
  ListNumber,
  ListTitle,
  ListDate,
  ListTitleWrapper,
} from "../../styles/qnaStyles/QnAStyle";

import {
  TitleContainer,
  TitleWrapper,
  SubTitleWrapper,
  QnaContainer,
} from "../../styles/userStyles/userPage";
import { customToastify } from "../../components/customToastify";

function UserQnA() {
  const navigate = useNavigate();

  const [user, setUser] = useRecoilState(userState);

  const [userQnaList, setUserQnaList] = useRecoilState(UserQnaListState);

  const [qnaTotal, setQnaTotal] = useRecoilState(QnALengthState);

  const [mQuery, setMQuery] = useState(window.innerWidth > 768 ? true : false);

  const getList = async () => {
    if (user?._id || user.userId) {
      try {
        await getData(
          `posts/users/${user._id || user.userId}?pageno=1&limit=3`,
        ).then((res) => {
          setUserQnaList(res.data?.data);
          setQnaTotal(res.data?.count);
        });
      } catch (err: any) {
        customToastify("error", err?.response?.data?.message);
      }
    }
  };

  const date = (prop: string) => {
    return prop.split("T")[0].split("-").join(".").substr(2);
  };

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
  }, []);

  useEffect(() => {
    getList();
  }, [user]);

  return (
    <div>
      <TitleContainer>
        <TitleWrapper>나의 Q&A</TitleWrapper>
        <SubTitleWrapper onClick={() => navigate("qna")}>
          자세히 보기
        </SubTitleWrapper>
      </TitleContainer>
      <QnaContainer>
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
                      <ListNumber>{userQnaList?.length - idx}</ListNumber>
                    )}
                    <ListTitle onClick={() => navigate(`/qna/${qna._id}`)}>
                      <ListTitleWrapper>{qna?.title}</ListTitleWrapper>
                    </ListTitle>
                    <ListDate>{date(qna?.createdAt)}</ListDate>
                  </ListTr>
                ))}
              </>
            )}
          </ListTbody>
        </ListTable>
      </QnaContainer>
    </div>
  );
}

export default UserQnA;
