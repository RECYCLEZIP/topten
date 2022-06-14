import { useNavigate } from "react-router";
import CategoryList from "../../components/CategoryList";
import {
  CategoryContainer,
  CategorySubTitle,
  CategoryTitle,
} from "../../styles/mainStyles/CategoryStyle";

// main category section component
function CategorySection() {
  const navigate = useNavigate();

  return (
    <CategoryContainer>
      <CategoryTitle>카테고리</CategoryTitle>
      <CategorySubTitle
        onClick={() => {
          navigate("/category");
        }}
      >
        자세히 보기
      </CategorySubTitle>
      <CategoryList />
    </CategoryContainer>
  );
}

export default CategorySection;
