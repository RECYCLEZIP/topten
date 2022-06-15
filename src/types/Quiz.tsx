import { Dispatch, SetStateAction } from "react";

//result text style type
export interface ResultTextType {
  size?: string;
  color?: string;
  margin?: string;
}

//alert component props type
export interface AlertType {
  setResult: Dispatch<SetStateAction<boolean>>;
  answer: boolean;
}

export interface QuizType {
  answer?: string;
  description?: string;
  image?: string;
  options?: string[];
  // result ?: {}
  title?: string;
  type?: string;
  _id?: string;
}

export interface QuizCardType {
  display?: "none";
  quiz: QuizType;
}
