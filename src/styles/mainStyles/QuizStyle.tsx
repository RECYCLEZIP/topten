import styled from "styled-components";

export const RankContainer = styled.div`
  width: 80%;
  display: flex;
  justify-content: center;
  margin: 2% 0;
  padding: 0 8%;
  flex-direction: column;
  @media (min-width: 768px) {
    flex-direction: row;
    padding: 0 10%;
  }
`;

export const QuizLank = styled.div`
  padding: 0 5%;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const WrongPercent = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-right: 5%;
`;

export const RateText = styled.p<{ display?: string }>`
  color: #9eacba;
  font-size: 0.6rem;
  text-align: center;
  margin: 0;
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

export const QuizImg = styled.img`
  width: 50%;
  border-radius: 1rem;
`;

export const QuizButton = styled.p`
  text-align: center;
  font-size: 1rem;
  cursor: pointer;
  &:hover {
    color: #21a663;
  }
`;

export const LogoImg = styled.img`
  width: 18%;
`;
