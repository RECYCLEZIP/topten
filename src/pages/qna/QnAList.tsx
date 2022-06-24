import React, { useState, useEffect } from "react";

import { useRecoilValue } from "recoil";
import { QnAListState } from "../../stores/atoms";

import { useNavigate } from "react-router";

import {
  ListTable,
  ListTbody,
  ListTr,
  ListNumber,
  ListTitle,
  ListAuthor,
  ListDate,
} from "../../styles/qnaStyles/QnAStyle";

function QnAList() {
  const navigate = useNavigate();

  const qnaList = useRecoilValue(QnAListState);

  const date = (prop: any) => {
    return prop.split("T")[0].split("-").join(".");
  };

  return (
    <>
      <ListTable>
        {/* 리스트 tbody */}
        <ListTbody>
          {qnaList.map((qna, idx) => (
            <>
              {console.log(qna)}
              <ListTr>
                {/* 페이지 번호 */}
                <ListNumber>{qnaList.length - idx}</ListNumber>
                <ListTitle onClick={() => navigate(`/qna/${qna._id}`)}>
                  {qna?.title}
                </ListTitle>
                <ListAuthor>{qna?.author?.username}</ListAuthor>
                <ListDate>{date(qna?.createdAt)}</ListDate>
              </ListTr>
            </>
          ))}
        </ListTbody>
      </ListTable>
    </>
  );
}

export default QnAList;
