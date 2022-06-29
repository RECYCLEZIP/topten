import React, { useEffect, useState } from "react";

import { useRecoilState, useRecoilValue } from "recoil";
import {
  QnAPageState,
  QnALengthState,
  QnANumPagesState,
} from "../../stores/atoms";

import { Nav, Button } from "../../styles/qnaStyles/QnAPaginationStyle";

function QnaPagination() {
  // 게시글 수
  const qnaTotal = useRecoilValue(QnALengthState);
  const [qnaPage, setQnaPage] = useRecoilState(QnAPageState);
  const [numPages, setNumPages] = useRecoilState(QnANumPagesState);

  useEffect(() => {
    console.log(qnaTotal);
    setNumPages(Math.ceil(qnaTotal / 10));
  }, [qnaTotal]);

  return (
    <>
      <Nav>
        <Button
          onClick={() => setQnaPage(qnaPage - 1)}
          disabled={qnaPage === 1}
          current={null}
        >
          &lt;
        </Button>
        <> {console.log(numPages)}</>
        {Array(numPages)
          .fill(1, 0)
          .map((_, i) => (
            <Button
              key={i + 1}
              onClick={() => setQnaPage(i + 1)}
              current={qnaPage === i + 1 ? "qnaPage" : null}
            >
              {i + 1}
            </Button>
          ))}
        <Button
          onClick={() => setQnaPage(qnaPage + 1)}
          disabled={qnaPage === numPages}
          current={null}
        >
          &gt;
        </Button>
      </Nav>
    </>
  );
}

export default QnaPagination;
