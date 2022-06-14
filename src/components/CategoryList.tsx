import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useRecoilState, useSetRecoilState } from "recoil";
import { getData } from "../api";
import {
  categoryItemState,
  categoryKindState,
  categoryPageState,
  categoryState,
} from "../stores/atoms";
import { CategoryContainer } from "../styles/trash/category";
import {
  List,
  ImgContainer,
  IMGBox,
  IMG,
  CategoryText,
} from "../styles/mainStyles/CategoryStyle";

function CategoryList({ backColor }: { backColor?: string }) {
  const navigate = useNavigate();
  const [category, setCategory] = useRecoilState(categoryState);
  const setKind = useSetRecoilState(categoryKindState);
  const setList = useSetRecoilState(categoryItemState);
  const setPage = useSetRecoilState(categoryPageState);

  const [isSelected, setIsSelected] = useState([false]);

  const getCategory = async () => {
    try {
      const res = await getData(`trash/categories`);
      setCategory(res.data);
    } catch {
      console.log("Error: data get request fail");
    }
  };

  useEffect(() => {
    getCategory();
  }, []);

  // selected category color change
  const selectCategory = (index: number) => {
    const newArr = Array(category.length).fill(false);
    newArr[index] = newArr[index] ? false : true;
    setIsSelected(newArr);
    setPage("");
    setKind(category[index].name);
    setList([]);

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
