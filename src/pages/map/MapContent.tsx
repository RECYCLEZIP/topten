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

  // 지도
  useEffect(() => {
    const mapScript = document.createElement("script");

    mapScript.async = true;
    mapScript.src =
      "//dapi.kakao.com/v2/maps/sdk.js?appkey=73961083d602e716376b975aeb465b21";
    // mapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAOMAP_APPKEY}&autoload=false`;

    document.head.appendChild(mapScript);

    const onLoadKakaoMap = () => {
      window.kakao.maps.load(() => {
        const container = document.getElementById("map");
        const options = {
          center: new window.kakao.maps.LatLng(latitude, longitude),
        };
        const map = new window.kakao.maps.Map(container, options);
        const markerPosition = new window.kakao.maps.LatLng(
          latitude,
          longitude,
        );
        const marker = new window.kakao.maps.Marker({
          position: markerPosition,
        });
        marker.setMap(map);
      });
    };
    mapScript.addEventListener("load", onLoadKakaoMap);

    return () => mapScript.removeEventListener("load", onLoadKakaoMap);
  }, [latitude, longitude]);

  return (
    <>
      <MapBinMapWrapper id="map"></MapBinMapWrapper>
    </>
  );
}

export default MapContent;
