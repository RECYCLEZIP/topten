import React, { useEffect } from "react";

import MapTest from "../../components/MapTest";
import {
  BinTypes,
  BinState,
  BinSelectedState,
  selectedMarkerState,
  SearchBinState,
  RegionValueState,
  RoadsValueState,
  lastIntersectingImageState,
} from "../../stores/atoms";

import { getData } from "../../api";

import { useRecoilValue, useSetRecoilState, useRecoilState } from "recoil";

import { AiContentTitle, DetailTitle } from "../../styles/aiStyles/AiStyle";

function AiResultMap() {
  const [bin, setBin] = useRecoilState<BinTypes[]>(BinState);

  const bins = useRecoilValue(BinState);
  const binSelected = useRecoilValue(BinSelectedState);
  const setSelectedMarker = useSetRecoilState(selectedMarkerState);
  const setBinSelected = useSetRecoilState(BinSelectedState);

  const [roadsValue, setRoadsValue] = useRecoilState(RoadsValueState);

  const mock = [
    // {
    //   region: "종로구",
    //   roads: "자하문로",
    //   details: "자하문로1길 26",
    //   points: "상가지역",
    //   address: "서울 종로구 자하문로1길 26",
    //   type: ["담배꽁초"],
    //   x: "126.9709050229",
    //   y: "37.5764804046",
    // },
    {
      region: "종로구",
      roads: "자하문로",
      details: "자하문로1길 26",
      points: "상가지역",
      address: "서울 종로구 자하문로1길 26",
      type: ["담배꽁초"],
      x: "127.48664541124994",
      y: "36.61000122003257",
    },
    {
      region: "종로구",
      roads: "자하문로",
      details: "자하문로1길 26",
      points: "상가지역",
      address: "서울 종로구 자하문로1길 26",
      type: ["담배꽁초"],
      x: "127.4836135996746",
      y: "36.60777875406189",
    },
    {
      region: "종로구",
      roads: "자하문로",
      details: "자하문로1길 26",
      points: "상가지역",
      address: "서울 종로구 자하문로1길 26",
      type: ["담배꽁초"],
      x: "127.4881296468771",
      y: "36.607850454823506",
    },
  ];

  // 사용자 위치 정보 - Geolocation
  function success({ coords, timestamp }: GeolocationPosition) {
    // console.log(coords)
    const latitude = coords.latitude; // 위도
    const longitude = coords.longitude; // 경도

    console.log(
      `위도: ${latitude}, 경도: ${longitude}, 위치 반환 시간: ${timestamp}`,
    );
  }

  function getUserLocation() {
    if (!navigator.geolocation) {
      throw "위치 정보가 지원되지 않습니다.";
    }
    navigator.geolocation.getCurrentPosition(success);

    // 실시간 위치
    // navigator.geolocation.watchPosition(success);
  }

  const getBins = async () => {
    console.log("fetching 함수 호출됨");

    try {
      //   const res = await getData(
      //     `bins?search=${"종로구"}&category=${roadsValue}`,
      //     // `bins?search=${"종로구"}&category=${roadsValue}?page=${page}&limit=2`,
      //   );
      // console.log(res.data);
      //   setBin(res.data);
    //   mock.map((prop) => console.log(prop.x));

      setBin(mock);
      console.log(mock);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getUserLocation();
    getBins();
  }, []);

  return (
    <>
      <AiContentTitle>근처 순환자원 회수로봇</AiContentTitle>
      <DetailTitle>* 순환자원 회수로봇이란?</DetailTitle>
      <MapTest
        type="ai"
        props={bins}
        propsSelected={binSelected}
        setSelectedMarker={setSelectedMarker}
        setPropsSelected={setBinSelected}
      ></MapTest>
    </>
  );
}

export default AiResultMap;
