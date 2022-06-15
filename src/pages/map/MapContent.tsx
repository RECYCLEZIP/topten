import React, { useEffect, useState } from "react";

import { useRecoilValue, useSetRecoilState } from "recoil";
import {
  BinState,
  BinSelectedState,
  selectedMarkerState,
} from "../../stores/atoms";

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
  const setSelectedMarker = useSetRecoilState(selectedMarkerState);

  useEffect(() => {
    // 렌더링 후 지도 띄우기
    mapLoad();
  }, [bins]);

  useEffect(() => {
    // 리스트에서 항목 선택 시 해당 항목으로 지도 이동
    panTo();
  }, [binSelected]);

  // 지도 띄우기 - 다중 마커
  const mapLoad = () => {
    // 지도 띄울 element
    let container = document.getElementById("map");

    let options = {
      // 지도 중심좌표
      center: new window.kakao.maps.LatLng(
        37.624915253753194,
        127.15122688059974,
      ),
      // 지도 확대 레벨. 숫자 클수록 멀어짐
      level: 5,
    };

    window.map = new window.kakao.maps.Map(container, options);

    // 지도 줌 컨트롤
    var zoomControl = new window.kakao.maps.ZoomControl();
    window.map.addControl(zoomControl, window.kakao.maps.ControlPosition.RIGHT);

    bins.forEach((bin) => {
      // 마커 생성
      var marker = new window.kakao.maps.Marker({
        //마커가 표시될 지도
        map: window.map,
        //마커가 표시 될 위치
        position: new window.kakao.maps.LatLng(bin.lat, bin.lng),
        //마커 hover 시 보일 title
        title: bin.title,
      });

      // 마커 click 이벤트
      window.kakao.maps.event.addListener(marker, "click", function () {
        setSelectedMarker(marker.getPosition());
      });
    });
  };

  // 지도 이동
  const panTo = () => {
    // 이동할 위도 경도 위치 생성
    var moveLatLon = new window.kakao.maps.LatLng(
      binSelected[0],
      binSelected[1],
    );

    // 지도 중심으로 부드럽게 이동, 레벨 3으로 줌 인
    // 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동
    window.map.setLevel(3);
    window.map.panTo(moveLatLon);
  };

  return <MapBinMapWrapper id="map"></MapBinMapWrapper>;
}

export default MapContent;
