import { useState } from "react";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { postData } from "../../api";
import { Button } from "../../styles/ButtonStyles";
import { TitleText } from "../../styles/TextStyle";
import {
  RegisterInput,
  RightContainer,
  RegisterText,
  EachInput,
  RegisterInputContainer,
  CautionText,
} from "../../styles/userStyles/users";

const correct = () =>
  toast.success("가입 성공!", {
    position: "top-center",
    autoClose: 1000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
  });

const notCorrect = () =>
  toast.error("가입 실패!", {
    position: "top-center",
    autoClose: 1000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
  });

const validateEmail = (email: string) => {
  const emailRule =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return emailRule.test(email);
};

function Register() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [comparePassword, setComparePassword] = useState("");
  const isEmailValid = validateEmail(email);
  const samePassword = password === comparePassword;
  const confirmPassword = password.length >= 8;
  const finish =
    isEmailValid && samePassword && username.length > 2 && password.length > 0;
  const navigate = useNavigate();

  const registerUser = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    try {
      await postData("users/register", { email, password, username });
      correct();
    } catch {
      console.log("Error: data post request fail");
      notCorrect();
    }
    navigate("/users/login");
  };

  return (
    <RightContainer onSubmit={registerUser}>
      <Helmet>
        <title>회원가입 - 분리수ZIP</title>
      </Helmet>
      <TitleText>회원가입</TitleText>
      <EachInput>
        <RegisterText>이메일</RegisterText>
        <RegisterInputContainer>
          <RegisterInput
            placeholder="이메일"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></RegisterInput>
          {email.length < 1 ? (
            <CautionText>입력해주세요.</CautionText>
          ) : (
            !isEmailValid && (
              <CautionText>이메일 형식을 확인해주세요.</CautionText>
            )
          )}
        </RegisterInputContainer>
      </EachInput>
      <EachInput>
        <RegisterText>닉네임</RegisterText>
        <RegisterInputContainer>
          <RegisterInput
            placeholder="닉네임"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          ></RegisterInput>
          {username.length < 3 && (
            <CautionText>닉네임은 3자리 이상입니다.</CautionText>
          )}
        </RegisterInputContainer>
      </EachInput>
      <EachInput>
        <RegisterText>비밀번호</RegisterText>
        <RegisterInputContainer>
          <RegisterInput
            placeholder="비밀번호"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></RegisterInput>
          {!confirmPassword && (
            <CautionText>비밀번호는 8자리 이상입니다.</CautionText>
          )}
        </RegisterInputContainer>
      </EachInput>
      <EachInput>
        <RegisterText>비밀번호 확인</RegisterText>
        <RegisterInputContainer>
          <RegisterInput
            placeholder="비밀번호 확인"
            type="password"
            value={comparePassword}
            onChange={(e) => setComparePassword(e.target.value)}
          ></RegisterInput>
          {!samePassword && (
            <CautionText>
              {comparePassword.length > 0
                ? "비밀번호가 다릅니다."
                : "입력해주세요."}
            </CautionText>
          )}
        </RegisterInputContainer>
      </EachInput>
      <Button onClick={registerUser} disabled={!finish}>
        가입하기
      </Button>
    </RightContainer>
  );
}

export default Register;
