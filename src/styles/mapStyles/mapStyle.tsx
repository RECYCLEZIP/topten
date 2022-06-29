import styled, { css } from "styled-components";
import { Button } from "../ButtonStyles";
import { Container } from "../basicStyle";

export const MapContainer = styled(Container)`
  padding-top: 0;
  margin-top: 2.6rem;
`;

export const MapTop = styled.div`
  background: white;
  z-index: 1;
  width: 100%;
  height: fit-content;
  position: fixed;

  padding-top: 2rem;
`;

export const MapTitle = styled.span`
  // position: fixed;
`;
export const MapSearchSection = styled.section`
  margin: 1rem 0;
  display: flex;

  align-items: center;
  // position: fixed;
`;

export const AutocompleteContainer = styled.div`
  display: flex;

  align-items: center;
`;

export const MapSearchTextWrapper = styled.div`
  margin-right: 0.5rem;

  font-size: 0.6rem;

  font-weight: 500;

  @media (min-width: 768px) {
    margin-right: 2rem;
  }
`;

export const MapBinSection = styled.section`
  display: block;

  @media (min-width: 768px) {
    display: flex;
  }
`;

export const MapContentContainer = styled.div<{ type: any }>`
  ${(props) =>
    props?.type === "bin"
      ? css`
          width: 85%;
          height: 30vh;
          height: 15rem;

          margin-top: 7rem;
          padding-bottom: 1.5rem;
          position: fixed;

          background: white;

          z-index: 1;

          @media (min-width: 768px) {
            width: 40%;
            height: 50%;
            margin-top: 7rem;
          }
        `
      : css`
          width: 85%;
          height: 10rem;

          @media (min-width: 768px) {
            width: 40%;
          }
        `}
`;

export const MapContentWrapper = styled.div`
  height: 100%;

  @media (min-width: 768px) {
    // height: 80%
    // max-height: 80%;
  }
`;

export const MapBinListContainer = styled.div`
  display: block;
  position: absolute;

  margin-top: 24.5rem;

  flex: 1;

  // padding-top: 5rem;
  // background: red;

  @media (min-width: 768px) {
    margin-top: 7.3rem;
    margin-left: 45%;
    // margin-left: 3rem;
  }
`;

export const MapBinDatailsContainer = styled.div`
  margin-bottom: 1rem;

  cursor: pointer;
`;

export const MapBinLacationTitle = styled.div`
  margin-bottom: 0.2rem;
  font-size: 0.6rem;
`;

export const MapBinLacationDes = styled.div`
  font-size: 0.53rem;

  color: #9eacba;
`;

export const TypeContainer = styled.div`
  padding: 0.2rem 0.5rem;
  margin-right: 0.5rem;

  display: inline-block;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
    #69db7c;
  border: none;
  border-radius: 0.2rem;

  color: white;
  font-size: 0.4rem;
  font-weight: bold;
`;

export const BackWrapper = styled.div`
  margin-bottom: 0.5rem;
  display: flex;
`;

export const BackButton = styled(Button)`
  padding: 0.3rem 0.8rem;

  background: #f0f2f5;
  color: black;

  font-size: 0.5rem;

  &:hover {
    background-color: #dadee4;
    transition: all 0.5s;
  }
`;
