import { useNavigate } from "react-router";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { categoryKindState, categoryState } from "../../stores/atoms";
import {
  CategoryContainer,
  CategorySubTitle,
  CategoryTitle,
  IMGBox,
  IMG,
  List,
  CategoryText,
  ImgContainer,
} from "../../styles/mainStyles/CategoryStyle";
import { CategoryType } from "../../types/Main";

// main category section component
function CategorySection() {
  const navigate = useNavigate();
  const category = useRecoilValue(categoryState);
  const setKind = useSetRecoilState(categoryKindState);

  const selectCategory = (index: number) => {
    setKind(category[index].name);
    navigate(`/category/${category[index].name}`);
  };

  return (
    <CategoryContainer>
      <CategoryTitle>카테고리</CategoryTitle>
      <CategorySubTitle
        onClick={() => {
          navigate("/category");
          setKind("");
        }}
      >
        자세히 보기
      </CategorySubTitle>
      <List>
        {category.map((list: CategoryType, index) => (
          <ImgContainer key={index} onClick={() => selectCategory(index)}>
            <IMGBox>
              <IMG src={list.image}></IMG>
            </IMGBox>
            <CategoryText>{list.name}</CategoryText>
          </ImgContainer>
        ))}
      </List>
    </CategoryContainer>
  );
}

export default CategorySection;
