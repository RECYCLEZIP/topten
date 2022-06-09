import styled from "styled-components";

export const CategoryContainer = styled.div`
  margin: 3% 5%;
  height: 100%;
`;

export const CategoryTitle = styled.span`
  font-size: 1rem;
`;

export const CategorySubTitle = styled.span`
  font-size: 0.6rem;
  color: #9eacba;
  margin-left: 0.8rem;
`;

export const CategoryText = styled.p`
  font-size: 0.6rem;
  text-align: center;
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

export const ImgContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
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
