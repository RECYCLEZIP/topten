import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useRecoilState, useResetRecoilState } from "recoil";
import {
  QnAListState,
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

  const [qnaList, setQnaList] = useRecoilState(QnAListState);

  const [qnaTotal, setQnaTotal] = useRecoilState(QnALengthState);

  const [qnaPage, setQnaPage] = useRecoilState(QnAPageState);
  const [numPages, setNumPages] = useRecoilState(QnANumPagesState);


  console.log(user);

  const getList = async () => {
    try {
      await getData(
        `posts/users/${user._id}?pageno=${qnaPage}&limit=3`,
      ).then((res) => {
        setQnaList(res.data?.data);
        setQnaTotal(res.data?.count);
      });
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
            {qnaList?.map((qna: any, idx: number) => (
              <>
                {qnaList?.length === 0 ? (
                  <tr>
                    <NothingTd>조회된 게시물이 없습니다.</NothingTd>
                  </tr>
                ) : (
                  <ListTr>
                    {/* 게시글 번호 내림차순으로 */}
                    <ListNumber>{qnaList?.length - idx}</ListNumber>
                    <ListTitle onClick={() => navigate(`/qna/${qna._id}`)}>
                      {qna?.title}
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
