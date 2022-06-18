import React, { useEffect } from "react";

import MapSearch from "./MapSearch";
import MapContent from "./MapContent";
import MapList from "./MapList";

import { getData } from "../../api";

import { useRecoilState } from "recoil";

import {
  BinTypes,
  BinState,
  SearchBinState,
  RegionValueState,
  RoadsValueState,
} from "../../stores/atoms";

import {
  MapContainer,
  MapTop,
  MapTitle,
  MapBinSection,
} from "../../styles/mapStyles/mapStyle";

function Map() {
  const [bin, setBin] = useRecoilState<BinTypes[]>(BinState);

  const [regionValue, setRegionValue] = useRecoilState(RegionValueState);

  const [roadsValue, setRoadsValue] = useRecoilState(RoadsValueState);

  const getBins = async () => {
    try {
      const res = await getData(
        // `bins`
        `bins?search=${'종로구'}&category=${roadsValue}`,
      );
      // console.log(res.data);
      setBin(res.data);
    } catch (e) {
      console.log(e);
    }

    // setBin(markerData);
  };
  useEffect(() => {
    getBins();
  }, [regionValue, roadsValue]);

  return (
    <MapContainer>
      <MapTop>
        <MapTitle>서울시 공공 쓰레기통</MapTitle>
        <MapSearch />
      </MapTop>
      <MapBinSection>
        <MapContent />
        <MapList />
      </MapBinSection>
    </MapContainer>
  );
}

export default Map;
