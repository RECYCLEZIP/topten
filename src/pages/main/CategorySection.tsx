import { useNavigate } from "react-router";
import { useRecoilValue } from "recoil";
import { categoryState } from "../../stores/atoms";
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

  return (
    <CategoryContainer>
      <CategoryTitle>카테고리</CategoryTitle>
      <CategorySubTitle onClick={() => navigate("/category")}>
        자세히 보기
      </CategorySubTitle>
      <List>
        {category.map((list: CategoryType, index) => (
          <ImgContainer key={index}>
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
