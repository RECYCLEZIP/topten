import { img } from "../../assets/imgImport";
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

function CategorySection() {
  const category = [
    "페트",
    "유리",
    "페트",
    "유리",
    "페트",
    "유리",
    "페트",
    "유리",
  ];
  return (
    <CategoryContainer>
      <CategoryTitle>카테고리</CategoryTitle>
      <CategorySubTitle>자세히 보기</CategorySubTitle>
      <List>
        {img.category.map((img, index) => (
          <ImgContainer key={index}>
            <IMGBox>
              <IMG src={img}></IMG>
            </IMGBox>
            <CategoryText>{category[index]}</CategoryText>
          </ImgContainer>
        ))}
      </List>
    </CategoryContainer>
  );
}

export default CategorySection;
