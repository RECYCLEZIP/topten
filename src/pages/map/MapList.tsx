import React from "react";

import {
  MapBinListContainer,
  MapBinLocationContainer,
  MapBinLacationTitle,
  MapBinLacationDes,
} from "../../styles/mapStyles/mapStyle";

function MapList() {
  return (
    <MapBinListContainer>
      <MapBinLocationContainer>
        <MapBinLacationTitle>서울시 경복궁역 4번 출구</MapBinLacationTitle>
        <MapBinLacationDes>지하철역 입구</MapBinLacationDes>
      </MapBinLocationContainer>
      <MapBinLocationContainer>
        <MapBinLacationTitle>서울시 경복궁역 4번 출구</MapBinLacationTitle>
        <MapBinLacationDes>지하철역 입구</MapBinLacationDes>
      </MapBinLocationContainer>
      <MapBinLocationContainer>
        <MapBinLacationTitle>서울시 경복궁역 4번 출구</MapBinLacationTitle>
        <MapBinLacationDes>지하철역 입구</MapBinLacationDes>
      </MapBinLocationContainer>
    </MapBinListContainer>
  );
}

export default MapList;
