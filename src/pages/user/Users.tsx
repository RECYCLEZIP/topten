import { UserContainer, UserPageImg } from "../../styles/userStyles/users";
import { img } from "../../assets/imgImport";
import { Route, Routes } from "react-router";
import LoginContainer from "./Login";
import Register from "./Register";
import { ToastContainer } from "react-toastify";

function LoginPage() {
  return (
    <UserContainer>
      <UserPageImg src={img.user} />
      <ToastContainer style={{ fontSize: "0.7rem" }} />
      <Routes>
        <Route path={`login`} element={<LoginContainer />} />
        <Route path={`register`} element={<Register />} />
      </Routes>
    </UserContainer>
  );
}

export default LoginPage;
