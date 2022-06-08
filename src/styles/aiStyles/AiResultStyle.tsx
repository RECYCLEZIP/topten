import styled from "styled-components";

export const AiResultSubjectSection = styled.section`
  /* background: lightblue; */

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
  margin: 1rem 0;
  padding: 1rem;
  
  flex: 1;
  text-align: center;
  
  background: #dfe6ed;
  border-radius: 0.5rem;
  `;

export const AiResultMidSummaryContainer = styled(AiResultContentContainer)`
  @media screen and (min-width: 768px) {
      margin: 1rem 1rem;
    }
    `;

export const AiResultSummaryTitleWrapper = styled.div`
  margin-bottom: 0.5rem;
  
  font-size: 0.6rem;
  `;
  
export const AiResultSummaryDesWrapper = styled.div`
  font-size: 0.7rem;
  `;

  export const AiResultDesContainer = styled(AiResultContentContainer)`
    text-align: left;
  `