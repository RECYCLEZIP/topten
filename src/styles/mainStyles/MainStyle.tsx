import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const AiContainer = styled.div`
  background-color: #69db7c;
  padding: 5% 0;
  text-align: center;
  @media (min-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const AiDescription = styled.div`
  @media (min-width: 768px) {
    margin-left: 1.5rem;
  }
`;

export const AiImg = styled.img`
  width: 40%;
`;

export const MainText = styled.p`
  color: white;

  font-size: 0.8rem;
  @media (min-width: 768px) {
    margin-top: 0;
  }
`;

export const TitleText = styled.p`
  font-size: 1rem;
`;
