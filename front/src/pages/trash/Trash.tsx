import { useEffect, useState } from "react";
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
import { customToastify } from "../../components/customToastify";
import { Helmet } from "react-helmet-async";
import Loading from "../../components/Loading";

function Item() {
  const id = useParams().id;
  const [trash, setTrash] = useState<TrashType>({});
  const [loading, setLoading] = useState(false);

  const getTrash = async () => {
    try {
      const res = await getData(`trash/${id}`);
      setTrash(res.data);
      setLoading(true);
    } catch (err: any) {
      customToastify("error", err?.response?.data?.message);
    }
  };

  useEffect(() => {
    getTrash();
  }, []);

  if (!loading) {
    return <Loading />;
  }

  return (
    <TrashContainer>
      <Helmet>
        <title>분리수ZIP - {trash.title} 버리는 법</title>
        <meta name="description" content={trash.title + "버리는 법"} />
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
