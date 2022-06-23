import styled from "styled-components";
import { Button } from "../ButtonStyles";

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
  background-size: cover;
  visibility: ${(props) => props.visibility};
`;

export const GameButton = styled(Button)`
  animation: motion 0.5s linear 0s infinite alternate;

  @keyframes motion {
    0% {
      margin-top: 0.5rem;
    }
    100% {
      margin-top: 0.7rem;
    }
  }

  &:hover {
    animation-play-state: paused;
  }
`;

export const ResultButton = styled(GameButton)`
  background-color: #d9d9d9;
  margin-right: 0.3rem;
  color: black;

  &:hover {
    background-color: #a4a4a4;
  }
`;
