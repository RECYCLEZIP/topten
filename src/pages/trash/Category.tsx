import { useState } from "react";
import { Route, Routes, useNavigate } from "react-router";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { categoryKindState, categoryState } from "../../stores/atoms";
import { Helmet } from "react-helmet";
import {
  CategoryText,
  CategoryTitle,
  IMG,
  IMGBox,
  ImgContainer,
  List,
} from "../../styles/mainStyles/CategoryStyle";
import CategoryItems from "./CategoryItems";
import { CategoryContainer } from "../../styles/category/category";

// category page component
function Category() {
  const category = useRecoilValue(categoryState);
  const setKind = useSetRecoilState(categoryKindState);

  const [isSelected, setIsSelected] = useState([false]);

  const navigate = useNavigate();

  // selected category color change
  const selectCategory = (index: number) => {
    const newArr = Array(category.length).fill(false);
    newArr[index] = newArr[index] ? false : true;
    setIsSelected(newArr);
    setKind(category[index].name);
    navigate(`./${category[index].name}`);
  };

  return (
    <>
      <Helmet>
        <title>카테고리 - 분리수집</title>
      </Helmet>
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
      <Routes>
        <Route path={``} element={<CategoryItems />} />
        <Route path={`/:kind`} element={<CategoryItems />} />
      </Routes>
      ;
    </>
  );
}

export default Category;
