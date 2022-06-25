import styled from "styled-components";

export const BarSection = styled.section`
  display: inline-flex;
`;

export const BarText = styled.div`
  margin-right: 1rem;
  font-size: 0.6rem;
`;

export const BarRedText = styled.span`
  font-size: 0.6rem;
  color: #a62121;
`;

export const ListSection = styled.section``;

export const ListTable = styled.table`
  width: 100%;

  border-collapse: collapse;
`;

export const ListTbody = styled.tbody`
  font-size: 0.6rem;
`;

export const ListTr = styled.tr`
  margin: 0.5rem 1rem;

  border-bottom: 1px solid #e3e3e3;

  &:last-child {
    border-bottom: none;
  }
`;

export const ListNumber = styled.td`
  width: 2rem;

  padding: 0.8rem 0.5rem;
  padding-left: 1rem;

  font-weight: 500;
  color: #979797;
`;

export const ListTitle = styled.td`
  padding: 0.5rem;

  cursor: pointer;
`;

export const ListAuthor = styled.td`
  width: 3rem;

  padding: 0.5rem;

  font-weight: 500;
  text-align: center;
  color: #979797;
`;

export const ListDate = styled.td`
  width: 5rem;

  padding: 0.5rem;
  padding-right: 1rem;

  font-weight: 500;
  text-align: right;
  color: #979797;
`;

export const ButtonContainer = styled.div`
  display: flex;
`;

export const ButtonWrapper = styled.div`
  margin-left: auto;
`;
