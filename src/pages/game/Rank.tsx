import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useRecoilValue } from "recoil";
import { getData } from "../../api";
import { loginState } from "../../stores/atoms";
import { Button } from "../../styles/ButtonStyles";
import {
  RankContainer,
  RankNameText,
  RankTitleText,
  Top3Rank,
  ScoreText,
  NumberText,
  Ranker,
} from "../../styles/gameStyles/game";
import { RankDataType } from "../../types/Game";
import GoGameModal from "./GoGameModal";
import { customToastify } from "../../components/customToastify";
import { Helmet } from "react-helmet-async";
import Loading from "../../components/Loading";

const medal = ["🥇", "🥈", "🥉"];

// Game rank component
function Rank() {
  const navigate = useNavigate();
  const isLogin = useRecoilValue(loginState);
  const [open, setOpen] = useState(false);
  const [rankList, setRankList] = useState<RankDataType[]>([]);
  const [loading, setLoading] = useState(false);

  const goGame = () => {
    if (isLogin) {
      navigate("/game/play");
    } else {
      setOpen(true);
    }
  };

  useEffect(() => {
    const getRank = async () => {
      try {
        const res = await getData("users/rank");
        setRankList(res.data);
        setLoading(true);
      } catch (err: any) {
        customToastify("error", err?.response?.data?.message);
      }
    };
    getRank();
  }, []);

  if (!loading) {
    return <Loading />;
  }

  return (
    <>
      <Helmet>
        <title>분리수ZIP - 게임랭킹</title>
        <meta
          name="description"
          content="AI가 분류해주는 분리수거 서비스 게임페이지"
        />
        <link rel="canonical" href="/game/ranking" />
      </Helmet>
      <RankContainer>
        <GoGameModal open={open} onClose={() => setOpen(false)} />
        <RankTitleText>
          👑
          <br /> 게임 랭킹 <br />
          TOP 10
        </RankTitleText>
        <Button onClick={goGame}>신기록 도전</Button>
        {rankList.map((list, index) =>
          index < 3 ? (
            <Top3Rank key={index} index={index}>
              <Ranker>
                <NumberText font="1rem">
                  {index < 4 ? medal[index] : 4}
                </NumberText>
                <RankNameText>{list.username}님</RankNameText>
              </Ranker>
              <ScoreText>{list.topscore}점</ScoreText>
            </Top3Rank>
          ) : (
            <Top3Rank key={index} index={index} color="#c7ebff">
              <Ranker>
                <NumberText>{index + 1}</NumberText>
                <RankNameText>{list.username}님</RankNameText>
              </Ranker>
              <ScoreText>{list.topscore}점</ScoreText>
            </Top3Rank>
          ),
        )}
      </RankContainer>
    </>
  );
}

export default Rank;
