import { atom } from "recoil";
import { initialState } from "../pages/game/Game";
import { CategoryType, NewsType } from "../types/Main";
import { AnswerListType, AnswerType, QuizType } from "../types/Quiz";
import { CategoryItemType, TrashType } from "../types/Trash";
import { UserType } from "../types/User";

export interface BinTypes {
  region: string;
  roads: string;
  details: string;
  points: string;
  address: "";
  type: string[];
  x: string;
  y: string;
}

export interface BinSelectedTypes {
  lat: string;
  lng: string;
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
      region: "",
      roads: "",
      details: "",
      points: "",
      address: "",
      type: [],
      x: "",
      y: "",
    },
  ],
});

export const SearchBinState = atom<BinTypes[]>({
  key: "SearchBinState",
  default: [
    {
      region: "",
      roads: "",
      details: "",
      points: "",
      address: "",
      type: [],
      x: "",
      y: "",
    },
  ],
});

export const RegionValueState = atom({
  key: "RegionValueState",
  default: "",
});

export const RoadsValueState = atom({
  key: "RoadsValueState",
  default: "",
});

// 선택한 쓰레기통 리스트 좌표
export const BinSelectedState = atom<(string | undefined)[]>({
  key: "BinSelectedState",
  default: ["", undefined],
});

// 선택한 쓰레기통 마커
export const selectedMarkerState = atom({
  key: "selectedMarkerState",
  default: { La: 0, Ma: 0 },
});

export const lastIntersectingImageState = atom<HTMLDivElement | null>({
  key: "lastIntersectingImage",
  default: null,
});

// category list
export const categoryState = atom<CategoryType[]>({
  key: "categoryState",
  default: [],
});

// news list
export const newsState = atom<NewsType[]>({
  key: "newsState",
  default: [],
});

// category item list
export const categoryItemState = atom<CategoryItemType[][]>({
  key: "categoryItemState",
  default: [],
});

// trash category
export const categoryKindState = atom<string>({
  key: "categoryKindState",
  default: "",
});

// to infinite scroll last trash id
export const categoryPageState = atom<string>({
  key: "categoryPageState",
  default: "",
});

export const categorySelectedState = atom<boolean[]>({
  key: "categorySelectedState",
  default: [],
});

//quiz list
export const quizListState = atom<QuizType[]>({
  key: "quizListState",
  default: [],
});

export const quizNumberState = atom<number>({
  key: "quizNumberState",
  default: 0,
});

export const selectedAnswerState = atom<boolean[]>({
  key: "selectedAnswerState",
  default: [false],
});

export const currentQuizState = atom<QuizType[]>({
  key: "currentQuizState",
  default: [],
});

export const currentPageState = atom<number>({
  key: "currentPageState",
  default: 0,
});

export const answerState = atom<string>({
  key: "answerState",
  default: "",
});

export const toPostAnswerState = atom<AnswerType[]>({
  key: "toPostAnswerState",
  default: [],
});

export const answerListState = atom<AnswerListType>({
  key: "answerListState",
  default: {
    type: "",
    answers: [],
  },
});

export const viewAnswerState = atom<boolean>({
  key: "viewAnswerState",
  default: false,
});

export const searchTrashState = atom<TrashType[]>({
  key: "searchTrashState",
  default: [],
});

export const quizConfirmState = atom<boolean>({
  key: "quizConfirmState",
  default: false,
});

export const loginState = atom<boolean>({
  key: "loginState",
  default: false,
});

export const userState = atom<UserType>({
  key: "userState",
  default: {},
});

export const currentGameState = atom({
  key: "gameState",
  default: initialState.gameState.READY,
});

export const gameLevelState = atom<number>({
  key: "gameLevelState",
  default: 1,
});
