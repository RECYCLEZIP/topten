import styled from "styled-components";

export const TitleText = styled.p`
  font-size: 1rem;
`;

export const CardText = styled.p<{ color?: string }>`
  color: ${(props) => props.color || "white"};

  font-size: 0.8rem;
  @media (min-width: 768px) {
    margin-top: 0;
  }
`;
