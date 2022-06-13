import { useState } from "react";
import { useRecoilValue } from "recoil";
import { categoryState } from "../../stores/atoms";
import {
  CategoryContainer,
  SearchBox,
  SearchText,
  SearchIcon,
  TitleContainer,
  ItemContainer,
} from "../../styles/category/category";
import {
  CategoryText,
  CategoryTitle,
  IMG,
  IMGBox,
  ImgContainer,
  List,
} from "../../styles/mainStyles/CategoryStyle";
import { CategoryType } from "../../types/Main";
import ItemCard from "./ItemCard";

// category page component
function Category() {
  const category = useRecoilValue(categoryState);

  const [isSelected, setIsSelected] = useState([false]);

  // selected category color change
  const selectCategory = (index: number) => {
    const newArr = Array(category.length).fill(false);
    newArr[index] = true;
    setIsSelected(newArr);
  };

  return (
    <>
      <CategoryContainer>
        <CategoryTitle>카테고리</CategoryTitle>
        <List>
          {category.map((list: CategoryType, index) => (
            <ImgContainer key={index}>
              <IMGBox>
                <IMG src={list.image}></IMG>
              </IMGBox>
              <CategoryText
                onClick={() => selectCategory(index)}
                isSelected={isSelected[index]}
              >
                {list.name}
              </CategoryText>
            </ImgContainer>
          ))}
        </List>
      </CategoryContainer>
      <TitleContainer>
        <CategoryTitle>목록</CategoryTitle>
        <SearchBox>
          <SearchText />
          <SearchIcon></SearchIcon>
        </SearchBox>
      </TitleContainer>
      <ItemContainer>
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
      </ItemContainer>
    </>
  );
}

export default Category;
