import { useNavigate } from "react-router";
import { Button } from "../../styles/ButtonStyles";
import { GameContainer } from "../../styles/gameStyles/game";
import { TitleText } from "../../styles/TextStyle";

function Rank() {
  const navigate = useNavigate();
  return (
    <GameContainer>
      <TitleText>👑게임 랭킹</TitleText>
      <Button onClick={() => navigate("/game/play")}>신기록 도전</Button>
    </GameContainer>
  );
}

export default Rank;
