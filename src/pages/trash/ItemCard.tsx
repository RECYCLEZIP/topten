import { useRef } from "react";
import {
  ItemContainer,
  ItemImg,
  ItemText,
  ItemTitle,
  MoveButton,
} from "../../styles/trash/items";
import { TrashItemType } from "../../types/Trash";

// each category item card component
function ItemCard({ items }: TrashItemType) {
  return (
    <ItemContainer>
      <ItemImg />
      <ItemTitle>
        <ItemText></ItemText>
        <MoveButton>자세히</MoveButton>
      </ItemTitle>
    </ItemContainer>
  );
}

export default ItemCard;
