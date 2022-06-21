import { useNavigate } from "react-router";
import { Button } from "../../styles/ButtonStyles";
import { TitleText } from "../../styles/TextStyle";
import {
  UserInput,
  RightContainer,
  RegisterButton,
} from "../../styles/userStyles/users";

function Login() {
  const navigate = useNavigate();
  return (
    <RightContainer>
      <TitleText>로그인</TitleText>
      <UserInput placeholder="이메일"></UserInput>
      <UserInput placeholder="비밀번호"></UserInput>
      <Button>로그인</Button>
      <RegisterButton onClick={() => navigate("/users/register")}>
        회원가입
      </RegisterButton>
    </RightContainer>
  );
}

export default Login;
