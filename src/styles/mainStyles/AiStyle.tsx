import styled from "styled-components";

export const AiContainer = styled.div`
  background-color: #69db7c;
  padding: 1.3rem 0;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const AiImg = styled.img`
  width: 50%;
  height: 40%;

  @media (min-width: 768px) {
    width: 35%;
  }
`;

export const AiText = styled.p`
  color: white;
`;
