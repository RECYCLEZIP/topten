import { useEffect } from "react";
import { useNavigate } from "react-router";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { getData } from "../api";
import {
  categoryKindState,
  categoryPageState,
  categorySelectedState,
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

function CategoryList({
  backColor,
  padding,
}: {
  backColor?: string;
  padding?: string;
}) {
  const navigate = useNavigate();
  const [category, setCategory] = useRecoilState(categoryState);
  const setKind = useSetRecoilState(categoryKindState);
  const setPage = useSetRecoilState(categoryPageState);
  const url = window.location.pathname;

  const [isSelected, setIsSelected] = useRecoilState(categorySelectedState);

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
    newArr[index] = true;
    setIsSelected(newArr);
    setPage("");
    setKind(category[index].name);

    navigate(`/category/${category[index].name}`);
  };

  return (
    <CategoryContainer backColor={backColor} padding={padding}>
      <List>
        {category.map((list, index) => (
          <ImgContainer
            onClick={() => selectCategory(index)}
            key={index}
            disabled={isSelected[index]}
            isSelected={isSelected[index]}
          >
            <IMGBox>
              <IMG src={list.image}></IMG>
            </IMGBox>
            {url !== "/" ? (
              <CategoryText isSelected={isSelected[index]}>
                {list.name}
              </CategoryText>
            ) : (
              <CategoryText>{list.name}</CategoryText>
            )}
          </ImgContainer>
        ))}
        <ImgContainer visibility="hidden" />
        <ImgContainer visibility="hidden" />
        <ImgContainer visibility="hidden" />
        <ImgContainer visibility="hidden" />
        <ImgContainer visibility="hidden" />
        <ImgContainer visibility="hidden" />
      </List>
    </CategoryContainer>
  );
}

export default CategoryList;
