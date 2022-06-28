import styled from "styled-components";
import { Button } from "../ButtonStyles";
import { RegisterInput, RegisterText } from "./users";

export const UserPageContainer = styled.div`
  margin: 4rem 2rem;
`;

export const EmailText = styled.p`
  color: #9eacba;
  font-size: 0.6rem;
`;

export const NameText = styled.span`
  font-size: 1rem;
`;

export const EditText = styled.button`
  border: none;
  background-color: white;
  color: #9eacba;
  cursor: pointer;
  font-weight: 700;
  font-size: 0.6rem;
  margin-left: 0.6rem;
`;

export const RedButton = styled(Button)`
  background-color: #a62121;
  margin-left: 0.3rem;

  &:hover {
    background-color: #942020;
  }
`;

export const CancelButton = styled(Button)`
  background-color: #86919c;
  margin-left: 0.5rem;

  &:hover {
    background: rgb(130, 140, 148);
  }
`;

export const EditForm = styled.form`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  width: 13rem;
`;

export const EditUserInput = styled(RegisterInput)`
  width: 70%;
`;

export const EditButtons = styled.div`
  width: 100%;
`;

export const EditTitle = styled(RegisterText)`
  width: 45%;
`;
