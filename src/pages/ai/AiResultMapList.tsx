import React, { useMemo } from "react";

import { useRecoilValue, useRecoilState, useResetRecoilState } from "recoil";
import {
  RobotState,
  RobotSelectedState,
  selectedMarkerState,
  lastIntersectingImageState,
} from "../../stores/atoms";

import { RobotType } from "../../types/Robot";

import {
  MapBinDatailsContainer,
  MapBinLacationTitle,
  MapBinLacationDes,
  BackWrapper,
  BackButton,
} from "../../styles/mapStyles/mapStyle";

import { AiMapListContainer } from "../../styles/aiStyles/AiResultStyle";

function AiResultMapList() {
  const robots = useRecoilValue(RobotState);
  const [robotSelected, setRobotSelected] = useRecoilState(RobotSelectedState);
  // const setRobotSelected = useSetRecoilState(RobotSelectedState);
  const selectedMarker = useRecoilValue(selectedMarkerState);

  const [lastIntersectingImage, setLastIntersectingImage] =
    useRecoilState<HTMLDivElement | null>(lastIntersectingImageState);

  // 리스트에서 항목 click 시 해당 항목의 좌표 저장
  const onClickBin = (x: number | undefined, y: number | undefined) => {
    setRobotSelected([x, y]);
  };

  // 지도에서 선택된 마커의 좌표가 어떤 쓰레기통인지 찾아서 해당 정보 저장
  const selectedBinInform: RobotType | undefined = useMemo(() => {
    return robots.find(
      (bin) =>
        selectedMarker.Ma ===
          Math.round(Number(bin.location.coordinates[1] * 10000000000)) /
            10000000000 &&
        selectedMarker.La ===
          Math.round(Number(bin.location.coordinates[0] * 10000000000)) /
            10000000000,
    );
  }, [selectedMarker]);

  // 이전으로 클릭 시 선택한 마커 default 값으로 변경
  const onClickBack = useResetRecoilState(selectedMarkerState);

  return (
    <AiMapListContainer>
      <MapBinDatailsContainer>
        {/* 지도에서 선택된 마커가 없다면 전체 리스트 띄움 */}
        {selectedMarker.La === 0 ? (
          robots?.map((bin, index) => (
            <>
              <MapBinDatailsContainer
                onClick={() =>
                  onClickBin(
                    bin?.location.coordinates[1],
                    bin?.location.coordinates[0],
                  )
                }
                key={index}
              >
                <MapBinLacationTitle>{bin?.name}</MapBinLacationTitle>
                <MapBinLacationDes>{bin?.address}</MapBinLacationDes>
              </MapBinDatailsContainer>
            </>
          ))
        ) : (
          // 지도에서 선택된 마커가 있다면 해당 마커의 쓰레기통 정보만 띄움
          <>
            <MapBinDatailsContainer
              onClick={() =>
                onClickBin(
                  selectedBinInform?.location.coordinates[1],
                  selectedBinInform?.location.coordinates[0],
                )
              }
            >
              <MapBinLacationTitle>
                {selectedBinInform?.address}
              </MapBinLacationTitle>
            </MapBinDatailsContainer>
            <BackWrapper onClick={onClickBack}>
              <BackButton>이전으로</BackButton>
            </BackWrapper>
          </>
        )}
      </MapBinDatailsContainer>
    </AiMapListContainer>
  );
}

export default AiResultMapList;
