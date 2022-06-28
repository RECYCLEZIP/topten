import styled from "styled-components";

export const SearchBox = styled.form`
  height: 1rem;
  width: 8.7rem;
  border: 1px solid black;
  border-radius: 1rem;
  display: flex;
  padding: 0.2rem 0.4rem;
  position: relative;
  flex: 1 0 0;
  z-index: 3;
`;

export const SearchText = styled.input`
  font-size: 0.5rem;
  border: none;
  outline: none;
  margin: 0;
`;

export const ResetIcon = styled.img<{ visibility?: string }>`
  cursor: pointer;
  width: 1rem;
  visibility: ${(props) => props.visibility};
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
  font-size: 0.5rem;
  font-weight: 0 !important;
  display: flex;
  align-items: center;
  margin: 0.2rem 0;
  cursor: pointer;
  &:hover {
    background-color: #ededed;
  }
`;

export const SearchTrashImg = styled.img`
  width: 2rem;
  height: 2rem;
  margin-right: 1rem;
`;
