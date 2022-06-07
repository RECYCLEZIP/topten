import styled from "styled-components";

export const QuizCount = styled.p`
  color: #9eacba;
  font-size: 0.7rem;
  text-align: right;
`;

export const QuestionBox = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #51cf66;
  border-radius: 1rem;
  margin: 0 auto;
  padding: 5% 4%;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
`;

export const QuizQuestion = styled.div`
  text-align: right;
  width: 40%;
`;

export const Icons = styled.div`
  margin: 2% 0;
  display: flex;
  justify-content: space-between;
`;

export const QuizOption = styled.div<{ isClick: boolean }>`
  border-radius: 0.5rem;
  box-shadow: ${(props) =>
    props.isClick
      ? "0px 0px 10px rgba(34, 190, 112, 0.8)"
      : "0px 0px 10px rgba(0, 0, 0, 0.2)"};

  padding: 3%;
  font-size: 0.7rem;
  margin: 1rem 0;

  color: ${(props) => (props.isClick ? "white" : "black")};
  background-color: ${(props) => (props.isClick ? "#22be70" : "white")};

  &:hover {
    background-color: ${(props) => (props.isClick ? "#22be70" : "#ebfbee")};
  }
`;

export const OptionNumber = styled.span<{ isClick: boolean }>`
  color: ${(props) => (props.isClick ? "white" : "#9eacba")};
  font-size: 0.8rem;
`;

export const MoveButton = styled.div`
  display: flex;
  align-items: center;
`;

export const MoveText = styled.p`
  color: #9eacba;
  font-size: 0.7rem;
`;

export const CorrectAnswer = styled.button`
  background-color: #dfe6ed;
  border: none;
  border-radius: 1rem;
  padding: 1% 5%;
  margin: 5% auto;
  font-weight: 700;
  display: block;
  cursor: pointer;

  &:hover {
    background-color: #51cf66;
  }
`;

export const TwoOptions = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

export const TwoOption = styled.div<{ isClick: boolean }>`
  width: 7rem;
  height: 7rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #22be70;
  border-radius: 0.3rem;
  box-shadow: ${(props) =>
    props.isClick
      ? "0px 0px 10px rgba(34, 190, 112, 0.8)"
      : "0px 0px 10px rgba(0, 0, 0, 0.2)"};
  cursor: pointer;

  color: ${(props) => (props.isClick ? "white" : "#22be70;")};
  background-color: ${(props) => (props.isClick ? "#22be70" : "#f8fcf9")};

  &:hover {
    background-color: ${(props) => (props.isClick ? "#22be70" : "#ebfbee")};
  }

  @media (min-width: 768px) {
    width: 7.5rem;
    height: 7.5rem;
  }
`;

export const TextTwoOption = styled.div<{ isClick: boolean }>`
  width: 8rem;
  height: 4rem;
  font-size: 2rem;
  padding: 3% 7%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #22be70;
  border-radius: 0.3rem;
  box-shadow: ${(props) =>
    props.isClick
      ? "0px 0px 10px rgba(34, 190, 112, 0.8)"
      : "0px 0px 10px rgba(0, 0, 0, 0.2)"};
  cursor: pointer;

  color: ${(props) => (props.isClick ? "white" : "#22be70;")};
  background-color: ${(props) => (props.isClick ? "#22be70" : "#f8fcf9")};

  &:hover {
    background-color: ${(props) => (props.isClick ? "#22be70" : "#ebfbee")};
  }
`;
