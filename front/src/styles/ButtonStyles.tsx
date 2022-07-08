import styled from "styled-components";

export const Button = styled.button`
  padding: 0.3rem 1rem;
  display: inline-block;
  background-color: #21a663;
  border: none;
  border-radius: 2rem;
  margin-bottom: 0.5rem;

  color: white;
  font-size: 0.6rem;
  font-weight: bold;

  cursor: pointer;
  :disabled {
    background-color: #b1b1b1;
  }

  &:hover {
    :disabled {
      background-color: #b1b1b1;
    }
    background-color: #2b9a61;
    transition: all 0.5s;
  }
`;
