import { atom } from "recoil";

export interface BinTypes {
  title: string;
  point: string;
  lat: number;
  lng: number;
}

export interface BinSelectedTypes {
  lat: number;
  lng: number;
}

// Ai 분석 페이지의 상황
export const AiSituationState = atom({
  key: "AiSituationState",
  default: "beforeImgUpload",
});

// 서울시 쓰레기통 데이터셋
export const BinState = atom<BinTypes[]>({
  key: "BinState",
  default: [
    {
      title: "",
      point: "",
      lat: 0,
      lng: 0,
    },
  ],
});

// 선택한 쓰레기통 리스트 좌표
export const BinSelectedState = atom<(number | undefined)[]>({
  key: "BinSelectedState",
  default: [0, undefined],
});

// 선택한 쓰레기통 마커
export const selectedMarkerState = atom({
  key: "selectedMarkerState",
  default: { La: 0, Ma: 0 },
});
