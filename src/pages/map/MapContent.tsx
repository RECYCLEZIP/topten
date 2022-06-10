import React, { useEffect } from "react";

import { useRecoilValue } from "recoil";
import { BinState, BinSelectedState } from "../../stores/atoms";

import { MapBinMapWrapper } from "../../styles/mapStyles/mapStyle";

declare global {
  interface Window {
    kakao: any;
    map: any;
  }
}

function MapContent() {
  const bins = useRecoilValue(BinState);
  const binSelected = useRecoilValue(BinSelectedState);

  useEffect(() => {
    mapLoad();
  }, [bins]);

  useEffect(() => {
    panTo();
  }, [binSelected]);

  // 지도 띄우기 - 다중 마커
  const mapLoad = () => {
    let container = document.getElementById("map");

    let options = {
      // 지도 중심좌표
      center: new window.kakao.maps.LatLng(
        37.624915253753194,
        127.15122688059974,
      ),
      // 지도 확대 레벨. 숫자 클수록 범위 넓어짐
      level: 5,
    };

    window.map = new window.kakao.maps.Map(container, options);

    // 지도 줌 컨트롤
    var zoomControl = new window.kakao.maps.ZoomControl();
    window.map.addControl(zoomControl, window.kakao.maps.ControlPosition.RIGHT);

    bins.forEach((bin) => {
      // 마커를 생성합니다
      new window.kakao.maps.Marker({
        //마커가 표시 될 지도
        map: window.map,
        //마커가 표시 될 위치
        position: new window.kakao.maps.LatLng(bin.lat, bin.lng),
        //마커에 hover시 나타날 title
        title: bin.title,
      });
    });
  };

  // 지도 이동
  const panTo = () => {
    // 이동할 위도 경도 위치 생성
    var moveLatLon = new window.kakao.maps.LatLng(binSelected[0], binSelected[1]);

    // 지도 중심 부드럽게 이동, 줌 인
    window.map.panTo(moveLatLon);
    window.map.setLevel(3)
  };

  return (
    <>
      <MapBinMapWrapper id="map"></MapBinMapWrapper>
    </>
  );
}

export default MapContent;
