import { img } from "../../assets/imgImport";
import {
  ItemContainer,
  ItemImg,
  ItemText,
  ItemTitle,
  MoveButton,
} from "../../styles/category/items";

function ItemCard() {
  return (
    <ItemContainer>
      <ItemImg src={img.sample} />
      <ItemTitle>
        <ItemText>투명 페트병</ItemText>
        <MoveButton>자세히</MoveButton>
      </ItemTitle>
    </ItemContainer>
  );
}

export default ItemCard;
