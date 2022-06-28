import React from "react";

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

import { BlackHr } from "../../styles/qnaStyles/QnADescriptionStyle";

function QnAList() {
  const navigate = useNavigate();

  const qnaList = useRecoilValue(QnAListState);

  const date = (prop: any) => {
    return prop.split("T")[0].split("-").join(".");
  };

  return (
    <>
      <BlackHr />
      <ListTable>
        <ListTbody>
          {qnaList.map((qna, idx) => (
            <ListTr>
              {/* 게시글 번호 내림차순으로 */}
              <ListNumber>{qnaList.length - idx}</ListNumber>
              <ListTitle onClick={() => navigate(`/qna/${qna._id}`)}>
                {qna?.title}
              </ListTitle>
              <ListAuthor>{qna?.author?.username}</ListAuthor>
              <ListDate>{date(qna?.createdAt)}</ListDate>
            </ListTr>
          ))}
        </ListTbody>
      </ListTable>
      <BlackHr />
    </>
  );
}

export default QnAList;
