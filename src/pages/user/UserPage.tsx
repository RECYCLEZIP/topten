import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useRecoilState, useSetRecoilState } from "recoil";
import { delData, getData } from "../../api";
import { loginState, userEditState } from "../../stores/atoms";
import { Button } from "../../styles/ButtonStyles";
import {
  UserPageContainer,
  EmailText,
  NameText,
  EditText,
  RedButton,
} from "../../styles/userStyles/userPage";
import { UserType } from "../../types/User";
import UserEdit from "./UserEdit";
import UserQnA from "./UserQnA";
import { customTostify } from "../../components/customTostify";

function UserPage() {
  const navigate = useNavigate();
  const [user, setUser] = useState<UserType>({});
  const setIsLogin = useSetRecoilState(loginState);
  const [isEdit, setIsEdit] = useRecoilState(userEditState);

  const getUser = async () => {
    try {
      const res = await getData(`users/current`);
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

  const deleteUser = async () => {
    try {
      await delData("users/delete");
      customTostify("success", "탈퇴 성공!");
      sessionStorage.removeItem("token");
      setIsLogin(false);
      navigate("/");
    } catch {
      customTostify("error", "탈퇴 실패!");
    }
  };

  useEffect(() => {
    getUser();
    setIsEdit(false);
  }, []);

  return (
    <UserPageContainer>
      {isEdit ? (
        <UserEdit user={user} />
      ) : (
        <NameText>{user.username}님 안녕하세요!</NameText>
      )}
      {isEdit ? null : (
        <EditText onClick={() => setIsEdit((prev) => !prev)}>
          프로필 수정
        </EditText>
      )}
      <EmailText>{user.email}</EmailText>
      <Button onClick={logout}>로그아웃</Button>
      <RedButton onClick={deleteUser}>회원탈퇴</RedButton>
      <UserQnA />
    </UserPageContainer>
  );
}

export default UserPage;
