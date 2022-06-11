import React, { useMemo } from "react";

import { useRecoilValue, useRecoilState } from "recoil";
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
  const [bintSelected, setBinSelected] = useRecoilState(BinSelectedState);
  const [selectedMarker, setSelectedMarker] =
    useRecoilState(selectedMarkerState);

  const onClickBin = (lat: number | undefined, lng: number | undefined) => {
    console.log(lat, lng);
    setBinSelected([lat, lng]);
  };

  const selectedBinInform: BinTypes | undefined = useMemo(() => {
    return bins.find(
      (bin) => selectedMarker.La === bin.lng && selectedMarker.Ma === bin.lat,
    );
  }, [selectedMarker]);

  const onClickBack = () => {
    setSelectedMarker({ La: 0, Ma: 0 });
  };

  return (
    <MapBinListContainer>
      {selectedMarker.La === 0 ? (
        bins.map((bin) => (
          <MapBinLocationContainer onClick={() => onClickBin(bin.lat, bin.lng)}>
            <MapBinLacationTitle>{bin.title}</MapBinLacationTitle>
            <MapBinLacationDes>{bin.point}</MapBinLacationDes>
          </MapBinLocationContainer>
        ))
      ) : (
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
