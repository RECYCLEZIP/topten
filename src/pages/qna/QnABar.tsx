import React, { useState, useEffect } from "react";

import { getData } from "../../api";

import { useRecoilState, useResetRecoilState } from "recoil";
import {
  QnAListState,
  QnASearchState,
  QnASearchValueState,
  QnAPageState,
  QnANumPagesState,
  QnALengthState,
} from "../../stores/atoms";

import {
  BarSection,
  BarText,
  BarRedText,
  SearchContainer,
  SearchSelect,
  SearchInput,
} from "../../styles/qnaStyles/QnAStyle";
import { customToastify } from "../../components/customToastify";

function QnABar() {
  const [qnaAllList, setQnaAllList] = useRecoilState(QnAListState);
  const [qnaSearchList, setQnaSearchList] = useRecoilState(QnASearchState);

  const [searchSelect, setSearchSelect] = useState("title");

  const [searchValue, setSearchValue] =
    useRecoilState<string>(QnASearchValueState);

  const resetQnASearch = useResetRecoilState(QnASearchState);

  const [qnaPage, setQnaPage] = useRecoilState(QnAPageState);
  const [numPages, setNumPages] = useRecoilState(QnANumPagesState);

  const [off, setOff] = useState<string>("");

  const [qnaTotal, setQnaTotal] = useRecoilState(QnALengthState);

  const getList = async () => {
    try {
      await getData(`posts?search=&page=${off}&limit=10`).then((res) => {
        setQnaAllList(res.data?.data);
        setQnaTotal(res.data?.count);
      });
    } catch (err) {
      console.log(err);
    }
  };

  const onChangeSelect = (e: any) => {
    setSearchSelect(e.target.value);
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
          console.log(qna);

          if (searchSelect === "title") {
            return qna.title.includes(searchValue);
          } else if (searchSelect === "content") {
            return qna.content.includes(searchValue);
          } else if (searchSelect === "all") {
            return (
              qna.title.includes(searchValue) ||
              qna.content.includes(searchValue)
            );
          }
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
  }, [off]);

  useEffect(() => {
    // setOff(qnaAllList[qnaTotal - 1]._id);
    // console.log(qnaAllList);
    // console.log(qnaTotal)
    setOff(qnaAllList[qnaAllList?.length - 1]?._id);
    // console.log('바뀜')
    // getList();
  }, [qnaPage]);

  return (
    <BarSection>
      {/* <div> */}
      <BarText>
        전체 <BarRedText>{qnaTotal}</BarRedText>건
      </BarText>
      <BarText>
        페이지 <BarRedText>{qnaPage}</BarRedText>/{numPages}
      </BarText>
      <SearchContainer>
        <SearchSelect onChange={onChangeSelect}>
          <option value="title" selected={true}>
            제목
          </option>
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
        ></SearchInput>
      </SearchContainer>
    </BarSection>
  );
}

export default QnABar;
