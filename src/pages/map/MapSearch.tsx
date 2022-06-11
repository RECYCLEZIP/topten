import React, { useEffect } from "react";

import Autocomplete from "@mui/material/Autocomplete";
import Box from "@mui/material/Box";
import { makeStyles } from "@material-ui/core";

import {
  MapSearchSection,
  AutocompleteContainer,
  MapSearchTextWrapper,
  StyledInput,
  Listbox,
} from "../../styles/mapStyles/mapStyle";

const options = ["강남구", "강북구", '송파구'];

const seoul = [
  { 강남구: ["강남대로", "을지로"] },
  { 강북구: ["강북대로"] },
  { 강북구: ["강북대로", "강남대로", "을지로"] },
];

const useStyles = makeStyles({
  noOptions: {
    fontSize: "0.46rem",
  },
});

function MapSearch() {
  const [regionValue, setRegionValue] = React.useState<string | null>("");
  const [localValue, setLocalValue] = React.useState<string | null>("");
  const [inputRegionValue, setRegionInputValue] = React.useState("");
  const [inputLocalValue, setLocalInputValue] = React.useState("");

  const styles = useStyles();

  useEffect(() => {
    console.log(regionValue, localValue);
  }, [regionValue, localValue]);

  return (
    <MapSearchSection>
      <MapSearchTextWrapper>서울시</MapSearchTextWrapper>
      {/* 구 */}
      <AutocompleteContainer>
        {/* 오토 컴플릿 */}
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
      {/* 동/지역명 */}
      <AutocompleteContainer>
        {/* 오토 컴플릿 */}
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
