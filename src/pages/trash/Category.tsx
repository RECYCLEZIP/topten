import { Route, Routes, useNavigate } from "react-router";
import { Helmet } from "react-helmet";
import {
  CategorySubTitle,
  CategoryTitle,
} from "../../styles/mainStyles/CategoryStyle";
import CategoryItems from "./CategoryItems";
import CategoryList from "../../components/CategoryList";
import {
  CategoryTitleContainer,
  TitleContainer,
} from "../../styles/trash/category";
import Search from "./Search";
import SearchList from "./SearchList";
import {
  categoryKindState,
  categoryPageState,
  categorySelectedState,
  categoryState,
} from "../../stores/atoms";
import { useRecoilState, useSetRecoilState } from "recoil";

// category page component
function Category() {
  const navigate = useNavigate();
  const setKind = useSetRecoilState(categoryKindState);
  const setPage = useSetRecoilState(categoryPageState);
  const [isSelected, setIsSelected] = useRecoilState(categorySelectedState);
  const category = useRecoilState(categoryState);

  return (
    <>
      <Helmet>
        <title>카테고리 - 분리수ZIP</title>
      </Helmet>
      <CategoryTitleContainer>
        <CategoryTitle>카테고리</CategoryTitle>
        <CategorySubTitle
          onClick={() => {
            navigate("/category");
            setKind("");
            setPage("");
            setIsSelected(Array(category.length).fill(false));
          }}
          disabled={!isSelected[isSelected.indexOf(true)]}
        >
          전체 보기
        </CategorySubTitle>
      </CategoryTitleContainer>
      <CategoryList backColor="#eaf0eb" padding="4.2rem" />
      <TitleContainer>
        <CategoryTitle>목록</CategoryTitle>
        <Search />
      </TitleContainer>
      <Routes>
        <Route index element={<CategoryItems />} />
        <Route path={`:kind`} element={<CategoryItems />} />
        <Route path={`trash`} element={<SearchList />} />
      </Routes>
    </>
  );
}

export default Category;
