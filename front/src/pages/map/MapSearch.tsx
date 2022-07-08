import React, { useEffect, useState } from "react";

import { useResetRecoilState, useRecoilState } from "recoil";
import {
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

import { getData } from "../../api";

import { customToastify } from "../../components/customToastify";

// 검색어가 항목에 없을 시 문구 style
const useStyles = makeStyles({
  noOptions: {
    fontSize: "0.46rem",
  },
});

function MapSearch(this: any) {
  // 구
  const [regionValue, setRegionValue] = useRecoilState(RegionValueState);
  const [inputRegionValue, setRegionInputValue] = React.useState("");

  // 동/지역명
  const [roadsValue, setRoadsValue] = useRecoilState(RoadsValueState);
  const [inputRoadsValue, setLocalInputValue] = React.useState("");

  const resetRoadsValue = useResetRecoilState(RoadsValueState);

  // autoComplete 선택한 값(default 전체 리스트)
  const [searchBins, setSearchBins] = useRecoilState(SearchBinState);

  const [regionOptions, setRegionOptions] = useState([]);
  const [roadsOptions, setRoadsOptions] = useState<string[]>([]);

  const styles = useStyles();

  // 구 옵션
  const getRegionOptions = async () => {
    try {
      const res = await getData(`bins/locations`);
      setRegionOptions(res.data.uniqueRegionList);
    } catch (err: any) {
      customToastify("error", err?.response?.data?.message);
    }
  };

  useEffect(() => {
    getRegionOptions();
  }, [regionValue]);

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
      <AutocompleteContainer>
        <Autocomplete
          blurOnSelect
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
              width: "3rem",
              height: "0.5rem",
              fontSize: "0.46rem",
              lineHeight: "initial",
            },

            "@media (min-width: 768px)": {
              "& input": {
                width: "4rem",
              },
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
            blurOnSelect
            value={roadsValue}
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
                width: "3rem",
                height: "0.5rem",
                fontSize: "0.46rem",
                lineHeight: "initial",
              },
              "@media (min-width: 768px)": {
                "& input": {
                  width: "4rem",
                },
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
