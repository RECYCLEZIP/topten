import styled from "styled-components";

export const QuizListBox = styled.div`
  background-color: #e6ecf2;
  border-radius: 1rem;
  width: 70%;
  margin: 1rem auto;
  padding: 5%;
  &:hover {
    cursor: pointer;
    transform: scale(1.1);
    transition: transform 0.5s;
  }
  transform: scale(1);
  transition: transform 0.5s;
`;

export const QuizNumber = styled.div`
  background-color: #40a050;
  font-size: 0.6rem;
  border-radius: 1rem;
  color: white;
  padding: 1% 4%;
  display: inline-block;
`;

export const QuizTitle = styled.p`
  font-size: 0.8rem;
`;

export const QuizDescription = styled.p`
  font-size: 0.6rem;
`;
