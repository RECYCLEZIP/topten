import { UserContainer, UserPageImg } from "../../styles/userStyles/users";
import { img } from "../../assets/imgImport";
import { Route, Routes } from "react-router";
import LoginContainer from "./Login";
import Register from "./Register";

function LoginPage() {
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
