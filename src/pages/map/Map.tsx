import React, { useEffect } from "react";

import MapSearch from "./MapSearch";
import MapContent from "./MapContent";
import MapList from "./MapList";

import { useRecoilState } from "recoil";
import { BinTypes, BinState } from "../../stores/atoms";

import {
  MapContainer,
  MapTop,
  MapTitle,
  MapBinSection,
} from "../../styles/mapStyles/mapStyle";

function Map() {
  const [bin, setBin] = useRecoilState<BinTypes[]>(BinState);

  // {
  //   자치구명    도로명 : ""
  //   세부 위치(상세 주소)     : ""
  //   설치 지점    : ""
  //   수거 쓰레기 종류(일반 쓰레기 / 재활용 쓰레기) : []
  //   x : ""
  //   y : ""
  // }

  // 목 데이터
  const markerData: Array<{
    gu: string;
    doro: string;
    location: string;
    spot: string;
    type: string[];
    x: string;
    y: string;
  }> = [
    {
      gu: "종로구",
      doro: "자하문로",
      location: "자하문로 28",
      spot: "지하철역 입구",
      type: ["일반"],
      y: "127.16017523675508",
      x: "37.62197524055062",
    },
    {
      gu: "종로구",
      doro: "자하문로",
      location: "자하문로 44",
      spot: "신호등 앞",
      type: ["일반"],
      y: "127.1583774403176",
      x: "37.620842424005616",
    },
    {
      gu: "성북구",
      doro: "보문로",
      location: "보문동주민센터 버스정류장 (08-183)",
      spot: "정류소(버스, 택시 등)",
      type: ["재활용"],
      y: "127.15122688059974",
      x: "37.624915253753194",
    },
    {
      gu: "성북구",
      doro: "보문로",
      location: "브라운호텔 버스정류장 (08-181). 우리은행",
      spot: "정류소(버스, 택시 등)",
      type: ["일반"],
      y: "127.15211256646381",
      x: "37.62456273069659",
    },
    {
      gu: "성북구",
      doro: "동소문로",
      location: "한성대입구역 분수광장",
      spot: "광장, 공원 등 다중집합장소",
      type: ["재활용"],
      y: "127.15211256646381",
      x: "37.62456273069659",
    },
    {
      gu: "성북구",
      doro: "아리랑로",
      location:
        " 성신여대입구역 마을버스정류장 (08-270). 베스트웨스턴 아리랑호텔",
      spot: "정류소(버스, 택시 등)",
      type: ["일반"],
      y: "127.15211256646381",
      x: "37.62456273069659",
    },
    {
      gu: "강북구",
      doro: "도봉로",
      location: "수유역 4번 출구 앞",
      spot: "지하철역 입구",
      type: ["일반"],
      y: "127.15211256646381",
      x: "37.62456273069659",
    },
    {
      gu: "강북구",
      doro: "한천로",
      location: "한천로 강북보건소 건너편",
      spot: "도로변(횡단보도 포함)",
      type: ["일반", "재활용", "담배"],
      y: "127.15211256646381",
      x: "37.62456273069659",
    },
  ];

  useEffect(() => {
    setBin(markerData);
  }, []);

  return (
    <MapContainer>
      <MapTop>
        <MapTitle>서울시 공공 쓰레기통</MapTitle>
        <MapSearch />
      </MapTop>
      <MapBinSection>
        <MapContent />
        <MapList />
      </MapBinSection>
    </MapContainer>
  );
}

export default Map;
