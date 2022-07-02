import styled from "styled-components";

export const QuizList = styled.div`
  padding: 2.3rem 8% 3%;
`;

export const QuizListBox = styled.div`
  border-radius: 1rem;
  margin: 1rem auto;
  padding: 3% 1.3rem;
  &:hover {
    cursor: pointer;
    transform: scale(1.03);
    transition: transform 0.5s;
  }
  transform: scale(1);
  transition: transform 0.5s;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
`;

export const QuizNumber = styled.p`
  background-color: #40a050;
  font-size: 0.45rem;
  font-weight: 400;
  border-radius: 0.5rem;
  color: white;
  padding: 0.2rem 0.8rem;
  margin: 0;
  display: inline-block;
`;

export const QuizText = styled.p<{ size?: string }>`
  font-size: ${(props) => props.size || "0.8rem"};
`;
