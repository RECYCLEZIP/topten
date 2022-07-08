import React, { useEffect, useState } from "react";

import MapContent from "../../components/MapContent";

import { RobotType } from "../../types/Robot";

import { getData } from "../../api";

import {
  RobotState,
  RobotSelectedState,
  selectedMarkerState,
} from "../../stores/atoms";
import { useRecoilValue, useSetRecoilState, useRecoilState } from "recoil";

import AiResultMapList from "./AiResultMapList";

import { AiContentTitle, DetailTitle } from "../../styles/aiStyles/AiStyle";
import {
  MapTitleContainer,
  MapContainer,
  ErrorContainer,
  MapLoading,
  ResultNotice,
} from "../../styles/aiStyles/AiResultStyle";

function AiResultMap() {
  const [robot, setRobot] = useRecoilState<RobotType[]>(RobotState);

  const robots = useRecoilValue(RobotState);
  const setSelectedMarker = useSetRecoilState(selectedMarkerState);
  const [robotSelected, setRobotSelected] = useRecoilState(RobotSelectedState);

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
    if (longitude !== 0 && latitude !== 0) {
      try {
        const res = await getData(`robot?x=${longitude}&y=${latitude}`);

        setRobot(res.data);
      } catch (err: any) {
        setError(err?.response?.data?.message);
      }
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
      <ResultNotice>새 돈 줄게 헌 쓰레기 다오</ResultNotice>
      <MapTitleContainer>
        <AiContentTitle>근처 순환자원 회수로봇</AiContentTitle>
        <div>
          <DetailTitle
            href="https://www.superbin.co.kr/new/contents/product.php"
            target="_blank"
            click={true}
          >
            순환자원 회수로봇이란?
          </DetailTitle>
        </div>
      </MapTitleContainer>
      <div>
        <DetailTitle click={false}>
          현위치 반경 10km 범위의 순환자원 회수로봇입니다.
        </DetailTitle>
      </div>
      {error ? (
        <ErrorContainer>{error}</ErrorContainer>
      ) : (
        <>
          {longitude === 0 || latitude === 0 ? (
            <MapLoading>근처의 회수로봇을 찾고 있습니다.</MapLoading>
          ) : (
            <MapContainer>
              <MapContent
                type="robot"
                props={robots}
                propsSelected={robotSelected}
                setSelectedMarker={setSelectedMarker}
                setPropsSelected={setRobotSelected}
                currentLon={longitude}
                currentLat={latitude}
              ></MapContent>
              <AiResultMapList />
            </MapContainer>
          )}
        </>
      )}
    </>
  );
}

export default AiResultMap;
