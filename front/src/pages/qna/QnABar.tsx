import React, { useState, useEffect, useRef } from "react";

import { getData } from "../../api";

import { useRecoilState } from "recoil";
import {
  QnAListState,
  QnASearchValueState,
  QnANumPagesState,
  QnALengthState,
} from "../../stores/atoms";

import { QnAPageType } from "../../types/QnA";

import {
  BarSection,
  BarText,
  BarRedText,
  SearchContainer,
  SearchSelect,
  SearchInput,
  BarInfo,
} from "../../styles/qnaStyles/QnAStyle";
import { customToastify } from "../../components/customToastify";

function QnABar({ qnaPage }: QnAPageType) {
  const [qnaList, setQnaList] = useRecoilState(QnAListState);

  const [searchSelect, setSearchSelect] = useState("title");

  const [searchValue, setSearchValue] =
    useRecoilState<string>(QnASearchValueState);

  const [numPages, setNumPages] = useRecoilState(QnANumPagesState);

  const [qnaTotal, setQnaTotal] = useRecoilState(QnALengthState);

  const inputFocus: any = useRef();

  const getList = async () => {
    try {
      await getData(
        `posts?search=${searchValue}&type=${searchSelect}&pageno=${qnaPage}&limit=10`,
      ).then((res) => {
        setQnaList(res.data?.data);
        setQnaTotal(res.data?.count);
      });
    } catch (err: any) {
      customToastify("error", err?.response?.data?.message);
    }
  };

  const onChangeSelect: React.ChangeEventHandler<HTMLSelectElement> = (e) => {
    setSearchSelect(e.target.value);
  };

  const onSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const onKeyPressEnter: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    // 엔터키가 눌렸을 때
    if (e.key === "Enter") {
      getList();

      inputFocus.current.blur();
    }
  };

  useEffect(() => {
    getList();
  }, [qnaPage]);

  return (
    <BarSection>
      <BarInfo>
        <BarText>
          전체 <BarRedText>{qnaTotal}</BarRedText>건
        </BarText>
        <BarText>
          페이지 <BarRedText>{qnaPage}</BarRedText>/{numPages}
        </BarText>
      </BarInfo>
      <SearchContainer>
        <SearchSelect onChange={onChangeSelect}>
          <option value="title">제목</option>
          <option value="content">내용</option>
          <option value="all">제목+내용</option>
        </SearchSelect>
        <SearchInput
          id="search"
          type="text"
          placeholder="검색어를 입력해주세요."
          value={searchValue}
          onKeyPress={onKeyPressEnter}
          onChange={onSearchChange}
          ref={inputFocus}
        ></SearchInput>
      </SearchContainer>
    </BarSection>
  );
}

export default QnABar;
