import styled from "styled-components";

import { MapBinDatailsContainer } from "../../styles/mapStyles/mapStyle";

export const AiResultSubjectSection = styled.section`
  /* background: lightblue; */

  /* margin-top: 2rem; */
  /* margin-bottom: 1rem; */

  display: flex;
  text-align: center;
  align-items: center;
`;

export const AiResultSubjectName = styled.div`
  font-size: 1rem;

  margin-right: 1rem;
  margin-bottom: 0.1rem;
`;

export const AiResultSubjectTexture = styled.div`
  color: #9eacba;
  font-size: 0.7rem;
  font-weight: 500;
`;

export const AiResultContentsSection = styled.section`
  /* display: block; */
  display: flex;

  margin-bottom: 1rem;
`;

export const ListContainer = styled.div`
  margin-bottom: 2rem;
`;

export const List = styled.li`
  margin: 0.5rem 0;

  font-size: 0.6rem;

  list-style-position: inside;
  /* text-indent: -0.9rem; */
`;

export const AiResultContentContainer = styled.div`
  /* margin-top: 2rem;
  margin-bottom: 3rem; */
  padding: 0.5rem 1rem;
  margin-bottom: 3rem;

  flex: 1;
  text-align: center;

  background: white;
  border-radius: 0.5rem;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.15);
`;

export const AiResultSummaryContainer = styled.div`
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  margin-right: 1rem;

  padding: 0.3rem 0.5rem;

  display: block;
  text-align: center;

  background: white;
  border-radius: 0.3rem;

  background: #51cf66;

  @media screen and (min-width: 768px) {
    display: flex;
  }
`;

export const ResultNotice = styled(AiResultSummaryContainer)`
  font-size: 0.53rem;
  color: white;

  width: fit-content;

  margin: 0;
  margin-bottom: 0.2rem;

  background-color: white;
  color: #51cf66;
  padding: 0rem;

  border-radius: 0;
  padding-left: 0.5rem;
  border-left: 3px solid #9eacba;
`;

export const AiResultMidSummaryContainer = styled(AiResultSummaryContainer)`
  @media screen and (min-width: 768px) {
    margin: 2rem 1rem;
    margin-bottom: 3rem;
  }
`;

export const AiResultSummaryTitleWrapper = styled.div`
  font-size: 0.5rem;
  font-weight: 500;
  color: white;

  @media screen and (min-width: 768px) {
    margin-right: 0.5rem;
  }
`;

export const AiResultSummaryDesWrapper = styled.div`
  font-size: 0.5rem;

  color: white;
`;

export const AiResultDesContainer = styled(AiResultContentContainer)`
  margin: 1rem 0;
  margin-bottom: 2rem;

  text-align: left;
`;

export const AiResultDesLastContainer = styled(AiResultDesContainer)`
  margin-bottom: 2rem;
`;

export const MapTitleContainer = styled.div`
  /* display: flex; */

  align-items: center;

  @media screen and (min-width: 768px) {
    display: inline-flex;
  }
`;

export const MapContainer = styled.div`
  margin-top: 0.8rem;

  @media screen and (min-width: 768px) {
    display: flex;
  }
`;

export const MapLoading = styled.div`
  height: 8rem;

  display: flex;

  padding: 1rem;

  background: #f0f2f5;
  border-radius: 0.3rem;

  font-size: 0.6rem;

  text-align: center;
  justify-content: center;
  align-items: center;
`;

export const AiMapListContainer = styled.div`
  margin-top: 1rem;

  @media screen and (min-width: 768px) {
    height: 10rem;
    width: 50%;

    margin-top: 0;
    margin-left: 1rem;

    overflow: auto;
  }
`;

export const ErrorContainer = styled.div`
  background: #f0f2f5;

  padding: 1rem;
  margin-top: 1rem;

  border-radius: 0.3rem;

  font-size: 0.6rem;

  text-align: center;
`;
