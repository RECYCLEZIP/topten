import styled from "styled-components";

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
