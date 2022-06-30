import styled from "styled-components";

import { Button } from "../../styles/ButtonStyles";

export const BlackHr = styled.hr`
  border: none;
  height: 1px;
  background-color: black;
`;

export const GrayHr = styled.hr`
  border: none;
  height: 1px;
  background-color: rgb(219, 219, 219);
`;

export const ButtonContainer = styled.div`
  display: flex;
`;

export const ButtonWrapper = styled.div`
  /* background: green; */
  width: 100%;

  float: right;
  text-align-last: right;

  padding-right: 1rem;
`;

export const GrayButton = styled.button`
  padding: 0.3rem 0.8rem;
  margin-right: 0.5rem;

  font-size: 0.53rem;
  font-weight: bold;
  color: #424242;

  border: none;
  border-radius: 0.3rem;
  background: #e1e1e1;
  /* background: #e4e4e4; */
  /* background: #bdbdbd; */
  /* background: #979797; */

  cursor: pointer;
`;

export const RedButton = styled(GrayButton)`
  background: #a62121;

  color: white;
`;

export const TitleContainer = styled.div`
  padding: 0.5rem;
  display: flex;

  @media screen and (min-width: 768px) {
    padding: 0.5rem 1.5rem;
  }
`;

export const Title = styled.div`
  /* background: red; */
  font-size: 0.6rem;
`;

export const SectionTitle = styled.div`
  font-size: 0.8rem;
`;

export const RightContainer = styled.div`
  /* float: right; */
  flex-grow: 1;

  align-self: center;

  color: #979797;
`;

export const Author = styled.div`
  /* background: yellow; */
  margin-right: 1.5rem;

  font-size: 0.53rem;
  font-weight: 500;
  /* flex-grow: 1; */
  float: right;
  /* text-align: right; */
`;

export const Date = styled.div`
  /* background: green; */
  font-size: 0.53rem;
  font-weight: 500;

  /* flex-grow: 1; */
  float: right;
  /* text-align: right; */
`;

export const ContentContainer = styled.div`
  padding: 0.5rem;
  font-size: 0.6rem;
  /* color: #979797; */

  @media screen and (min-width: 768px) {
    padding: 0.5rem 1.5rem;
  }
`;

export const SquareButton = styled(Button)`
  /* float: right; */

  margin-left: auto;
  margin-top: 0.5rem;

  border-radius: 0.3rem;
`;
