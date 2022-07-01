import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { img } from "../../assets/imgImport";
import {
  MapButton,
  MapText,
  MapContainer,
  SeoulImg,
  ContentContainer,
} from "../../styles/mainStyles/MapStyle";

// main page map section component
function MapSection() {
  const navigate = useNavigate();

  return (
    <MapContainer>
      <SeoulImg src={img.seoul} />
      <ContentContainer>
        <MapText>
          서울시 공공 쓰레기통
          <br />
          위치 확인
        </MapText>
        <MapButton onClick={() => navigate("/map")}>
          쓰레기 버리러 가기
        </MapButton>
      </ContentContainer>
    </MapContainer>
  );
}

export default MapSection;
