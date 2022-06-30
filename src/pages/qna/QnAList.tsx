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
  ListTitleWrapper,
  ListAuthorWrapper,
} from "../../styles/qnaStyles/QnAStyle";

import { BlackHr } from "../../styles/qnaStyles/QnADescriptionStyle";

function QnAList() {
  const navigate = useNavigate();

  const qnaList = useRecoilValue(QnAListState);

  const [qnaPage, setQnaPage] = useRecoilState(QnAPageState);

  const [numPages, setNumPages] = useRecoilState(QnANumPagesState);

  const qnaTotal = useRecoilValue(QnALengthState);

  const [qnaNumber, setQnaNumber] = useState(0);

  const [mQuery, setMQuery] = useState(window.innerWidth > 768 ? true : false);

  const date = (prop: string) => {
    return prop.split("T")[0].split("-").join(".").substr(2);
  };

  const screenChange = (event: any) => {
    const matches = event.matches;
    setMQuery(matches);
  };

  useEffect(() => {
    const media = window.matchMedia("screen and (min-width: 768px)");
    media.addEventListener("change", screenChange);

    return () => media.removeEventListener("change", screenChange);
  }, []);

  useEffect(() => {
    setQnaNumber((qnaPage - 1) * 10);
  }, [qnaList]);

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
                  <>
                    {mQuery && (
                      <ListNumber>{qnaTotal - idx - qnaNumber}</ListNumber>
                    )}
                    <ListTitle onClick={() => navigate(`/qna/${qna._id}`)}>
                      <ListTitleWrapper>{qna?.title}</ListTitleWrapper>
                    </ListTitle>
                    <>
                      {mQuery && (
                        <ListAuthor>
                          <ListAuthorWrapper>
                            {qna?.author?.username}
                          </ListAuthorWrapper>
                        </ListAuthor>
                      )}
                    </>
                    <ListDate>{date(qna?.createdAt)}</ListDate>
                  </>
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
