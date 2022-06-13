import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { getData } from "../../api";
import { categoryKindState } from "../../stores/atoms";
import {
  SearchBox,
  SearchText,
  SearchIcon,
  TitleContainer,
  ItemListContainer,
} from "../../styles/category/category";
import {
  ItemContainer,
  ItemImg,
  ItemText,
  ItemTitle,
  MoveButton,
} from "../../styles/category/items";

import { CategoryTitle } from "../../styles/mainStyles/CategoryStyle";
import { CategoryItemType } from "../../types/Trash";
import ItemCard from "./ItemCard";

function CategoryItems() {
  const kind = useRecoilValue(categoryKindState);
  const [list, setList] = useState<Array<CategoryItemType[]>>([]);
  const [page, setPage] = useState("");

  useEffect(() => {
    const getTrashList = async () => {
      try {
        setList([]);
        const res = await getData(`trash?category=${kind}&page=${page}`);
        setList((prev) => [...prev, res.data]);
        console.log(res.data);
      } catch {
        console.log("Error: data get request fail");
      }
    };
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
      <ItemListContainer>
        {list.map((items, index) => (
          <ItemCard key={index} items={items} />
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
    </>
  );
}

export default CategoryItems;
