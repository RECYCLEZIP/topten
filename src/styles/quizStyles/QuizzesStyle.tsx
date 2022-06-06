import styled from "styled-components";

export const QuizCount = styled.p`
  color: #9eacba;
  font-size: 0.7rem;
  text-align: right;
`;

export const Icons = styled.div`
  margin: 2% 0;
  display: flex;
  justify-content: space-between;
`;

export const QuizOption = styled.div<{ isClick: boolean }>`
  border-radius: 0.5rem;
  box-shadow: 0px 0px 7px 2px #ccd4dc;

  padding: 3%;
  font-size: 0.7rem;
  margin: 1rem 0;

  background-color: ${(props) => (props.isClick ? "#22be70" : "white")};

  &:hover {
    background-color: ${(props) => (props.isClick ? "#22be70" : "#ebfbee")};
  }
`;

export const QuizNumber = styled.span<{ isClick: boolean }>`
  color: ${(props) => (props.isClick ? "white" : "#9eacba")};
  font-size: 0.8rem;
`;
