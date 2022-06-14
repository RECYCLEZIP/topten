import { useState } from "react";
import { useNavigate } from "react-router";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { categoryKindState, categoryState } from "../stores/atoms";
import { CategoryContainer } from "../styles/category/category";
import {
  List,
  ImgContainer,
  IMGBox,
  IMG,
  CategoryText,
} from "../styles/mainStyles/CategoryStyle";

function CategoryList({ backColor }: { backColor?: string }) {
  const navigate = useNavigate();
  const category = useRecoilValue(categoryState);
  const setKind = useSetRecoilState(categoryKindState);

  const [isSelected, setIsSelected] = useState([false]);

  // selected category color change
  const selectCategory = (index: number) => {
    const newArr = Array(category.length).fill(false);
    newArr[index] = newArr[index] ? false : true;
    setIsSelected(newArr);
    setKind(category[index].name);
    navigate(`/category/${category[index].name}`);
  };

  return (
    <CategoryContainer backColor={backColor}>
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
  );
}

export default CategoryList;
