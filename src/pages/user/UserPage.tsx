import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useRecoilState, useSetRecoilState } from "recoil";
import { delData, getData } from "../../api";
import { loginState, userEditState, userState } from "../../stores/atoms";
import { Button } from "../../styles/ButtonStyles";
import {
  UserPageContainer,
  EmailText,
  NameText,
  EditText,
  RedButton,
} from "../../styles/userStyles/userPage";
import UserEdit from "./UserEdit";
import UserQnA from "./UserQnA";
import { customToastify } from "../../components/customToastify";
import { Helmet } from "react-helmet-async";
import Loading from "../../components/Loading";

function UserPage() {
  const navigate = useNavigate();
  const [user, setUser] = useRecoilState(userState);
  const setIsLogin = useSetRecoilState(loginState);
  const [isEdit, setIsEdit] = useRecoilState(userEditState);
  const [loading, setLoading] = useState(false);

  const getUser = async () => {
    try {
      const res = await getData(`users/current`);
      setUser(res.data);
      setLoading(true);
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
      // eslint-disable-next-line no-restricted-globals
      if (confirm("정말로 탈퇴하시겠습니까?")) {
        await delData("users/delete");
        customToastify("success", "탈퇴 성공!");
        sessionStorage.removeItem("token");
        setIsLogin(false);
        navigate("/");
      } else {
        return;
      }
    } catch {
      customToastify("error", "탈퇴 실패!");
    }
  };

  useEffect(() => {
    getUser();
    setIsEdit(false);
  }, []);

  if (!loading) {
    return <Loading />;
  }

  return (
    <UserPageContainer>
      <Helmet>
        <title>분리수ZIP - 마이페이지</title>
      </Helmet>
      {isEdit && <UserEdit />}
      <NameText>{user.username}님 안녕하세요!</NameText>
      <EditText onClick={() => setIsEdit((prev) => !prev)}>
        프로필 수정
      </EditText>
      <EmailText>{user.email}</EmailText>
      <Button onClick={logout}>로그아웃</Button>
      <RedButton onClick={deleteUser}>회원탈퇴</RedButton>
      <UserQnA />
    </UserPageContainer>
  );
}

export default UserPage;
