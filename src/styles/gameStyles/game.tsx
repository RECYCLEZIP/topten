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

export const RankContainer = styled(GameContainer)`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const RankTitleText = styled.p`
  font-size: 1rem;
  width: 100%;
  margin: 0;
  margin-bottom: 0.5rem;
  text-align: center;
`;

export const Top3Rank = styled.div`
  margin-top: 0.7rem;
  padding: 0.2rem 0.7rem;
  width: 100%;
  background-color: #65c8ff;
  box-shadow: 0px 0px 15px 5px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 0.5rem;

  &:hover {
    transform: scale(1.03);
    transition: transform 0.5s;
  }
`;

export const RankNameText = styled.p`
  font-size: 0.8rem;
  text-align: left;
  width: 75%;
`;

export const ScoreText = styled.p`
  text-align: right;
  font-size: 0.8rem;
`;

export const NumberText = styled.p`
  text-align: center;
  font-size: 1rem;
  margin-right: 0.3rem;
  width: 1.2rem;
`;
