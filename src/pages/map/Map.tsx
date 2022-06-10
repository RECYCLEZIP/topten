import React from "react";

import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

import MapContent from "./MapContent";
import MapList from "./MapList";

import { Container, TopTitle } from "../../styles/basicStyle";

import {
  MapSearchSection,
  MapSearchTextWrapper,
  MapBinSection,
} from "../../styles/mapStyles/mapStyle";

// const seoul = [
//   {
//     강남구: {
//       위도: 23423424,
//       경도: 23423424,
//       "상세 위치": "건물 앞",
//     },
//   },
//   {
//     강북구: {
//       위도: 23423424,
//       경도: 23423424,
//       "상세 위치": "신호등 앞",
//     },
//   },
// ];

// const options = [seoul[0], seoul[1]];
const options = ["Option 1", "Option 2"];

function Map() {
  const [value, setValue] = React.useState<string | null>("");
  const [inputValue, setInputValue] = React.useState("");

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
          <div>
            <Autocomplete
              value={value}
              onChange={(event: any, newValue: string | null) => {
                setValue(newValue);
              }}
              inputValue={inputValue}
              onInputChange={(event, newInputValue) => {
                setInputValue(newInputValue);
              }}
              id="controllable-states-demo"
              options={options}
              // sx={{ width: 300 }}
              renderInput={(params) => (
                <TextField {...params} label="Controllable" />
              )}
            />
          </div>
          <MapSearchTextWrapper>구</MapSearchTextWrapper>
        </div>
        {/* 동/지역명 */}
        <div>
          {/* 오토 컴플릿 */}
          <div>
            <Autocomplete
              value={value}
              onChange={(event: any, newValue: string | null) => {
                setValue(newValue);
              }}
              inputValue={inputValue}
              onInputChange={(event, newInputValue) => {
                setInputValue(newInputValue);
              }}
              id="controllable-states-demo"
              options={options}
              sx={{ width: 100 }}
              renderInput={(params) => (
                <TextField {...params} label="Controllable" />
              )}
            />
          </div>
          <MapSearchTextWrapper>동/지역명</MapSearchTextWrapper>
        </div>
      </MapSearchSection>
      {/* 지도, 리스트 섹션 */}
      <MapBinSection>
        {/* 지도 api */}
        <MapContent />
        {/* 쓰레기통 리스트 */}
        <MapList />
      </MapBinSection>
    </Container>
  );
}

export default Map;
