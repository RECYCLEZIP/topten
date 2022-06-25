import { useState } from "react";
import { useNavigate } from "react-router";
import { useRecoilValue } from "recoil";
import { loginState } from "../../stores/atoms";
import { Button } from "../../styles/ButtonStyles";
import {
  RankContainer,
  RankNameText,
  RankTitleText,
  Top3Rank,
  ScoreText,
  NumberText,
} from "../../styles/gameStyles/game";
import GoGameModal from "./GoGameModal";

function Rank() {
  const navigate = useNavigate();
  const isLogin = useRecoilValue(loginState);
  const [open, setOpen] = useState(false);

  const goGame = () => {
    if (isLogin) {
      navigate("/game/play");
    } else {
      setOpen(true);
    }
  };

  return (
    <RankContainer>
      <GoGameModal open={open} setOpen={setOpen} />
      <RankTitleText>
        👑
        <br /> 게임 랭킹 <br />
        TOP 10
      </RankTitleText>
      <Button onClick={goGame}>신기록 도전</Button>
      <Top3Rank index={1}>
        <NumberText font="1rem">🥇</NumberText>
        <RankNameText>이 구역의 쓰레기 형님</RankNameText>
        <ScoreText>202점</ScoreText>
      </Top3Rank>
      <Top3Rank index={2}>
        <NumberText font="1rem">🥈</NumberText>
        <RankNameText>이 구역의 쓰레기 형님</RankNameText>
        <ScoreText>202점</ScoreText>
      </Top3Rank>
      <Top3Rank index={3}>
        <NumberText font="1rem">🥉</NumberText>
        <RankNameText>이 구역의 쓰레기 형님</RankNameText>
        <ScoreText>202점</ScoreText>
      </Top3Rank>
      <Top3Rank index={4} color="#c7ebff">
        <NumberText>4</NumberText>
        <RankNameText>이 구역의 쓰레기 형님</RankNameText>
        <ScoreText>202점</ScoreText>
      </Top3Rank>
    </RankContainer>
  );
}

export default Rank;
