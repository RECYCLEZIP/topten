import styled from "styled-components";

export const BarSection = styled.section`
  display: inline-flex;

  width: 100%;
`;

export const BarText = styled.div`
  margin-right: 1rem;
  font-size: 0.6rem;
`;

export const BarRedText = styled.span`
  font-size: 0.6rem;
  color: #a62121;
`;

export const SearchContainer = styled.div`
  /* width: 20%; */

  margin-left: auto;

  display: flex;
`;

export const SearchSelect = styled.select`
  padding: 0.1rem 0.5rem;
  padding-right: 1rem;
  margin-right: 0.5rem;

  line-height: 1rem;

  background: #f7f9fa;

  border: 1px solid #dadde6;
  border-radius: 0.8rem;

  font-size: 0.53rem;

  vertical-align: middle;

  /* background-image: none; */

  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  /* &:hover {
    background: #f7f9fa;
  }

  &:focus {
    border-color: #69db7c;
    outline: none;
  } */
`;

export const SearchInput = styled.input`
  width: 100%;

  padding: 0.1rem 0.8rem;
  line-height: 1rem;

  /* border: 1px solid #dadde6; */
  border: 1px solid #4f4f4f;
  border-radius: 0.8rem;

  font-size: 0.53rem;

  /* &:hover {
    background: #f7f9fa;
  }

  &:focus {
    border-color: #69db7c;
    outline: none;
  } */
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

export const NothingTd = styled.td`
  padding: 0.8rem 0.5rem;

  text-align: center;
  font-weight: 500;
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
