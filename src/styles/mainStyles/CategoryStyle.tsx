import styled from "styled-components";

export const CategoryContainer = styled.div`
  margin: 1rem 8% 0;
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
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

export const ImgContainer = styled.button<{
  isSelected?: boolean;
  visibility?: string;
}>`
  all: unset;
  margin: 0 0.4rem;
  display: flex;
  flex-direction: column;
  width: 3rem;
  cursor: pointer;
  visibility: ${(props) => props.visibility};

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
  height: 3rem;
  padding: 1%;
`;
