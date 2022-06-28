import React, { useEffect } from "react";

import { img } from "../assets/imgImport";

import {
  MapContentContainer,
  MapContentWrapper,
} from "../styles/mapStyles/mapStyle";

declare global {
  interface Window {
    kakao: any;
    map: any;
  }
}

function MapContent({
  type,
  props,
  propsSelected,
  setSelectedMarker,
  setPropsSelected,
  currentLon,
  currentLat,
}: any) {
  // const props = useRecoilValue(BinState);
  // const propsSelected = useRecoilValue(BinSelectedState);
  // const setSelectedMarker = useSetRecoilState(selectedMarkerState);
  // const setPropsSelected = useSetRecoilState(BinSelectedState);

  // console.log(type, props, propsSelected, setSelectedMarker, setPropsSelected);

  // 현위치 마커
  var imageSrc = img.current_marker, // 마커이미지의 주소입니다
    imageSize = new window.kakao.maps.Size(25, 25), // 마커이미지의 크기입니다
    imageOption = { offset: new window.kakao.maps.Point(27, 69) }; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.

  // 현위치 마커 이미지
  var markerImage = new window.kakao.maps.MarkerImage(
      imageSrc,
      imageSize,
      imageOption,
    ),
    markerPosition = new window.kakao.maps.LatLng(currentLat, currentLon); // 마커가 표시될 위치입니다

  useEffect(() => {
    // 렌더링 후 지도 띄우기
    mapLoad();
  }, [props]);

  useEffect(() => {
    // 리스트에서 항목 선택 시 해당 항목으로 지도 이동
    panTo();
  }, [propsSelected]);

  // var bounds = new window.kakao.maps.LatLngBounds();

  // 지도 띄우기 - 다중 마커
  const mapLoad = () => {
    // 지도 띄울 element
    let container = document.getElementById("map");

    let options = {
      // 지도 중심좌표(모든 마커가 나오도록 하단에서 재설정)
      center: new window.kakao.maps.LatLng(0, 0),
      // 지도 확대 레벨. 숫자 클수록 멀어짐
      level: 6,
    };

    window.map = new window.kakao.maps.Map(container, options);

    // 지도 줌 컨트롤
    var zoomControl = new window.kakao.maps.ZoomControl();
    window.map.addControl(zoomControl, window.kakao.maps.ControlPosition.RIGHT);

    // 중심 좌표 범위정보
    var bounds = new window.kakao.maps.LatLngBounds();

    // 현위치
    if (type === "robot") {
      // 현위치 마커 생성
      var current_marker = new window.kakao.maps.Marker({
        map: window.map,
        position: markerPosition,
        image: markerImage, // 마커이미지 설정
        title: "현위치",
      });

      // 중심 좌표 범위에 현위치 추가
      bounds.extend(new window.kakao.maps.LatLng(currentLat, currentLon));
    }

    props.forEach((prop: any) => {
      // 마커 생성
      if (type === "bin") {
        var marker = new window.kakao.maps.Marker({
          //마커가 표시될 지도
          map: window.map,
          //마커가 표시 될 위치
          position: new window.kakao.maps.LatLng(prop.y, prop.x),
          //마커 hover 시 보일 title
          title: prop.details,
        });
      } else if (type === "robot") {
        var marker = new window.kakao.maps.Marker({
          //마커가 표시될 지도
          map: window.map,
          //마커가 표시 될 위치
          position: new window.kakao.maps.LatLng(
            prop.location?.coordinates[1],
            prop.location?.coordinates[0],
          ),
          //마커 hover 시 보일 title
          title: prop.name,
        });
      }

      // 마커 click 이벤트
      window.kakao.maps.event.addListener(marker, "click", function () {
        setSelectedMarker({
          La: Math.round(marker.getPosition().La * 10000000000) / 10000000000,
          Ma: Math.round(marker.getPosition().Ma * 10000000000) / 10000000000,
        });
        if (type === "bin") {
          setPropsSelected([prop.x, prop.y]);
        } else {
          setPropsSelected([
            prop.location?.coordinates[0],
            prop.location?.coordinates[1],
          ]);
        }
      });

      // 모든 마커가 나오도록 중심좌표 설정
      if (type === "bin") {
        bounds.extend(new window.kakao.maps.LatLng(prop.y, prop.x));
      } else {
        bounds.extend(
          new window.kakao.maps.LatLng(
            prop.location?.coordinates[1],
            prop.location?.coordinates[0],
          ),
        );
      }
      window.map.setBounds(bounds);
    });
  };

  // 지도 이동
  const panTo = () => {
    // 이동할 위도 경도 위치 생성
    // console.log(propsSelected)
    var moveLatLon = new window.kakao.maps.LatLng(
      propsSelected[1],
      propsSelected[0],
    );

    // 지도 중심으로 부드럽게 이동, 레벨 3으로 줌 인
    // 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동
    window.map.setLevel(5);
    window.map.panTo(moveLatLon);
  };

  return (
    <MapContentContainer type={type}>
      <MapContentWrapper id="map"></MapContentWrapper>
    </MapContentContainer>
  );
}

export default MapContent;
