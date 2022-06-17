import styled from "styled-components";

export const CategoryContainer = styled.div<{ backColor?: string }>`
  background-color: ${(props) => props.backColor};
  padding: 1rem 8% 1rem;
`;

export const TitleContainer = styled.div`
  margin: 3% 8%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CategoryTitleContainer = styled.div`
  padding: 3rem 8% 0;
  background-color: #eaf0eb;
`;

export const ItemListContainer = styled.div`
  margin: 3% 15%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;
