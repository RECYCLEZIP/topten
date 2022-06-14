import styled from "styled-components";
import { Search } from "@mui/icons-material";

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

export const SearchBox = styled.div`
  height: 0.6rem;
  border: 1px solid black;
  border-radius: 1rem;
  display: flex;
  justify-content: space-between;
  padding: 0.2rem 0.4rem;
`;

export const SearchIcon = styled(Search)`
  font-size: 70% !important;
`;

export const SearchText = styled.input`
  font-size: 0.4rem;
  border: none;
  &:focus {
    outline: none;
  }
`;
