import { useState } from "react";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
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

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const setIsLogin = useSetRecoilState(loginState);
  const setUser = useSetRecoilState(userState);
  const navigate = useNavigate();

  const loginUser = async () => {
    try {
      const res = await postData("users/login", { email, password });
      setUser(res.data);
      setIsLogin(true);
      navigate("/");
    } catch {
      notCorrect();
      console.log("Error: data post request fail");
    }
  };

  const notCorrect = () =>
    toast.error("로그인 실패!", {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
    });

  return (
    <RightContainer>
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
