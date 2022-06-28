import styled from "styled-components";
import { Button } from "../ButtonStyles";

export const UserContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;
export const UserPageImg = styled.img`
  width: 100%;
  height: 50vh;
  opacity: 0.9;
  @media (min-width: 768px) {
    width: 50%;
    height: 100vh;
  }
`;

export const LoginInput = styled.input`
  width: auto;
  background: #ffffff;
  border: 1px solid #9eacba;
  height: 0.6rem;
  margin-bottom: 0.5rem;
  padding: 0.2rem 0.3rem;
`;

export const RightContainer = styled.form`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 70%;
  @media (min-width: 768px) {
    width: 35%;
  }
`;

export const RegisterButton = styled(Button)`
  margin-top: 0.5rem;
  background-color: #f0f2f5;
  color: black;
  &:hover {
    background-color: #191919;
    color: white;
    transition: all 0.5s;
  }
`;

export const RegisterText = styled.div<{ display?: string }>`
  font-size: 0.6rem;
  width: 35%;
  display: ${(props) => props.display};
`;

export const EachInput = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

export const RegisterInput = styled(LoginInput)<{ margin?: string }>`
  margin-bottom: 0;
  margin-bottom: ${(props) => props.margin};
`;

export const RegisterInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const CautionText = styled.span`
  font-size: 0.5rem;
  color: #f06868;
  font-weight: 500;
  margin-top: 0.1rem;
`;
