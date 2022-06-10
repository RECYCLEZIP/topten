import React from "react";

import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

import {
  MapSearchSection,
  MapAutocompleteWrapper,
  MapSearchTextWrapper,
} from "../../styles/mapStyles/mapStyle";

const options = ["Option 1", "Option 2"];

function MapSearch() {
  const [value, setValue] = React.useState<string | null>("");
  const [inputValue, setInputValue] = React.useState("");
  return (
    <MapSearchSection>
      <MapSearchTextWrapper>서울시</MapSearchTextWrapper>
      {/* 구 */}
      <div>
        {/* 오토 컴플릿 */}
        <MapAutocompleteWrapper>
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
            sx={{ width: 300 }}
            renderInput={(params) => (
              <TextField {...params} label="Controllable" />
            )}
          />
        </MapAutocompleteWrapper>
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
            sx={{ width: 300 }}
            renderInput={(params) => (
              <TextField {...params} label="Controllable" />
            )}
          />
        </div>
        <MapSearchTextWrapper>동/지역명</MapSearchTextWrapper>
      </div>
    </MapSearchSection>
  );
}

export default MapSearch;
