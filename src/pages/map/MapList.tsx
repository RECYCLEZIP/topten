import React, { useMemo, useEffect } from "react";

import { useRecoilValue, useRecoilState, useResetRecoilState } from "recoil";
import {
  BinTypes,
  BinState,
  SearchBinState,
  BinSelectedState,
  selectedMarkerState,
  RegionValueState,
  RoadsValueState,
} from "../../stores/atoms";

import {
  MapBinListContainer,
  MapBinDatailsContainer,
  MapBinLacationTitle,
  MapBinLacationDes,
  TypeContainer,
  BackWrapper,
  BackButton,
} from "../../styles/mapStyles/mapStyle";

function MapList() {
  const bins = useRecoilValue(BinState);
  const [binSelected, setBinSelected] = useRecoilState(BinSelectedState);
  const selectedMarker = useRecoilValue(selectedMarkerState);

  const regionValue = useRecoilValue(RegionValueState);
  const roadsValue = useRecoilValue(RoadsValueState);

  const [searchBins, setSearchBins] = useRecoilState(SearchBinState);
  const resetRoadsValue = useResetRecoilState(RoadsValueState);

  useEffect(() => {
    // 구 선택 변경 시 도로 선택 리셋
    resetRoadsValue();
  }, [regionValue]);

  useEffect(() => {
    if (roadsValue !== "") {
      setSearchBins(bins.filter((bin) => bin.roads === roadsValue));
    } else if (regionValue !== "") {
      setSearchBins(bins.filter((bin) => bin.region === regionValue));
    } else {
      setSearchBins([...bins]);
    }
  }, [bins, regionValue, roadsValue]);

  // 리스트에서 항목 click 시 해당 항목의 좌표 저장
  const onClickBin = (x: string | undefined, y: string | undefined) => {
    setBinSelected([x, y]);
  };

  // 지도에서 선택된 마커의 좌표가 어떤 쓰레기통인지 찾아서 해당 정보 저장
  const selectedBinInform: BinTypes | undefined = useMemo(() => {
    return bins.find(
      (bin) =>
        selectedMarker.Ma === Number(bin.y) &&
        selectedMarker.La === Number(bin.x),
    );
  }, [selectedMarker]);

  // 이전으로 클릭 시 선택한 마커 default 값으로 변경
  const onClickBack = useResetRecoilState(selectedMarkerState);

  return (
    <>
      <MapBinListContainer>
        {/* 지도에서 선택된 마커가 없다면 전체 리스트 띄움 */}
        {selectedMarker.La === 0 ? (
          searchBins?.map((bin, index) => (
            <MapBinDatailsContainer
              onClick={() => onClickBin(bin?.x, bin?.y)}
              key={index}
            >
              <MapBinLacationTitle key={`title-${index}`}>
                {bin?.details}
              </MapBinLacationTitle>
              <MapBinLacationDes key={`sub-${index}`}>
                {bin?.points}
              </MapBinLacationDes>
              <>
                {bin?.type.map((type, idx) => (
                  <TypeContainer key={`type-${index}-${idx}`}>
                    {type}
                  </TypeContainer>
                ))}
              </>
            </MapBinDatailsContainer>
          ))
        ) : (
          // 지도에서 선택된 마커가 있다면 해당 마커의 쓰레기통 정보만 띄움
          <>
            <MapBinDatailsContainer
              onClick={() =>
                onClickBin(selectedBinInform?.x, selectedBinInform?.y)
              }
            >
              <MapBinLacationTitle>
                {selectedBinInform?.details}
              </MapBinLacationTitle>
              <MapBinLacationDes>{selectedBinInform?.points}</MapBinLacationDes>
              <>
                {selectedBinInform?.type.map((type) => (
                  <TypeContainer>{type}</TypeContainer>
                ))}
              </>
            </MapBinDatailsContainer>
            <BackWrapper onClick={onClickBack}>
              <BackButton>이전으로</BackButton>
            </BackWrapper>
          </>
        )}
      </MapBinListContainer>
    </>
  );
}

export default MapList;
