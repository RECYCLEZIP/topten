import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useParams } from "react-router";
import { getData } from "../../api";
import { TitleText } from "../../styles/TextStyle";
import {
  KindBox,
  MiddleBox,
  MiddleContainer,
  MiddleText,
  ThrowText,
  TopContainer,
  TrashCard,
  TrashContainer,
  TrashImage,
  TrashTitle,
} from "../../styles/trash/trash";
import { TrashType } from "../../types/Trash";

function Item() {
  const id = useParams().id;
  const [trash, setTrash] = useState<TrashType>({});
  const [loading, setLoading] = useState(false);

  const getTrash = async () => {
    try {
      const res = await getData(`trash/${id}`);
      setTrash(res.data);
    } catch {
      console.log("Error: data get request fail");
    }
    setLoading(true);
  };

  useEffect(() => {
    getTrash();
  }, []);

  if (!loading) {
    return <div>Loading...</div>;
  }

  return (
    <TrashContainer>
      <Helmet>
        <title>{trash.title} 버리는 법 - 분리수ZIP</title>
      </Helmet>
      <TopContainer>
        <TrashImage src={trash.image}></TrashImage>
        <div>
          <TrashTitle>{trash.title}</TrashTitle>
          {trash.kind?.map((list) => (
            <KindBox>{list}</KindBox>
          ))}
        </div>
      </TopContainer>
      <MiddleContainer>
        <MiddleBox>
          <MiddleText>재활용</MiddleText>
          <MiddleText margin="0.5rem">
            {trash.recycle ? "가능" : "불가능"}
          </MiddleText>
        </MiddleBox>
        <MiddleBox>
          <MiddleText>분류</MiddleText>
          <MiddleText margin="0.5rem">{trash.category}</MiddleText>
        </MiddleBox>
      </MiddleContainer>
      <TitleText>버리는 방법</TitleText>
      <TrashCard>
        {trash.description?.throwAway.map((list) => (
          <ThrowText> {list}</ThrowText>
        ))}
      </TrashCard>
      <TitleText>TIP</TitleText>
      <TrashCard>
        {trash.description?.note.map((list) => (
          <ThrowText>{list}</ThrowText>
        ))}
      </TrashCard>
    </TrashContainer>
  );
}

export default Item;
