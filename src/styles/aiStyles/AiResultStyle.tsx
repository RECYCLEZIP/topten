import styled from "styled-components";

export const AiResultSubjectSection = styled.section`
  /* background: lightblue; */

  /* margin-top: 2rem; */
  /* margin-bottom: 1rem; */

  display: grid;
  text-align: center;
`;

export const AiResultSubjectName = styled.div`
  font-size: 1rem;

  margin-bottom: 0.1rem;
`;

export const AiResultSubjectTexture = styled.div`
  color: #9eacba;
  font-size: 0.7rem;
  font-weight: 500;
`;

export const AiResultContentsSection = styled.section`
  display: block;

  @media screen and (min-width: 768px) {
    display: flex;
  }
`;

export const AiResultContentContainer = styled.div`
  margin-top: 2rem;
  margin-bottom: 3rem;
  padding: 1rem;

  flex: 1;
  text-align: center;

  background: white;
  border-radius: 0.5rem;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.15);
`;

export const AiResultSummaryContainer = styled(AiResultContentContainer)`
  padding: 1.5rem;

  background: #f0f2f5;

  box-shadow: 0px 0px 20px rgb(0 0 0 / 20%);
`;

export const AiResultMidSummaryContainer = styled(AiResultSummaryContainer)`
  @media screen and (min-width: 768px) {
    margin: 2rem 1rem;
    margin-bottom: 3rem;
  }
`;

export const AiResultSummaryTitleWrapper = styled.div`
  margin-bottom: 0.5rem;

  font-size: 0.6rem;
`;

export const AiResultSummaryDesWrapper = styled.div`
  font-size: 0.8rem;
`;

export const AiResultDesContainer = styled(AiResultContentContainer)`
  margin: 1rem 0;

  text-align: left;
`;

export const AiResultDesLastContainer = styled(AiResultDesContainer)`
  margin-bottom: 2rem;
`;
