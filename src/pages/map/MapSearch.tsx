import React, { useEffect, useMemo } from "react";

import { useRecoilValue, useSetRecoilState, useRecoilState } from "recoil";
import {
  BinState,
  SearchBinState,
  BinSelectedState,
  selectedMarkerState,
  GuValueState,
  DoroValueState,
} from "../../stores/atoms";

import Autocomplete from "@mui/material/Autocomplete";
import { makeStyles } from "@material-ui/core";

import {
  MapSearchSection,
  AutocompleteContainer,
  MapSearchTextWrapper,
  StyledInput,
} from "../../styles/mapStyles/mapStyle";

// 검색어가 항목에 없을 시 문구 style
const useStyles = makeStyles({
  noOptions: {
    fontSize: "0.46rem",
  },
});

function MapSearch() {
  // 구
  const [guValue, setGuValue] = useRecoilState(GuValueState);
  const [inputRegionValue, setRegionInputValue] = React.useState("");

  // 동/지역명
  const [doroValue, setDoroValue] = useRecoilState(DoroValueState);
  const [inputDoroValue, setLocalInputValue] = React.useState("");

  const bins = useRecoilValue(BinState);
  // autoComplete 선택한 값(default 전체 리스트)
  const [searchBins, setSearchBins] = useRecoilState(SearchBinState);

  const styles = useStyles();

  // 구 옵션
  const guOptions = useMemo(() => {
    const array = bins.map((bin) => bin.gu);

    // 중복 제거
    return array.filter((v, i) => array.indexOf(v) === i);
  }, [bins]);

  // 지역 옵션
  const doroOptions = useMemo(() => {
    if (guValue !== "") {
      console.log("구 선택");
      console.log(searchBins);
      const array = searchBins.map((bin) => bin.doro);

      console.log(array.filter((v, i) => array.indexOf(v) === i));
      // 중복 제거
      return array.filter((v, i) => array.indexOf(v) === i);
    } else {
      return [];
    }
  }, [searchBins, guValue]);

  return (
    <MapSearchSection>
      <MapSearchTextWrapper>서울시</MapSearchTextWrapper>
      <AutocompleteContainer>
        <Autocomplete
          value={guValue}
          onChange={(event: any, newValue: any) => {
            setGuValue(newValue);
          }}
          inputValue={inputRegionValue}
          onInputChange={(event, newInputValue) => {
            setRegionInputValue(newInputValue);
          }}
          options={guOptions}
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
            value={doroValue}
            // onChange={(event: any, newValue: string | null) => {
            onChange={(event: any, newValue: any) => {
              setDoroValue(newValue);
            }}
            inputValue={inputDoroValue}
            onInputChange={(event, newInputValue) => {
              setLocalInputValue(newInputValue);
            }}
            options={doroOptions}
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
