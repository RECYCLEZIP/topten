import { useNavigate } from "react-router";
import { img } from "../assets/imgImport";
import { Link, Logo, Nav, Menu, IconMenu } from "../styles/HeaderStyle";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { useState } from "react";

function Header() {
  const navigate = useNavigate();
  const [isToggled, setIsToggled] = useState(false);

  return (
    <Nav isToggled={isToggled}>
      <Logo onClick={() => navigate("/")} src={img.mainLogo} />
      <Menu isToggled={isToggled}>
        <Link onClick={() => navigate("/prologue")} border="1px solid #efefef">
          프롤로그
        </Link>
        <Link onClick={() => navigate("/ai")}>AI 분리수거</Link>
        <Link onClick={() => navigate("/")}>서울시 쓰레기통</Link>
        <Link onClick={() => navigate("/quizzes")}>퀴즈</Link>
        <Link onClick={() => navigate("/")}>분리수거 정보</Link>
      </Menu>
      <IconMenu onClick={() => setIsToggled((cur) => !cur)}>
        {isToggled ? <CloseOutlinedIcon /> : <MenuOutlinedIcon />}
      </IconMenu>
    </Nav>
  );
}

export default Header;
