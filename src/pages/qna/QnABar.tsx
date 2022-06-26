import React, { useState, useEffect } from "react";

import { getData } from "../../api";

import { useRecoilState, useResetRecoilState } from "recoil";
import {
  QnAListState,
  QnASearchState,
  QnASearchValueState,
} from "../../stores/atoms";

import {
  BarSection,
  BarText,
  BarRedText,
  SearchContainer,
  SearchInput,
} from "../../styles/qnaStyles/QnAStyle";

function QnABar() {
  const [qnaAllList, setQnaAllList] = useRecoilState(QnAListState);
  const [qnaSearchList, setQnaSearchList] = useRecoilState(QnASearchState);

  const [searchValue, setSearchValue] =
    useRecoilState<string>(QnASearchValueState);

  const resetQnASearch = useResetRecoilState(QnASearchState);

  const getList = async () => {
    try {
      await getData(`posts`).then((res) => setQnaAllList(res.data));
    } catch (err) {
      console.log(err);
    }
  };

  const onSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const onKeyPressEnter = (e: any) => {
    // 엔터키가 눌렸을 때
    if (e.key === "Enter") {
      if (searchValue !== "") {
        // 검색어 있을 시
        const searchResult = qnaAllList.filter((qna) => {
          console.log(searchValue);
          return qna.title.includes(searchValue);
        });

        console.log(searchResult);
        setQnaSearchList(searchResult);
      } else {
        // 검색어 없을 시
        console.log("검색어 없음");
        resetQnASearch();
        // setQnaSearchList(null);
      }
    }
  };

  useEffect(() => {
    getList();
    // enterkey();
  }, []);

  return (
    <BarSection>
      {/* <div> */}
      <BarText>
        전체 <BarRedText>{qnaAllList.length}</BarRedText>건
      </BarText>
      <BarText>
        페이지 <BarRedText>1</BarRedText>
        /32
      </BarText>
      {/* </div> */}
      <SearchContainer>
        {/* <SearchWrapper> */}
        <SearchInput
          id="search"
          type="text"
          placeholder="검색어를 입력해주세요."
          value={searchValue}
          onKeyPress={onKeyPressEnter}
          // onKeyPress={if( event.keyCode==13 ){addFunc();}}
          onChange={onSearchChange}
        ></SearchInput>
        {/* </SearchWrapper> */}
      </SearchContainer>
    </BarSection>
  );
}

export default QnABar;
