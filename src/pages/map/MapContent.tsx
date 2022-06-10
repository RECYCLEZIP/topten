import React, { useEffect } from "react";

import { MapBinMapWrapper } from "../../styles/mapStyles/mapStyle";

declare global {
  interface Window {
    kakao: any;
  }
}

// interface MapProps {
//   latitude: number;
//   longitude: number;
// }

// function MapContent({ latitude, longitude }: MapProps) {
function MapContent() {
  const latitude: number = 37.506502;
  const longitude: number = 127.053617;

  // 목 데이터(라서 타입 지정까지는 x)
  const markerdata = [
    {
      title: "콜드스퀘어",
      lat: 37.62197524055062,
      lng: 127.16017523675508,
    },
    {
      title: "하남돼지집",
      lat: 37.620842424005616,
      lng: 127.1583774403176,
    },
    {
      title: "수유리우동",
      lat: 37.624915253753194,
      lng: 127.15122688059974,
    },
    {
      title: "맛닭꼬",
      lat: 37.62456273069659,
      lng: 127.15211256646381,
    },
  ];

  // 지도 띄우기 - 단일 마커
  // useEffect(() => {
  //   const mapScript = document.createElement("script");

  //   mapScript.async = true;
  //   mapScript.src =
  //     "//dapi.kakao.com/v2/maps/sdk.js?appkey=73961083d602e716376b975aeb465b21";
  //   // mapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAOMAP_APPKEY}&autoload=false`;

  //   document.head.appendChild(mapScript);

  //   const onLoadKakaoMap = () => {
  //     window.kakao.maps.load(() => {
  //       const container = document.getElementById("map");
  //       const options = {
  //         center: new window.kakao.maps.LatLng(latitude, longitude),
  //       };
  //       const map = new window.kakao.maps.Map(container, options);
  //       const markerPosition = new window.kakao.maps.LatLng(
  //         latitude,
  //         longitude,
  //       );
  //       const marker = new window.kakao.maps.Marker({
  //         position: markerPosition,
  //       });
  //       marker.setMap(map);
  //     });
  //   };
  //   mapScript.addEventListener("load", onLoadKakaoMap);

  //   return () => mapScript.removeEventListener("load", onLoadKakaoMap);
  // }, [latitude, longitude]);


  // 지도 띄우기 - 다중 마커
  useEffect(() => {
    mapscript();
  }, []);

  const mapscript = () => {
    let container = document.getElementById("map");
    let options = {
      center: new window.kakao.maps.LatLng(37.624915253753194, 127.15122688059974),
      // 지도 레이어. 숫자 클수록 지도 범위 넓어짐
      level: 5,
    };

    const map = new window.kakao.maps.Map(container, options);

    markerdata.forEach((el) => {
      // 마커를 생성합니다
      new window.kakao.maps.Marker({
        //마커가 표시 될 지도
        map: map,
        //마커가 표시 될 위치
        position: new window.kakao.maps.LatLng(el.lat, el.lng),
        //마커에 hover시 나타날 title
        title: el.title,
      });
    });
  };

  return (
    <>
      <MapBinMapWrapper id="map"></MapBinMapWrapper>
    </>
  );
}

export default MapContent;
