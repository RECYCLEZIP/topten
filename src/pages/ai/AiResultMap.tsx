import React, { useEffect, useState } from "react";

import MapTest from "../../components/MapTest";
import {
  RobotState,
  BinSelectedState,
  selectedMarkerState,
  lastIntersectingImageState,
} from "../../stores/atoms";

import { RobotType } from "../../types/Robot";

import { getData } from "../../api";

import { useRecoilValue, useSetRecoilState, useRecoilState } from "recoil";

import { AiContentTitle, DetailTitle } from "../../styles/aiStyles/AiStyle";
import { MapBinSection } from "../../styles/mapStyles/mapStyle";

function AiResultMap() {
  const [robot, setRobot] = useRecoilState<RobotType[]>(RobotState);

  const robots = useRecoilValue(RobotState);
  const robotSelected = useRecoilValue(BinSelectedState);
  const setSelectedMarker = useSetRecoilState(selectedMarkerState);
  const setRobotSelected = useSetRecoilState(BinSelectedState);

  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);

  const [error, setError] = useState();

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
  const success = ({ coords, timestamp }: GeolocationPosition) => {
    // console.log(coords)
    setLatitude(coords.latitude); // 위도
    setLongitude(coords.longitude); // 경도

    console.log(coords.latitude); // 위도

    // const latitude = coords.latitude; // 위도
    // const longitude = coords.longitude; // 경도

    // console.log(
    //   `위도: ${latitude}, 경도: ${longitude}, 위치 반환 시간: ${timestamp}`,
    // );
  };

  const getUserLocation = () => {
    if (!navigator.geolocation) {
      throw "위치 정보가 지원되지 않습니다.";
    }
    navigator.geolocation.getCurrentPosition(success);

    // 실시간 위치
    // navigator.geolocation.watchPosition(success);
  };

  const getRobots = async () => {
    console.log("fetching 함수 호출됨");

    console.log(latitude);

    try {
      const res = await getData(
        // 서울시 영등포구 선유로 롯데마트
        // `robot?x=126.89196610216352&y=37.52606733350417`,
        `robot?x=${longitude}&y=${latitude}`,
        // `robots?search=${"종로구"}&category=${roadsValue}?page=${page}&limit=2`,
      );

      // console.log(res.data);
      setRobot(res.data);
      // mock.map((prop) => console.log(prop.x));

      // setBin(mock);
      // console.log(mock);
    } catch (e: any) {
      console.log(e);
      setError(e.response.data.message);
    }
  };

  useEffect(() => {
    getUserLocation();
  }, []);

  useEffect(() => {
    getRobots();
  }, [latitude, longitude]);

  return (
    <>
      <AiContentTitle>근처 순환자원 회수로봇</AiContentTitle>
      <DetailTitle>* 순환자원 회수로봇이란?</DetailTitle>
      {error ? (
        <span>{error}</span>
      ) : (
        <MapTest
          type="robot"
          props={robots}
          propsSelected={robotSelected}
          setSelectedMarker={setSelectedMarker}
          setPropsSelected={setRobotSelected}
        ></MapTest>
      )}
    </>
  );
}

export default AiResultMap;
