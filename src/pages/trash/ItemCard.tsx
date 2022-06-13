import {
  ItemContainer,
  ItemImg,
  ItemText,
  ItemTitle,
  MoveButton,
} from "../../styles/category/items";
import { TrashItemType } from "../../types/Trash";

// each category item card component
function ItemCard({ items }: TrashItemType) {
  return (
    <>
      {items.map((item, index) => (
        <ItemContainer key={index}>
          <ItemImg src={item.image} />
          <ItemTitle>
            <ItemText>{item.title}</ItemText>
            <MoveButton>자세히</MoveButton>
          </ItemTitle>
        </ItemContainer>
      ))}
    </>
  );
}

export default ItemCard;
