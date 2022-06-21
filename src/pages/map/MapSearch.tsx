import React, { useEffect, useMemo, useState } from "react";

import { useRecoilValue, useResetRecoilState, useRecoilState } from "recoil";
import {
  BinState,
  SearchBinState,
  RegionValueState,
  RoadsValueState,
} from "../../stores/atoms";

import Autocomplete from "@mui/material/Autocomplete";
import { makeStyles } from "@material-ui/core";

import {
  MapSearchSection,
  AutocompleteContainer,
  MapSearchTextWrapper,
} from "../../styles/mapStyles/mapStyle";

import { StyledInput } from "../../styles/mapStyles/MapMuiStyle";

// 검색어가 항목에 없을 시 문구 style
const useStyles = makeStyles({
  noOptions: {
    fontSize: "0.46rem",
  },
});

function MapSearch() {
  // 구
  const [regionValue, setRegionValue] = useRecoilState(RegionValueState);
  const [inputRegionValue, setRegionInputValue] = React.useState("");

  // 동/지역명
  const [roadsValue, setRoadsValue] = useRecoilState(RoadsValueState);
  const [inputRoadsValue, setLocalInputValue] = React.useState("");

  const resetRoadsValue = useResetRecoilState(RoadsValueState);

  const bins = useRecoilValue(BinState);

  // autoComplete 선택한 값(default 전체 리스트)
  const [searchBins, setSearchBins] = useRecoilState(SearchBinState);

  const [roadsOptions, setRoadsOptions] = useState<any>([]);

  const styles = useStyles();

  // 구 옵션
  const regionOptions = useMemo(() => {
    const array = bins.map((bin) => bin.region);

    // 중복 제거
    return array.filter((v, i) => array.indexOf(v) === i);
  }, [bins]);

  // 도로 옵션
  useEffect(() => {
    // 도로명 인풋 지우면 null -> ""로 default
    if (roadsValue === null) {
      resetRoadsValue();
    }

    // 구만 채워졌을 때만 옵션 세팅
    if (regionValue !== "" && roadsValue === "") {
      const array = searchBins.map((bin) => bin.roads);

      // 중복 제거
      setRoadsOptions(array.filter((v, i) => array.indexOf(v) === i));
    }
  }, [searchBins, regionValue, roadsValue]);

  return (
    <MapSearchSection>
      <MapSearchTextWrapper>서울시</MapSearchTextWrapper>
      <AutocompleteContainer>
        <Autocomplete
          value={regionValue}
          onChange={(event, newValue) => {
            if (newValue !== null) {
              setRegionValue(newValue);
            }
          }}
          inputValue={inputRegionValue}
          onInputChange={(event, newInputValue) => {
            setRegionInputValue(newInputValue);
          }}
          options={regionOptions}
          sx={{
            display: "inline-block",
            "& input": {
              width: "4rem",
              height: "0.5rem",
              fontSize: "0.46rem",
              lineHeight: "initial",
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
            <li
              {...props}
              style={{
                padding: "0.3rem 0.5rem",
                margin: 0,
                display: "flex",
                fontSize: "0.46rem",
                overflow: "hidden",
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
            value={roadsValue}
            // onChange={(event: any, newValue: string | null) => {
            onChange={(event: any, newValue: any) => {
              setRoadsValue(newValue);
            }}
            inputValue={inputRoadsValue}
            onInputChange={(event, newInputValue) => {
              setLocalInputValue(newInputValue);
            }}
            options={roadsOptions}
            sx={{
              display: "inline-block",
              "& input": {
                width: "4rem",
                height: "0.5rem",
                fontSize: "0.46rem",
                lineHeight: "initial",
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
              <li
                {...props}
                style={{
                  padding: "0.3rem 0.5rem",
                  margin: 0,
                  display: "flex",
                  fontSize: "0.46rem",
                  overflow: "hidden",
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
