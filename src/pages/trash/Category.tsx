import { Route, Routes } from "react-router";
import { Helmet } from "react-helmet";
import { CategoryTitle } from "../../styles/mainStyles/CategoryStyle";
import CategoryItems from "./CategoryItems";
import CategoryList from "../../components/CategoryList";
import { CategoryTitleContainer } from "../../styles/trash/category";

// category page component
function Category() {
  return (
    <>
      <Helmet>
        <title>카테고리 - 분리수ZIP</title>
      </Helmet>
      <CategoryTitleContainer>
        <CategoryTitle>카테고리</CategoryTitle>
      </CategoryTitleContainer>
      <CategoryList backColor="#eaf0eb" />
      <Routes>
        <Route index element={<CategoryItems />} />
        <Route path={`:kind`} element={<CategoryItems />} />
      </Routes>
    </>
  );
}

export default Category;
