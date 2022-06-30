import React, { useEffect, useState } from "react";

import { useRecoilState } from "recoil";
import { AiResultState } from "../../stores/atoms";

import { getData } from "../../api";

import { AiContentTitle } from "../../styles/aiStyles/AiStyle";

import AiResultMap from ".//AiResultMap";

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
  ErrorContainer,
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

  const getTrashInfo = async () => {
    try {
      await getData(
        `trash?search=${
          result?.title === "페트병" ? "투명 페트병" : result?.title
        }`,
      ).then((res) => {
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
      {result?.message ? (
        <ErrorContainer>분석 결과가 없습니다.</ErrorContainer>
      ) : (
        <>
          <AiResultSubjectSection>
            <AiResultSubjectName>{result?.title}</AiResultSubjectName>
            <AiResultSubjectTexture>{result?.kind}</AiResultSubjectTexture>
          </AiResultSubjectSection>
          <AiResultContentsSection>
            <>
              {result?.section?.map((prop) => (
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
          </AiResultContentsSection>
          <div>
            <ListContainer>
              <>
                {result?.throwAway?.map((prop) => (
                  <List>{prop}</List>
                ))}
              </>
            </ListContainer>
            <div>
              <AiContentTitle>버리는 법</AiContentTitle>
            </div>
            <AiResultDesContainer>
              {trashInfo &&
                trashInfo[0]?.description?.throwAway?.map((prop) => (
                  <List>{prop}</List>
                ))}
            </AiResultDesContainer>
          </div>
          <div>
            <AiResultMap />
          </div>
        </>
      )}
    </>
  );
}

export default AiResult;
