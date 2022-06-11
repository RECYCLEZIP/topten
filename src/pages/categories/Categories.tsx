import { useState } from "react";
import { img } from "../../assets/imgImport";
import {
  CategoryContainer,
  SearchBox,
  SearchText,
  SearchIcon,
  TitleContainer,
  ItemContainer,
} from "../../styles/categories/categories";
import {
  CategoryText,
  CategoryTitle,
  IMG,
  IMGBox,
  ImgContainer,
  List,
} from "../../styles/mainStyles/CategoryStyle";
import ItemCard from "./ItemCard";

function Categories() {
  const category = [
    "페트",
    "유리",
    "페트",
    "유리",
    "페트",
    "유리",
    "페트",
    "유리",
  ];

  const [isSelected, setIsSelected] = useState([false]);

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
          {img.category.map((img, index) => (
            <ImgContainer key={index}>
              <IMGBox>
                <IMG src={img}></IMG>
              </IMGBox>
              <CategoryText
                onClick={() => selectCategory(index)}
                isSelected={isSelected[index]}
              >
                {category[index]}
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

export default Categories;
