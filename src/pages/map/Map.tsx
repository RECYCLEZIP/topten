import React, { useEffect, useState } from "react";

import MapSearch from "./MapSearch";
import MapList from "./MapList";
import MapContent from "../../components/MapContent";

import { getData } from "../../api";

import { useRecoilValue, useSetRecoilState, useRecoilState } from "recoil";

import {
  BinTypes,
  BinState,
  BinSelectedState,
  selectedMarkerState,
  RegionValueState,
  RoadsValueState,
  lastIntersectingImageState,
} from "../../stores/atoms";

import {
  MapContainer,
  MapTop,
  MapTitle,
  MapBinSection,
} from "../../styles/mapStyles/mapStyle";
import { customTostify } from "../../components/customTostify";

function Map() {
  const [bin, setBin] = useRecoilState<BinTypes[]>(BinState);

  const [regionValue, setRegionValue] = useRecoilState(RegionValueState);

  const [roadsValue, setRoadsValue] = useRecoilState(RoadsValueState);

  const [page, setPage] = useState(1);

  const bins = useRecoilValue(BinState);
  const binSelected = useRecoilValue(BinSelectedState);
  const setSelectedMarker = useSetRecoilState(selectedMarkerState);
  const setBinSelected = useSetRecoilState(BinSelectedState);

  const getBins = async () => {
    console.log("fetching 함수 호출됨");

    try {
      // 선택된 지역에 따라 쓰레기통 정보 get
      const res = await getData(
        `bins?search=${regionValue}&category=${roadsValue}`,
      );
      setBin(res.data);
    } catch (err: any) {
      customTostify("error", err.message);
    }
  };
  useEffect(() => {
    getBins();
  }, [regionValue, roadsValue]);

  useEffect(() => {
    console.log("page ? ", page);
    getBins();
  }, [page]);

  return (
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
  );
}

export default Map;
