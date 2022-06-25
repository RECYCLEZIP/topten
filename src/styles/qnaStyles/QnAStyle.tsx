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
`;

export const ListTbody = styled.tbody`
  font-size: 0.6rem;
`;

export const ListTr = styled.tr`
  margin: 0.5rem 0rem;

  /* display: flex; */
`;

export const ListNumber = styled.td`
  width: 2rem;

  padding: 0.5rem;
  padding-left: 0rem;

  color: #979797;
`;

export const ListTitle = styled.td`
  padding: 0.5rem;

  cursor: pointer;
`;

export const ListAuthor = styled.td`
  width: 3rem;

  padding: 0.5rem;

  text-align: center;
  color: #979797;
`;

export const ListDate = styled.td`
  width: 5rem;

  padding: 0.5rem;
  padding-right: 0rem;

  text-align: right;
  color: #979797;
`;
