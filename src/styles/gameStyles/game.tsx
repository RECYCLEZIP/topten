import styled from "styled-components";

export const GameContainer = styled.div`
  margin: 4rem 2rem;
`;

export const TrashCard = styled.div<{
  left: string;
  top: string;
  img: string;
  visibility: string;
}>`
  position: absolute;
  width: 40px;
  height: 40px;
  left: ${(props) => props.left};
  top: ${(props) => props.top};
  background-image: url(${(props) => props.img});
  visibility: ${(props) => props.visibility};
`;
