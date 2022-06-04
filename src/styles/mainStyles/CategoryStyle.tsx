import styled from "styled-components";

export const CategoryContainer = styled.div`
  margin: 3% 5%;
`;

export const CategoryTitle = styled.span`
  font-size: 1rem;
  margin: 5% 0;
`;

export const CategorySubTitle = styled.span`
  font-size: 0.7rem;
  color: #9eacba;
  margin-left: 0.8rem;
`;

export const CategoryText = styled.p`
  font-size: 0.6rem;
  text-align: center;
`;

export const List = styled.div`
  margin-top: 2%;
  height: 4rem;
  display: grid;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  grid-template-columns: repeat(3, 5rem);
  @media (min-width: 768px) {
    grid-template-columns: repeat(6, 5rem);
  }
`;

export const ImgContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const IMGBox = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  border: 1px solid #dbdbdb;
  border-radius: 50%;
  overflow: hidden;
`;

export const IMG = styled.img`
  height: 4rem;
  background-color: white;
  display: block;
  margin: 0 auto;
`;
