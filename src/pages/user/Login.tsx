import { useState } from "react";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router";
import { useSetRecoilState } from "recoil";
import { postData } from "../../api";
import { loginState, userState } from "../../stores/atoms";
import { Button } from "../../styles/ButtonStyles";
import { TitleText } from "../../styles/TextStyle";
import {
  LoginInput,
  RightContainer,
  RegisterButton,
} from "../../styles/userStyles/users";
import { customTostify } from "../../components/customTostify";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const setIsLogin = useSetRecoilState(loginState);
  const setUserState = useSetRecoilState(userState);
  const navigate = useNavigate();

  const loginUser = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    try {
      const res = await postData("users/login", { email, password });
      setUserState(res.data);
      setIsLogin(true);
      sessionStorage.setItem("token", res.data.token);
      navigate("/");
    } catch {
      customTostify("error", "아이디와 비밀번호를 확인해주세요.");
    }
  };

  return (
    <RightContainer onSubmit={loginUser}>
      <Helmet>
        <title>로그인 - 분리수ZIP</title>
      </Helmet>
      <TitleText>로그인</TitleText>
      <LoginInput
        placeholder="이메일"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      ></LoginInput>
      <LoginInput
        placeholder="비밀번호"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      ></LoginInput>
      <Button onClick={loginUser}>로그인</Button>
      <RegisterButton onClick={() => navigate("/users/register")}>
        회원가입
      </RegisterButton>
    </RightContainer>
  );
}

export default Login;
