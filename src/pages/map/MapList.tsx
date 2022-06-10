import React from "react";

import { useRecoilValue, useRecoilState } from "recoil";
import {
  BinState,
  BinSelectedState,
} from "../../stores/atoms";

import {
  MapBinListContainer,
  MapBinLocationContainer,
  MapBinLacationTitle,
  MapBinLacationDes,
} from "../../styles/mapStyles/mapStyle";

function MapList() {
  const bins = useRecoilValue(BinState);
  const [bintSelected, setBinSelected] = useRecoilState(BinSelectedState);
  //   const [bintSelected, setBinSelected] =
  //     useRecoilState<BinSelectedTypes[]>(BinSelectedState);

  const onClickBin = (lat: number, lng: number) => {
    console.log(lat, lng);
    setBinSelected([lat, lng]);
  };

  return (
    <MapBinListContainer>
      {bins.map((bin) => (
        <MapBinLocationContainer onClick={() => onClickBin(bin.lat, bin.lng)}>
          <MapBinLacationTitle>{bin.title}</MapBinLacationTitle>
          <MapBinLacationDes>{bin.point}</MapBinLacationDes>
        </MapBinLocationContainer>
      ))}
    </MapBinListContainer>
  );
}

export default MapList;
