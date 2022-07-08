import styled from "styled-components";

export const QuizContainer = styled.div`
  width: 80%;
  padding: 3rem 1rem;
  margin: 0 auto;
  @media (min-width: 768px) {
    width: 45%;
  }
`;

export const QuizCount = styled.p`
  color: #9eacba;
  font-size: 0.6rem;
  text-align: right;
`;

export const QuestionBox = styled.div<{ width?: string }>`
  display: flex;
  justify-content: space-around;
  width: ${(props) => (props.width ? props.width + "%" : "90%")};
  align-items: center;
  background-color: #51cf66;
  border-radius: 1rem;
  margin: 0 auto;
  padding: 5% 4%;
  box-shadow: 0px 0px 10px rgba(139, 188, 153, 0.8);
  flex-wrap: wrap;

  @media (min-width: 768px) {
    width: ${(props) => props.width && `${Number(props.width) - 15}%`};
  }
`;

export const QuizQuestion = styled.div<{ width?: string }>`
  text-align: right;
  width: ${(props) => (props.width ? `${props.width}%` : "50%")};
  margin: 0.3rem 0;

  @media (min-width: 768px) {
    width: ${(props) => (props.width ? `${Number(props.width) - 20}%` : "40%")};
  }
`;

export const Icons = styled.div`
  margin: 1.5% 0;
  display: flex;
  justify-content: space-between;
`;

export const QuizOption = styled.div<{ isSelected: boolean }>`
  border-radius: 0.5rem;
  box-shadow: ${(props) =>
    props.isSelected
      ? "0px 0px 10px rgba(34, 190, 112, 0.8)"
      : "0px 0px 10px rgba(0, 0, 0, 0.2)"};

  padding: 2% 5%;
  font-size: 0.6rem;
  margin-top: 1rem;

  color: ${(props) => (props.isSelected ? "white" : "black")};
  background-color: ${(props) => (props.isSelected ? "#22be70" : "white")};

  &:hover {
    background-color: ${(props) => (props.isSelected ? "#22be70" : "#ebfbee")};
  }
`;

export const OptionNumber = styled.span<{ isSelected: boolean }>`
  color: ${(props) => (props.isSelected ? "white" : "#9eacba")};
  font-size: 0.7rem;
`;

export const MoveButton = styled.button<{ count?: number }>`
  border: none;
  background-color: white;
  font-weight: 700;
  display: flex;
  align-items: center;
  cursor: pointer;
  visibility: ${(props) => props.count && props.count === 1 && "hidden"};
`;

export const MoveText = styled.p`
  margin: 1% 0;
  color: #9eacba;
  font-size: 0.53rem;
`;

export const CorrectAnswer = styled.button`
  font-size: 0.5rem;
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
  margin-top: 1rem;
`;

export const TwoOption = styled.div<{ isSelected: boolean }>`
  width: 4rem;
  height: 4rem;
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
    width: 5rem;
    height: 5rem;
  }
`;

export const TextTwoOption = styled.div<{ isSelected: boolean }>`
  width: 4rem;
  height: 2rem;
  font-size: 0.8rem;
  padding: 3% 5%;
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
    width: 4rem;
    height: 2rem;
  }
`;

export const Result = styled.div`
  border-top: 1.4px solid #9eacba;
  margin: 7% 0;
`;

export const ResultText = styled.p<{ size?: string }>`
  font-size: ${(props) => props.size || "0.8rem"};
`;
