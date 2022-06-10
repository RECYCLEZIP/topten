import { Dispatch, SetStateAction } from "react";

export interface ResultTextType {
  size?: string;
  color?: string;
  margin?: string;
}

export interface AlertType {
  setResult: Dispatch<SetStateAction<boolean>>;
  answer: boolean;
}
