import React, { useState, useEffect } from "react";

import { getData } from "../../api";

import { useRecoilState } from "recoil";
import { QnAListState } from "../../stores/atoms";

import {
  BarSection,
  BarText,
  BarRedText,
} from "../../styles/qnaStyles/QnAStyle";

function QnABar() {
  const [qnaList, setQnaList] = useRecoilState(QnAListState);

  const getList = async () => {
    try {
      await getData(`posts`).then((res) => setQnaList(res.data));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getList();
  }, []);

  return (
    <BarSection>
      <BarText>
        전체 <BarRedText>{qnaList.length}</BarRedText>건
      </BarText>
      <BarText>
        페이지 <BarRedText>1</BarRedText>
        /32
      </BarText>
    </BarSection>
  );
}

export default QnABar;
