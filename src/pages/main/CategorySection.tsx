import { useNavigate } from "react-router";
import { useSetRecoilState } from "recoil";
import CategoryList from "../../components/CategoryList";
import {
  categoryItemState,
  categoryKindState,
  categoryPageState,
} from "../../stores/atoms";
import {
  CategoryContainer,
  CategorySubTitle,
  CategoryTitle,
} from "../../styles/mainStyles/CategoryStyle";

// main category section component
function CategorySection() {
  const navigate = useNavigate();
  const setKind = useSetRecoilState(categoryKindState);
  const setPage = useSetRecoilState(categoryPageState);
  const setList = useSetRecoilState(categoryItemState);

  return (
    <CategoryContainer>
      <CategoryTitle>카테고리</CategoryTitle>
      <CategorySubTitle
        onClick={() => {
          navigate("/category");
          setKind("");
          setPage("");
          setList([]);
        }}
      >
        자세히 보기
      </CategorySubTitle>
      <CategoryList />
    </CategoryContainer>
  );
}

export default CategorySection;
