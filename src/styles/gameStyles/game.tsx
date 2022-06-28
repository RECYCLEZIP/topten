import styled from "styled-components";
import { Button } from "../ButtonStyles";

export const GameContainer = styled.div<{ Img: string }>`
  padding: 3.3rem 1rem 0.1rem;
  margin: 0 auto;
  width: auto;
  height: auto;

  background-image: url(${(props) => props.Img});
  background-size: 100% 100%;

  @media (min-width: 768px) {
    width: 60vw;
  }
`;

export const RankContainer = styled.div`
  width: unset;
  display: flex;
  justify-content: center;
  margin: 0 1.5rem;
  padding: 3rem 0;
  flex-wrap: wrap;
  background-color: white;
`;

export const DragTrashContainer = styled.div`
  height: 50vh;
  position: relative;

  @media (min-width: 768px) {
    width: 60vw;
    height: 16rem;
  }
`;

export const DropTrashContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const TrashCard = styled.div<{
  left: string;
  top: string;
  img: string;
  visibility: string;
}>`
  position: absolute;
  width: 2rem;
  height: 2rem;
  left: ${(props) => props.left};
  top: ${(props) => props.top};
  background-image: url(${(props) => props.img});
  background-size: cover;
  visibility: ${(props) => props.visibility};
`;

export const BinCard = styled.div<{ image: string }>`
  width: 3.4rem;
  height: 5rem;
  background-image: url(${(props) => props.image});
  background-size: cover;
`;

export const BinList = styled.div`
  height: 5rem;
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
  background-color: #ababab;
  margin-right: 0.3rem;

  &:hover {
    background-color: #a4a4a4;
  }
`;

export const GoLoginButton = styled(Button)`
  margin-right: 0.3rem;
  margin-top: 0.5rem;
`;

export const GoGameButton = styled(Button)`
  background-color: #ababab;

  &:hover {
    background-color: #a4a4a4;
  }
`;

export const RankTitleText = styled.p`
  font-size: 1rem;
  width: 100%;
  margin: 0;
  margin-bottom: 0.5rem;
  text-align: center;
`;

export const Top3Rank = styled.div<{ color?: string; index: number }>`
  opacity: 0;
  margin-top: 0.7rem;
  padding: 0.7rem 1rem;
  width: 100%;
  background-color: ${(props) => (props.color ? props.color : "#65c8ff")};
  box-shadow: 0px 0px 15px 5px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 0.5rem;
  animation: ${(props) => `appear 1s 0.${props.index}s`};
  animation-fill-mode: forwards;

  &:hover {
    transform: scale(1.03);
    transition: transform 0.5s;
  }

  @keyframes appear {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

export const Ranker = styled.div`
  display: flex;
  align-items: center;
  width: 70%;
`;

export const RankNameText = styled.span`
  font-size: 0.8rem;
  text-align: left;
`;

export const ScoreText = styled.span`
  text-align: right;
  font-size: 0.8rem;
`;

export const NumberText = styled.span<{ font?: string }>`
  text-align: center;
  font-size: ${(props) => (props.font ? props.font : "0.8rem")};
  margin-right: 0.3rem;
  width: 1.2rem;
`;

export const GameBar = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const GameLevel = styled.span`
  color: white;
  font-size: 0.8rem;

  @media (min-width: 768px) {
    margin-right: 0.3rem;
    width: 4rem;
  }
`;

export const GameBox = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.2rem 0.4rem;
  color: white;
  font-size: 0.8rem;
  background: rgba(255, 255, 255, 0.16);
  border: 2px solid white;
  border-radius: 0.5rem;
  width: 40%;
`;

export const GameDescription = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 0.3rem;
  width: 100%;
`;
