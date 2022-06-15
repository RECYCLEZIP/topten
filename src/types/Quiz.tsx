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
