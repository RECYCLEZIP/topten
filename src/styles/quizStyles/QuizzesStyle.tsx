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
  box-shadow: 0px 0px 10px rgba(139, 188, 153, 0.8);
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

export const QuizOption = styled.div<{ isSelected: boolean }>`
  border-radius: 0.5rem;
  box-shadow: ${(props) =>
    props.isSelected
      ? "0px 0px 10px rgba(34, 190, 112, 0.8)"
      : "0px 0px 10px rgba(0, 0, 0, 0.2)"};

  padding: 3%;
  font-size: 0.7rem;
  margin: 1rem 0;

  color: ${(props) => (props.isSelected ? "white" : "black")};
  background-color: ${(props) => (props.isSelected ? "#22be70" : "white")};

  &:hover {
    background-color: ${(props) => (props.isSelected ? "#22be70" : "#ebfbee")};
  }
`;

export const OptionNumber = styled.span<{ isSelected: boolean }>`
  color: ${(props) => (props.isSelected ? "white" : "#9eacba")};
  font-size: 0.8rem;
`;

export const MoveButton = styled.div<{ count?: number }>`
  display: flex;
  align-items: center;
  cursor: pointer;
  visibility: ${(props) => props.count && props.count === 1 && "hidden"};
`;

export const SubmitButton = styled.p`
  padding: 0 3%;
  display: flex;
  align-items: center;
  font-size: 0.6rem;
  background-color: #dfe6ed;
  border-radius: 1rem;
  cursor: pointer;

  &:hover {
    background-color: #21a663;
    color: white;
  }
`;

export const MoveText = styled.p`
  color: #9eacba;
  font-size: 0.7rem;
`;

export const CorrectAnswer = styled.button`
  font-size: 0.6rem;
  background-color: #dfe6ed;
  border: none;
  border-radius: 1rem;
  padding: 1% 5%;
  margin: 5% auto;
  margin-bottom: 3%;
  font-weight: 700;
  display: block;
  cursor: pointer;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.11);

  &:hover {
    background-color: #21a663;
    color: white;
    box-shadow: 0px 0px 10px rgba(34, 190, 112, 0.4);
  }
`;

export const TwoOptions = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

export const TwoOption = styled.div<{ isSelected: boolean }>`
  width: 7rem;
  height: 7rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #22be70;
  border-radius: 0.3rem;
  box-shadow: ${(props) =>
    props.isSelected
      ? "0px 0px 10px rgba(34, 190, 112, 0.8)"
      : "0px 0px 10px rgba(0, 0, 0, 0.2)"};
  cursor: pointer;

  color: ${(props) => (props.isSelected ? "white" : "#22be70;")};
  background-color: ${(props) => (props.isSelected ? "#22be70" : "white")};

  &:hover {
    background-color: ${(props) => (props.isSelected ? "#22be70" : "#ebfbee")};
  }

  @media (min-width: 768px) {
    width: 7.5rem;
    height: 7.5rem;
  }
`;

export const TextTwoOption = styled.div<{ isSelected: boolean }>`
  width: 5rem;
  height: 4rem;
  font-size: 1.5rem;
  padding: 3% 7%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #22be70;
  border-radius: 0.3rem;
  box-shadow: ${(props) =>
    props.isSelected
      ? "0px 0px 10px rgba(34, 190, 112, 0.8)"
      : "0px 0px 10px rgba(0, 0, 0, 0.2)"};
  cursor: pointer;

  color: ${(props) => (props.isSelected ? "white" : "#22be70;")};
  background-color: ${(props) => (props.isSelected ? "#22be70" : "white")};

  &:hover {
    background-color: ${(props) => (props.isSelected ? "#22be70" : "#ebfbee")};
  }

  @media (min-width: 768px) {
    width: 8rem;
    height: 4rem;
  }
`;

export const Result = styled.div`
  border-top: 1.4px solid #9eacba;
  margin: 7% 0;
`;

export const ResultText = styled.p<{ size?: string }>`
  font-size: ${(props) => props.size || "0.8rem"};
`;
