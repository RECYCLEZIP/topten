import { useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { getData } from "../../api";
import { categoryItemState, categoryKindState } from "../../stores/atoms";
import {
  SearchBox,
  SearchText,
  SearchIcon,
  TitleContainer,
  ItemContainer,
} from "../../styles/category/category";

import { CategoryTitle } from "../../styles/mainStyles/CategoryStyle";
import ItemCard from "./ItemCard";

function CategoryItems() {
  const kind = useRecoilValue(categoryKindState);
  const [items, setItems] = useRecoilState(categoryItemState);

  const getTrashList = async () => {
    try {
      const res = await getData(`trash?category=${kind}`);
      setItems(res.data);
      console.log(res.data);
    } catch {
      console.log("Error: data get request fail");
    }
  };

  useEffect(() => {
    getTrashList();
  }, [kind]);

  return (
    <>
      <TitleContainer>
        <CategoryTitle>목록</CategoryTitle>
        <SearchBox>
          <SearchText />
          <SearchIcon></SearchIcon>
        </SearchBox>
      </TitleContainer>
      <ItemContainer>
        {items.map((item) => (
          <ItemCard item={item} />
        ))}
      </ItemContainer>
    </>
  );
}

export default CategoryItems;
