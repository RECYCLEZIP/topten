import styled from "styled-components";

export const TrashContainer = styled.div`
  margin: 4rem 10%;
`;

export const TrashImage = styled.img`
  width: 5rem;
  height: 5rem;
  margin-right: 3rem;
`;

export const TrashCard = styled.div`
  box-shadow: 0px 0px 40px rgba(158, 147, 147, 0.23);
  padding: 0.5rem 1.3rem;
  border-radius: 0.7rem;
  width: 80%;
  margin: 0 auto;
`;

export const KindBox = styled.button`
  background-color: #51cf66;
  color: white;
  border: none;
  border-radius: 1rem;
  font-size: 0.4rem;
  font-weight: 400;
  margin-right: 0.3rem;
  padding: 0.2rem 0.4rem;
`;

export const ThrowText = styled.li`
  font-size: 0.6rem;
  font-weight: 500;
  margin: 0.5rem 0;
  list-style-position: inside;
  text-indent: -0.9rem;
  padding-left: 0.6rem;
`;

export const MiddleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MiddleBox = styled.div`
  background-color: #f0f2f5;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
  text-align: center;
  margin: 1rem;
  padding: 0.7rem 1.5rem;
  width: 23%;
`;

export const MiddleText = styled.p<{ margin?: string }>`
  margin: 0;
  font-size: 0.6rem;
  margin-top: ${(props) => props.margin};
`;

export const TopContainer = styled.div`
  display: flex;
  margin-bottom: 1rem;
  margin-left: 2rem;
  align-items: center;
  width: 80%;
`;

export const TrashTitle = styled.p`
  margin: 0;
  margin-bottom: 0.3rem;
  font-size: 1rem;
`;
