import { useNavigate } from "react-router";
import { img } from "../assets/imgImport";
import { Link, Logo, Nav, Menu, IconMenu } from "../styles/HeaderStyle";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { useState } from "react";

//header component
function Header() {
  const navigate = useNavigate();
  //mobile menu open or not
  const [isToggled, setIsToggled] = useState(false);

  return (
    <Nav isToggled={isToggled}>
      <Logo onClick={() => navigate("/")} src={img.mainLogo} />
      <Menu isToggled={isToggled}>
        <Link to="/prologue" border="1px solid #efefef">
          프롤로그
        </Link>
        <Link to="/ai">AI 분리수거</Link>
        <Link to="/map">서울시 쓰레기통</Link>
        <Link to="/quizzes">퀴즈</Link>
        <Link to="/categories">분리수거 정보</Link>
      </Menu>
      <IconMenu onClick={() => setIsToggled((cur) => !cur)}>
        {isToggled ? <CloseOutlinedIcon /> : <MenuOutlinedIcon />}
      </IconMenu>
    </Nav>
  );
}

export default Header;
