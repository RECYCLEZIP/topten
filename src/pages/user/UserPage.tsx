import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { useSetRecoilState } from "recoil";
import { getData } from "../../api";
import { loginState } from "../../stores/atoms";
import { Button } from "../../styles/ButtonStyles";
import {
  UserPageContainer,
  EmailText,
  NameText,
  EditText,
} from "../../styles/userStyles/userPage";
import { UserType } from "../../types/User";

function UserPage() {
  const userId = useParams().id;
  const navigate = useNavigate();
  const [user, setUser] = useState<UserType>({});
  const setIsLogin = useSetRecoilState(loginState);

  const getUser = async () => {
    try {
      const res = await getData(`users/${userId}`);
      setUser(res.data);
    } catch {
      console.log("Error: data get request fail");
    }
  };

  const logout = () => {
    setIsLogin(false);
    sessionStorage.removeItem("token");
    navigate("/");
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <UserPageContainer>
      <NameText>{user.username}님 안녕하세요!</NameText>
      <EditText>프로필 수정</EditText>
      <EmailText>{user.email}</EmailText>
      <Button onClick={logout}>로그아웃</Button>
    </UserPageContainer>
  );
}

export default UserPage;
