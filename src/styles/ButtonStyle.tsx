import styled from "styled-components";

export const Button = styled.button`
  padding: 1rem;
  display: inline-block;
  background-color: #21a663;
  border: none;
  border-radius: 2rem;
`;

export const ButtonText = styled.span`
  color: white;
  font-weight: bold;
  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
`;
