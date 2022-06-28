import styled from "styled-components";

export const CategoryContainer = styled.div<{
  backColor?: string;
  padding?: string;
}>`
  background-color: ${(props) => props.backColor};
  padding: ${(props) => (props.padding ? `1rem 0.5rem` : "1rem 0")};

  @media (min-width: 768px) {
    padding: ${(props) =>
      props.padding ? `1rem ${props.padding}` : "1rem 2rem"};
  }
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
  margin: 1.5rem 1rem;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;
