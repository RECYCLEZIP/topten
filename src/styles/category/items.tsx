import styled from "styled-components";

export const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
  justify-content: center;
  margin-bottom: 7%;
`;

export const ItemTitle = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 5%;
`;

export const ItemImg = styled.img`
  width: 3.5rem;
  height: 3.5rem;
  cursor: pointer;
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
