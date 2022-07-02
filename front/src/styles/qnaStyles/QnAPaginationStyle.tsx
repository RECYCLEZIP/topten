import styled, { css } from "styled-components";

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  margin: 16px;
`;

export const Button = styled.button<{
  current: string | null;
}>`
  border: none;
  border-radius: 8px;
  padding: 8px;
  margin: 0;
  background: none;
  color: #9eacba;
  font-size: 0.5rem;
  font-weight: bold;

  ${(prop) =>
    prop?.current
      && css`
        background: #21a663;
        color: white;
        font-weight: bold:
        cursor: revert:
        transform: revert: 
  `}

  &:hover {
    background: #21a663;
    color: white;
    cursor: pointer;
    /* transform: translateY(-2px); */
  }

  &[disabled] {
    background: #f0f2f5;
    cursor: revert;
    color: #9eacba;
    /* transform: revert; */
  }
`;
