import React, { useEffect, useState } from "react";

import { useRecoilState } from "recoil";
import { AiResultState } from "../../stores/atoms";

import { getData } from "../../api";

import { TrashType } from "../../types/Trash";

import { AiContentTitle, AiContentText } from "../../styles/aiStyles/AiStyle";

import AiResultMap from ".//AiResultMap";
import AiResultMapList from "./AiResultMapList";

import {
  AiResultSubjectSection,
  AiResultSubjectName,
  AiResultSubjectTexture,
  AiResultContentsSection,
  AiResultSummaryContainer,
  AiResultSummaryTitleWrapper,
  AiResultSummaryDesWrapper,
  AiResultDesContainer,
  ListContainer,
  List,
} from "../../styles/aiStyles/AiResultStyle";

function AiResult() {
  type trashInfoType = [
    {
      description: {
        throwAway: string[];
      };
    },
  ];

  const [result, setResult] = useRecoilState(AiResultState);
  const [trashInfo, setTrashInfo] = useState<trashInfoType>();

  useEffect(() => {
    setResult({
      title: "페트병",
      kind: "플라스틱",
      section: [
        {
          title: "라벨",
          score: 0,
        },
        {
          title: "뚜껑",
          score: 70,
        },
      ],
      throwAway: [
        "내용물을 비운 뒤 세척",
        "부착 상표 등을 제거 후 일반 쓰레기에 버리기",
      ],
    });
  }, []);

  const getTrashInfo = async () => {
    const word = "투명 페트병";

    try {
      await getData(`trash?search=${word}`).then((res) => {
        setTrashInfo(res.data);
      });
    } catch {
      console.log("Error: data get request fail");
    }
  };

  useEffect(() => {
    getTrashInfo();
  }, []);

  return (
    <>
      <AiResultSubjectSection>
        <AiResultSubjectName>{result?.title}</AiResultSubjectName>
        <AiResultSubjectTexture>{result?.kind}</AiResultSubjectTexture>
      </AiResultSubjectSection>
      <AiResultContentsSection>
        <>
          {result?.section.map((prop) => (
            <AiResultSummaryContainer>
              <AiResultSummaryTitleWrapper>
                {prop?.title}
              </AiResultSummaryTitleWrapper>
              <AiResultSummaryDesWrapper>
                {prop?.score}%
              </AiResultSummaryDesWrapper>
            </AiResultSummaryContainer>
          ))}
        </>
        {/* <AiResultSummaryContainer>
          <AiResultSummaryTitleWrapper>분석1</AiResultSummaryTitleWrapper>
          <AiResultSummaryDesWrapper>분석 내용1</AiResultSummaryDesWrapper>
        </AiResultSummaryContainer>
        <AiResultSummaryContainer>
          <AiResultSummaryTitleWrapper>분석1</AiResultSummaryTitleWrapper>
          <AiResultSummaryDesWrapper>분석 내용1</AiResultSummaryDesWrapper>
        </AiResultSummaryContainer>
        <AiResultSummaryContainer>
          <AiResultSummaryTitleWrapper>분석1</AiResultSummaryTitleWrapper>
          <AiResultSummaryDesWrapper>분석 내용1</AiResultSummaryDesWrapper>
        </AiResultSummaryContainer> */}
      </AiResultContentsSection>
      <div>
        <ListContainer>
          <>
            {result?.throwAway.map((prop) => (
              <List>{prop}</List>
            ))}
          </>
        </ListContainer>
        <div>
          <AiContentTitle>버리는 법</AiContentTitle>
        </div>
        <AiResultDesContainer>
          <>{trashInfo && console.log(trashInfo[0]?.description.throwAway)}</>
          {trashInfo &&
            trashInfo[0]?.description?.throwAway.map((prop) => (
              <List>{prop}</List>
            ))}
        </AiResultDesContainer>
      </div>
      <div>
        <AiResultMap />
      </div>
    </>
  );
}

export default AiResult;
