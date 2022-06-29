import styled from "styled-components";
import { Button } from "./ButtonStyles";

export const PageNotContainer = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5.5rem;
  width: 100%;
  flex-direction: column-reverse;

  @media (min-width: 768px) {
    flex-direction: row;
    margin-top: 9rem;
  }
`;

export const ErrorDescription = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;

  @media (min-width: 768px) {
    width: 35%;
  }
`;

export const NumberText = styled.p`
  font-size: 2rem;
  margin: 0;
  width: 100%;
  text-align: center;
`;

export const DescriptionText = styled.p`
  margin: 0;
  font-size: 1rem;
  margin-bottom: 0.7rem;
  width: 100%;
  text-align: center;
`;

export const ErrorImg = styled.img`
  height: 8rem;
  margin-bottom: 0.5rem;

  @media (min-width: 768px) {
    margin: 0;
  }
`;

export const BackButton = styled(Button)`
  width: 5rem;
  text-align: center;
`;
