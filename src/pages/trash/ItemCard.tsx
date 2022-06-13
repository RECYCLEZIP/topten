import {
  ItemContainer,
  ItemImg,
  ItemText,
  ItemTitle,
  MoveButton,
} from "../../styles/category/items";
import { CategoryItemType } from "../../types/Main";

// each category item card component
function ItemCard({ item }: { item: CategoryItemType }) {
  return (
    <ItemContainer>
      <ItemImg src={item.image} />
      <ItemTitle>
        <ItemText>{item.title}</ItemText>
        <MoveButton>자세히</MoveButton>
      </ItemTitle>
    </ItemContainer>
  );
}

export default ItemCard;
