import React, { useEffect, useState } from "react";

import styled from "styled-components";

import { useRecoilState } from "recoil";
import { QnAPageState, QnALengthState } from "../../stores/atoms";

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  margin: 16px;
`;

const Button = styled.button`
  border: none;
  border-radius: 8px;
  padding: 8px;
  margin: 0;
  background: black;
  color: white;
  font-size: 1rem;

  &:hover {
    background: tomato;
    cursor: pointer;
    transform: translateY(-2px);
  }

  &[disabled] {
    background: grey;
    cursor: revert;
    transform: revert;
  }

  &[aria-current] {
    background: deeppink;
    font-weight: bold;
    cursor: revert;
    transform: revert;
  }
`;

function QnaPagination() {
  const [qnaTotal, setQnaTotal] = useRecoilState(QnALengthState);
  const [qnaPage, setQnaPage] = useRecoilState(QnAPageState);
  const [numPages, setNumPages] = useState<number>();

  const limit = 5;

  useEffect(() => {
    console.log(qnaTotal);
    setNumPages(Math.ceil(qnaTotal / limit));
  }, []);

  return (
    <>
      <Nav>
        <Button
          onClick={() => setQnaPage(qnaPage - 1)}
          disabled={qnaPage === 1}
        >
          &lt;
        </Button>
        <>{console.log(numPages)}</>
        {Array(numPages)
          .fill(1, 1)
          .map((_, i) => (
            <Button
              key={i + 1}
              onClick={() => setQnaPage(i + 1)}
              //   aria-current={qnaPage === i + 1 ? "qnaPage" : null}
            >
              {i + 1}
            </Button>
          ))}
        <Button
          onClick={() => setQnaPage(qnaPage + 1)}
          disabled={qnaPage === numPages}
        >
          &gt;
        </Button>
      </Nav>
    </>
  );
}

export default QnaPagination;
