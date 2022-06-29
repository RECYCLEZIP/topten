import React, { useEffect, useState } from "react";

import MapContent from "../../components/MapContent";

import { RobotType } from "../../types/Robot";

import { getData } from "../../api";

import {
  RobotState,
  BinSelectedState,
  selectedMarkerState,
} from "../../stores/atoms";
import { useRecoilValue, useSetRecoilState, useRecoilState } from "recoil";

import AiResultMapList from "./AiResultMapList";

import { AiContentTitle, DetailTitle } from "../../styles/aiStyles/AiStyle";
import {
  MapTitleContainer,
  MapContainer,
  ErrorContainer,
} from "../../styles/aiStyles/AiResultStyle";

function AiResultMap() {
  const [robot, setRobot] = useRecoilState<RobotType[]>(RobotState);

  const robots = useRecoilValue(RobotState);
  const robotSelected = useRecoilValue(BinSelectedState);
  const setSelectedMarker = useSetRecoilState(selectedMarkerState);
  const setRobotSelected = useSetRecoilState(BinSelectedState);

  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);

  const [error, setError] = useState();

  // 사용자 위치 정보 - Geolocation
  const success = ({ coords }: GeolocationPosition) => {
    setLatitude(coords.latitude); // 위도
    setLongitude(coords.longitude); // 경도
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

    try {
      const res = await getData(
        // 서울시 영등포구 선유로 롯데마트(mock)
        // `robot?x=126.89196610216352&y=37.52606733350417`,
        `robot?x=${longitude}&y=${latitude}`,
        // `robots?search=${"종로구"}&category=${roadsValue}?page=${page}&limit=2`,
      );

      setRobot(res.data);
    } catch (e: any) {
      console.log(e);
      setError(e?.response?.data?.message);
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
      <MapTitleContainer>
        <AiContentTitle>근처 순환자원 회수로봇</AiContentTitle>
        <DetailTitle
          onClick={() =>
            window.open(
              "https://www.superbin.co.kr/new/contents/product.php",
              "_blank",
            )
          }
          click={true}
        >
          순환자원 회수로봇이란?
        </DetailTitle>
      </MapTitleContainer>
      <DetailTitle click={false}>
        현위치 반경 10km 범위의 순환자원 회수로봇입니다.
      </DetailTitle>
      {error ? (
        <ErrorContainer>{error}</ErrorContainer>
      ) : (
        <MapContainer>
          <MapContent
            type="robot"
            props={robots}
            propsSelected={robotSelected}
            setSelectedMarker={setSelectedMarker}
            setPropsSelected={setRobotSelected}
            // currentLon={126.89196610216352}
            // currentLat={37.52606733350417}
            currentLon={longitude}
            currentLat={latitude}
          ></MapContent>
          <AiResultMapList />
        </MapContainer>
      )}
    </>
  );
}

export default AiResultMap;
