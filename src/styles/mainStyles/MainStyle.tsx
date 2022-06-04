import styled from "styled-components";

export const MainContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const AiContainer = styled.div`
  background-color: #69db7c;
  padding: 5% 0;
  text-align: center;
  @media (min-width: 768px) {
    display: flex;
    justify-content: space-around;
    padding: 5% 0;
  }
`;

export const AiDescription = styled.div`
  margin: auto 0;
  align-items: center;
  @media (min-width: 768px) {
    size: 1.5rem;
  }
`;

export const NewsSection = styled.div`
  margin: 0 5%;
`;

export const AiImg = styled.img`
  width: 50%;
  @media (min-width: 768px) {
    size: 1.5rem;
  }
`;

export const MainText = styled.p`
  color: white;
  font-weight: bold;
  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const TitleText = styled.p`
  font-weight: bold;
`;
