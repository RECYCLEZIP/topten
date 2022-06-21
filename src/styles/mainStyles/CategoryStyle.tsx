import styled from "styled-components";

export const CategoryContainer = styled.div`
  margin: 3% 8%;
`;

export const CategoryTitle = styled.span`
  font-size: 1rem;
`;

export const CategorySubTitle = styled.button`
  all: unset;
  cursor: pointer;
  font-size: 0.6rem;
  color: #9eacba;
  margin-left: 0.6rem;
  &:hover {
    text-decoration: underline;
    text-decoration-thickness: 1px;
  }
`;

export const CategoryText = styled.p<{ isSelected?: boolean }>`
  font-size: 0.6rem;
  text-align: center;
  cursor: pointer;
  color: ${(props) => (props.isSelected ? "#21a663" : "black")};
`;

export const List = styled.div`
  height: 50%;
  margin-top: 2%;
  display: grid;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  grid-template-columns: repeat(3, 5rem);
  @media (min-width: 896px) {
    grid-template-columns: repeat(5, 5rem);
  }
  @media (min-width: 1300px) {
    grid-template-columns: repeat(7, 5rem);
  }
`;

export const ImgContainer = styled.button<{ isSelected: boolean }>`
  all: unset;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 80%;
  cursor: pointer;
  &:hover {
    text-decoration: ${(props) => (props.isSelected ? "none" : "underline")};
  }
`;

export const IMGBox = styled.div`
  width: 100%;
  height: 0;
  padding-bottom: 100%;
  border: 1px solid #dbdbdb;
  border-radius: 50%;
  overflow: hidden;
  background-color: white;
  display: flex;
  justify-content: center;
`;

export const IMG = styled.img`
  height: 4rem;
  padding: 1%;
`;
