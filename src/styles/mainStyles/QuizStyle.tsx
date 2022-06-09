import styled from "styled-components";

export const RankContainer = styled.div`
  width: 80%;
  display: flex;
  justify-content: center;
  margin: 2% 0;
`;

export const RateText = styled.p<{ display?: string }>`
  color: #9eacba;
  font-size: 0.6rem;
  text-align: center;
  display: ${(props) => props.display};
`;

export const RateBox = styled.div`
  background-color: #fccfcf;
  border-radius: 50%;
  margin: 1rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 3rem;
  width: 3.5rem;
`;

export const PercentText = styled.p`
  font-size: 1rem;
`;

export const QuizBox = styled.div`
  background-color: #51cf66;
  border-radius: 1rem;
  text-align: center;
  width: 70%;
  margin: 0 auto;
  padding: 5% 0;
`;

export const QuizImg = styled.img`
  width: 50%;
  height: 50%;
`;

export const QuizButton = styled.p`
  text-align: center;
  font-size: 1rem;
  cursor: pointer;
  &:hover {
    color: #21a663;
  }
`;
