import { useNavigate } from "react-router";
import { Button } from "../../styles/ButtonStyles";
import {
  RankContainer,
  RankNameText,
  RankTitleText,
  Top3Rank,
  ScoreText,
  NumberText,
} from "../../styles/gameStyles/game";

function Rank() {
  const navigate = useNavigate();
  return (
    <RankContainer>
      <RankTitleText>
        👑
        <br /> 게임 랭킹 <br />
        TOP 10
      </RankTitleText>
      <Button onClick={() => navigate("/game/play")}>신기록 도전</Button>
      <Top3Rank>
        <NumberText>🥇</NumberText>
        <RankNameText>이 구역의 쓰레기 형님</RankNameText>
        <ScoreText>202점</ScoreText>
      </Top3Rank>
      <Top3Rank>
        <NumberText>🥈</NumberText>
        <RankNameText>이 구역의 쓰레기 형님</RankNameText>
        <ScoreText>202점</ScoreText>
      </Top3Rank>
      <Top3Rank>
        <NumberText>🥉</NumberText>
        <RankNameText>이 구역의 쓰레기 형님</RankNameText>
        <ScoreText>202점</ScoreText>
      </Top3Rank>
      <Top3Rank color="#c7ebff">
        <NumberText>4</NumberText>
        <RankNameText>이 구역의 쓰레기 형님</RankNameText>
        <ScoreText>202점</ScoreText>
      </Top3Rank>
    </RankContainer>
  );
}

export default Rank;
