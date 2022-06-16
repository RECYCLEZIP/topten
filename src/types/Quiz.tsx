import { Dispatch, SetStateAction } from "react";

//result text style type
export interface ResultTextType {
  size?: string;
  color?: string;
  margin?: string;
}

export interface QuizType {
  answer?: string;
  description?: string;
  image?: string;
  options: string[];
  result: { yesterday: number }[];
  title?: string;
  type?: string;
  _id?: string;
}

export interface QuizCardType {
  display?: "none";
  quiz: QuizType;
  index?: number;
}

export interface AnswerListType {
  type?: string;
  answers: AnswerType[];
}

export interface AnswerType {
  quizId?: string;
  answer?: string;
}

export interface ResultsType {
  result?: [{ quizId: string; isCorrect: boolean }];
  score?: number;
}
