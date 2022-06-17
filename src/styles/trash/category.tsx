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

export const SearchBox = styled.form`
  height: 0.6rem;
  border: 1px solid black;
  border-radius: 1rem;
  display: flex;
  padding: 0.2rem 0.4rem;
  position: relative;
  flex: 1 0 0;
  z-index: 3;
`;

export const SearchText = styled.input`
  font-size: 0.4rem;
  border: none;
  outline: none;
  margin: 0;
`;

export const SearchButton = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  font-size: 0.4rem;
`;

export const DropDownBox = styled.ul`
  width: 100%;
  margin: 0.1rem auto;
  padding: 8px 0;
  display: block;
  border: 1px solid black;
  background-color: white;
  list-style-type: none;
  position: absolute;
  left: 0;
  top: 100%;
  z-index: 3;
`;

export const DropDownItem = styled.li`
  padding: 0 16px;
  font-size: 0.4rem;
  font-weight: 0 !important;
  display: flex;
  align-items: center;
  margin: 0.2rem 0;
  cursor: pointer;
  &: hover {
    background-color: #ededed;
  }
`;

export const SearchTrashImg = styled.img`
  width: 2rem;
  height: 2rem;
  margin-right: 1rem;
`;
