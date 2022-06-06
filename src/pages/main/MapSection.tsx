import { MapButton, MapText, SeoulImg } from "../../styles/mainStyles/MapStyle";

function MapSection() {
  return (
    <SeoulImg>
      <MapText>
        서울시 공공 쓰레기통
        <br />
        위치 확인
      </MapText>
      <MapButton>쓰레기 버리러 가기</MapButton>
    </SeoulImg>
  );
}

export default MapSection;
