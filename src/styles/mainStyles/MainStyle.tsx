import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CardText = styled.p`
  color: white;

  font-size: 0.8rem;
  @media (min-width: 768px) {
    margin-top: 0;
  }
`;
