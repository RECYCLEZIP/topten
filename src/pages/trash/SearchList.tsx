import { useNavigate } from "react-router";
import { useRecoilValue } from "recoil";
import { searchTrashState } from "../../stores/atoms";
import { ItemListContainer } from "../../styles/trash/category";
import {
  ItemContainer,
  ItemImg,
  ItemText,
  ItemTitle,
  MoveButton,
} from "../../styles/trash/items";

function SearchList() {
  const trashList = useRecoilValue(searchTrashState);
  const navigate = useNavigate();

  const moveItem = (id: string | undefined) => {
    navigate(`/trash/${id}`);
  };

  if (trashList.length === 0) {
    return <ItemListContainer>검색 결과가 없습니다!</ItemListContainer>;
  }

  return (
    <ItemListContainer>
      {trashList.map((trash, index) => (
        <ItemContainer key={index}>
          <ItemImg src={trash.image} onClick={() => moveItem(trash._id)} />
          <ItemTitle>
            <ItemText>{trash.title}</ItemText>
            <MoveButton onClick={() => moveItem(trash._id)}>자세히</MoveButton>
          </ItemTitle>
        </ItemContainer>
      ))}
      <ItemContainer opacity={0}>
        <ItemImg />
        <ItemTitle>
          <ItemText></ItemText>
          <MoveButton>자세히</MoveButton>
        </ItemTitle>
      </ItemContainer>
      <ItemContainer opacity={0}>
        <ItemImg />
        <ItemTitle>
          <ItemText></ItemText>
          <MoveButton>자세히</MoveButton>
        </ItemTitle>
      </ItemContainer>
    </ItemListContainer>
  );
}

export default SearchList;
