import styled from "styled-components";

export const ItemContainer = styled.div<{ opacity?: number }>`
  display: flex;
  align-items: center;
  width: 6rem;
  margin-bottom: 7%;
  opacity: ${(props) => props.opacity};
  @media (min-width: 768px) {
    width: 10rem;
    justify-content: center;
  }
`;

export const ItemTitle = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 5%;

  @media (min-width: 768px) {
    width: 3rem;
  }
`;

export const ItemImg = styled.img`
  width: 2.5rem;
  height: 2.5rem;
  cursor: pointer;

  @media (min-width: 768px) {
    width: 3.5rem;
    height: 3.5rem;
  }
`;

export const ItemText = styled.span`
  font-size: 0.6rem;
`;

export const MoveButton = styled.button`
  all: unset;
  color: #898989;
  background: none;
  font-size: 0.6rem;
  text-align: left;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
    text-decoration-thickness: 1px;
  }
`;
