import React, { useEffect } from "react";

import Autocomplete from "@mui/material/Autocomplete";
import { makeStyles } from "@material-ui/core";

import {
  MapSearchSection,
  AutocompleteContainer,
  MapSearchTextWrapper,
  StyledInput,
} from "../../styles/mapStyles/mapStyle";

// 목 데이터
const options = ["강남구", "강북구", '송파구'];

// 검색어가 항목에 없을 시 문구 style
const useStyles = makeStyles({
  noOptions: {
    fontSize: "0.46rem",
  },
});

function MapSearch() {
  // 구 
  const [regionValue, setRegionValue] = React.useState<string | null>("");
  const [inputRegionValue, setRegionInputValue] = React.useState("");
  // 동/지역명
  const [localValue, setLocalValue] = React.useState<string | null>("");
  const [inputLocalValue, setLocalInputValue] = React.useState("");

  const styles = useStyles();

  // 구 or 동/지역명 선택 시 로직 (구현 전)
  useEffect(() => {
    console.log(regionValue, localValue);
  }, [regionValue, localValue]);

  return (
    <MapSearchSection>
      <MapSearchTextWrapper>서울시</MapSearchTextWrapper>
      <AutocompleteContainer>
        <Autocomplete
          value={regionValue}
          onChange={(event: any, newValue: string | null) => {
            setRegionValue(newValue);
          }}
          inputValue={inputRegionValue}
          onInputChange={(event, newInputValue) => {
            setRegionInputValue(newInputValue);
          }}
          options={options}
          sx={{
            display: "inline-block",
            "& input": {
              width: "4rem",
              height: "0.5rem",
              fontSize: "0.46rem",
            },
          }}
          renderInput={(params) => (
            <StyledInput
              ref={params.InputProps.ref}
              inputProps={params.inputProps}
              placeholder="선택하세요"
            />
          )}
          noOptionsText="결과가 없습니다."
          classes={{
            noOptions: styles.noOptions,
          }}
          renderOption={(props, option, { selected }) => (
            <li {...props}
              style={{
                padding: "0.3rem 0.5rem",
                margin: 0,
                display: "flex",
                fontSize: "0.46rem",
                overflow: "hidden"
              }}
            >
              {option}
            </li>
          )}
        />
        <MapSearchTextWrapper>구</MapSearchTextWrapper>
      </AutocompleteContainer>
      <AutocompleteContainer>
        <div>
          <Autocomplete
            value={localValue}
            onChange={(event: any, newValue: string | null) => {
              setLocalValue(newValue);
            }}
            inputValue={inputLocalValue}
            onInputChange={(event, newInputValue) => {
              setLocalInputValue(newInputValue);
            }}
            options={options}
            sx={{
              display: "inline-block",
              "& input": {
                width: "4rem",
                height: "0.5rem",
                fontSize: "0.46rem",
              },
            }}
            renderInput={(params) => (
              <StyledInput
                ref={params.InputProps.ref}
                inputProps={params.inputProps}
                placeholder="선택하세요"
              />
            )}
            noOptionsText="결과가 없습니다."
            classes={{
              noOptions: styles.noOptions,
            }}
            renderOption={(props, option, { selected }) => (
              <li {...props}
                style={{
                  padding: "0.3rem 0.5rem",
                  margin: 0,
                  display: "flex",
                  fontSize: "0.46rem",
                  overflow: "hidden"
                }}
              >
                {option}
              </li>
            )}
          />
        </div>
        <MapSearchTextWrapper>동/지역명</MapSearchTextWrapper>
      </AutocompleteContainer>
    </MapSearchSection>
  );
}

export default MapSearch;
