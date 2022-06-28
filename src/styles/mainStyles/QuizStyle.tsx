import styled from "styled-components";

export const RankContainer = styled.div`
  width: 80%;
  display: flex;
  justify-content: center;
  margin: 2% auto;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const QuizLank = styled.div`
  margin: 2% 8% 0;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const WrongPercent = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;

  @media (min-width: 768px) {
    margin-right: 0.6rem;
  }
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
  width: 6rem;
  height: 6rem;
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
  width: 1.8rem;
`;

export const BackButton = styled.button`
  display: flex;
  align-items: center;
  border: none;
  background-color: white;
  margin: 0.5rem 0;
  font-size: 0.5rem;
  font-weight: 600;
  cursor: pointer;
`;

export const BackIcon = styled.img`
  width: 1rem;
  margin-right: 0.3rem;
`;
