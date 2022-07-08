import React, { useEffect, useState } from "react";

import MapSearch from "./MapSearch";
import MapList from "./MapList";
import MapContent from "../../components/MapContent";

import { getData } from "../../api";

import {
  useRecoilValue,
  useSetRecoilState,
  useRecoilState,
  useResetRecoilState,
} from "recoil";

import {
  BinTypes,
  BinState,
  BinSelectedState,
  selectedMarkerState,
  RegionValueState,
  RoadsValueState,
} from "../../stores/atoms";

import {
  MapContainer,
  MapTop,
  MapTitle,
  MapBinSection,
} from "../../styles/mapStyles/mapStyle";

import { Helmet } from "react-helmet-async";

function Map() {
  const [bin, setBin] = useRecoilState<BinTypes[]>(BinState);

  const [regionValue, setRegionValue] = useRecoilState(RegionValueState);
  const resetRegion = useResetRecoilState(RegionValueState);

  const [roadsValue, setRoadsValue] = useRecoilState(RoadsValueState);

  const bins = useRecoilValue(BinState);
  const binSelected = useRecoilValue(BinSelectedState);
  const setSelectedMarker = useSetRecoilState(selectedMarkerState);
  const setBinSelected = useSetRecoilState(BinSelectedState);

  const getBins = async () => {
    try {
      // 선택된 지역에 따라 쓰레기통 정보 get
      const res = await getData(
        `bins?search=${regionValue}&category=${roadsValue}`,
      );
      setBin(res.data);
    } catch (err: any) {
      console.log("error", err.response.data.message);
    }
  };

  useEffect(() => {
    resetRegion();
  }, []);

  useEffect(() => {
    getBins();
  }, [regionValue, roadsValue]);

  return (
    <>
      <Helmet>
        <title>분리수ZIP - 쓰레기통 지도</title>
        <meta
          name="description"
          content="AI가 분류해주는 분리수거 서비스 지도페이지"
        />
        <link rel="canonical" href="/map" />
      </Helmet>
      <MapContainer>
        <MapTop>
          <MapTitle>서울시 공공 쓰레기통</MapTitle>
          <MapSearch />
        </MapTop>
        <MapBinSection>
          <MapContent
            type="bin"
            props={bins}
            propsSelected={binSelected}
            setSelectedMarker={setSelectedMarker}
            setPropsSelected={setBinSelected}
          />
          <MapList />
        </MapBinSection>
      </MapContainer>
    </>
  );
}

export default Map;
