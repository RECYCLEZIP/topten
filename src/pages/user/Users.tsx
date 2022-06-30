import { UserContainer, UserPageImg } from "../../styles/userStyles/users";
import { img } from "../../assets/imgImport";
import { Route, Routes } from "react-router";
import LoginContainer from "./Login";
import Register from "./Register";
import { useEffect, useState } from "react";

function LoginPage() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoading(true), 10);
  }, []);

  if (!loading) {
    return <></>;
  }

  return (
    <UserContainer>
      <UserPageImg src={img.user} />
      <Routes>
        <Route path={`login`} element={<LoginContainer />} />
        <Route path={`register`} element={<Register />} />
      </Routes>
    </UserContainer>
  );
}

export default LoginPage;
