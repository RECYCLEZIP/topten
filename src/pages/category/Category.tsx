import { useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { categoryKindState, categoryState } from "../../stores/atoms";
import { CategoryContainer } from "../../styles/category/category";
import {
  CategoryText,
  CategoryTitle,
  IMG,
  IMGBox,
  ImgContainer,
  List,
} from "../../styles/mainStyles/CategoryStyle";
import CategoryItems from "./CategoryItems";

// category page component
function Category() {
  const category = useRecoilValue(categoryState);
  const setKind = useSetRecoilState(categoryKindState);

  const [isSelected, setIsSelected] = useState([false]);

  // selected category color change
  const selectCategory = (index: number) => {
    const newArr = Array(category.length).fill(false);
    newArr[index] = newArr[index] ? false : true;
    setIsSelected(newArr);
    setKind(category[index].name);
  };

  return (
    <>
      <CategoryContainer>
        <CategoryTitle>카테고리</CategoryTitle>
        <List>
          {category.map((list, index) => (
            <ImgContainer onClick={() => selectCategory(index)} key={index}>
              <IMGBox>
                <IMG src={list.image}></IMG>
              </IMGBox>
              <CategoryText isSelected={isSelected[index]}>
                {list.name}
              </CategoryText>
            </ImgContainer>
          ))}
        </List>
      </CategoryContainer>
      <CategoryItems />
    </>
  );
}

export default Category;
