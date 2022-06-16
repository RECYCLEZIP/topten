import { Route, Routes, useParams } from "react-router";
import { Helmet } from "react-helmet";
import { CategoryTitle } from "../../styles/mainStyles/CategoryStyle";
import CategoryItems from "./CategoryItems";
import CategoryList from "../../components/CategoryList";
import {
  CategoryTitleContainer,
  TitleContainer,
} from "../../styles/trash/category";
import Search from "./Search";
import SearchList from "./SearchList";

// category page component
function Category() {
  const params = useParams();
  console.log(params);

  return (
    <>
      <Helmet>
        <title>카테고리 - 분리수ZIP</title>
      </Helmet>
      <CategoryTitleContainer>
        <CategoryTitle>카테고리</CategoryTitle>
      </CategoryTitleContainer>
      <CategoryList backColor="#eaf0eb" />
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
