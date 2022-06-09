import React from "react";

import { Container, TopTitle } from "../../styles/basicStyle";

import {
  MapSearchSection,
  MapSearchTextWrapper,
  MapBinSection,
  MapBinListContainer,
  MapBinLocationContainer,
  MapBinLacationTitle,
  MapBinLacationDes,
} from "../../styles/mapStyles/mapStyle";

function Map() {
  return (
    <Container>
      {/* 페이지 타이틀 */}
      <TopTitle>서울시 공공 쓰레기통</TopTitle>
      {/* 검색 섹션 */}
      <MapSearchSection>
        <MapSearchTextWrapper>서울시</MapSearchTextWrapper>
        {/* 구 */}
        <div>
          {/* 오토 컴플릿 */}
          <div></div>
          <MapSearchTextWrapper>구</MapSearchTextWrapper>
        </div>
        {/* 동/지역명 */}
        <div>
          {/* 오토 컴플릿 */}
          <div></div>
          <MapSearchTextWrapper>동/지역명</MapSearchTextWrapper>
        </div>
      </MapSearchSection>
      {/* 지도, 리스트 섹션 */}
      <MapBinSection>
        {/* 지도 api 래퍼 */}
        <div></div>
        {/* 지역별 쓰레기통 리스트 */}
        <MapBinListContainer>
          {/* 쓰레기통 리스트 */}
          <MapBinLocationContainer>
            <MapBinLacationTitle>서울시 경복궁역 4번 출구</MapBinLacationTitle>
            <MapBinLacationDes>지하철역 입구</MapBinLacationDes>
          </MapBinLocationContainer>
          <MapBinLocationContainer>
            <MapBinLacationTitle>서울시 경복궁역 4번 출구</MapBinLacationTitle>
            <MapBinLacationDes>지하철역 입구</MapBinLacationDes>
          </MapBinLocationContainer>
          <MapBinLocationContainer>
            <MapBinLacationTitle>서울시 경복궁역 4번 출구</MapBinLacationTitle>
            <MapBinLacationDes>지하철역 입구</MapBinLacationDes>
          </MapBinLocationContainer>
        </MapBinListContainer>
      </MapBinSection>
    </Container>
  );
}

export default Map;
