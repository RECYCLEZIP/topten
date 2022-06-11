import React, { useMemo } from "react";

import { useRecoilValue, useSetRecoilState, useResetRecoilState } from "recoil";
import {
  BinTypes,
  BinState,
  BinSelectedState,
  selectedMarkerState,
} from "../../stores/atoms";

import {
  MapBinListContainer,
  MapBinLocationContainer,
  MapBinLacationTitle,
  MapBinLacationDes,
  BackWrapper,
} from "../../styles/mapStyles/mapStyle";

function MapList() {
  const bins = useRecoilValue(BinState);
  const setBinSelected = useSetRecoilState(BinSelectedState);
  const selectedMarker = useRecoilValue(selectedMarkerState);

  // 리스트에서 항목 click 시 해당 항목의 좌표 저장
  const onClickBin = (lat: number | undefined, lng: number | undefined) => {
    setBinSelected([lat, lng]);
  };

  // 지도에서 선택된 마커의 좌표가 어떤 쓰레기통인지 찾아서 해당 정보 저장
  const selectedBinInform: BinTypes | undefined = useMemo(() => {
    return bins.find(
      (bin) => selectedMarker.La === bin.lng && selectedMarker.Ma === bin.lat,
    );
  }, [selectedMarker]);

  // 이전으로 클릭 시 선택한 마커 default 값으로 변경
  const onClickBack = useResetRecoilState(selectedMarkerState);

  return (
    <MapBinListContainer>
      {/* 지도에서 선택된 마커가 없다면 전체 리스트 띄움 */}
      {selectedMarker.La === 0 ? (
        bins.map((bin) => (
          <MapBinLocationContainer onClick={() => onClickBin(bin.lat, bin.lng)}>
            <MapBinLacationTitle>{bin.title}</MapBinLacationTitle>
            <MapBinLacationDes>{bin.point}</MapBinLacationDes>
          </MapBinLocationContainer>
        ))
      ) : (
        // 지도에서 선택된 마커가 있다면 해당 마커의 쓰레기통 정보만 띄움
        <>
          <BackWrapper onClick={onClickBack}>이전으로</BackWrapper>
          <MapBinLocationContainer
            onClick={() =>
              onClickBin(selectedBinInform?.lat, selectedBinInform?.lng)
            }
          >
            <MapBinLacationTitle>
              {selectedBinInform?.title}
            </MapBinLacationTitle>
            <MapBinLacationDes>{selectedBinInform?.point}</MapBinLacationDes>
          </MapBinLocationContainer>
        </>
      )}
    </MapBinListContainer>
  );
}

export default MapList;
