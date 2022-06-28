import { useNavigate } from "react-router";
import { img } from "../assets/imgImport";
import { Link, Logo, Nav, Menu, IconMenu } from "../styles/HeaderStyle";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import {
  categoryItemState,
  categoryKindState,
  categoryPageState,
  categorySelectedState,
  loginState,
} from "../stores/atoms";

//header component
function Header() {
  const navigate = useNavigate();
  //mobile menu open or not
  const [isToggled, setIsToggled] = useState(false);
  const setList = useSetRecoilState(categoryItemState);
  const setPage = useSetRecoilState(categoryPageState);
  const setKind = useSetRecoilState(categoryKindState);
  const setIsSelected = useSetRecoilState(categorySelectedState);
  const isLogin = useRecoilValue(loginState);

  return (
    <Nav isToggled={isToggled}>
      <Logo onClick={() => navigate("/")} src={img.mainLogo} />
      <Menu isToggled={isToggled} onClick={() => setIsToggled(false)}>
        <Link to="/prologue" border="1px solid #efefef">
          프롤로그
        </Link>
        <Link to="/ai">AI 분리수거</Link>
        <Link to="/map">서울시 쓰레기통</Link>
        <Link to="/quizzes">퀴즈</Link>
        <Link to="/game/ranking">게임</Link>
        <Link
          to="/category"
          onClick={() => {
            setPage("");
            setKind("");
            setIsSelected([]);
          }}
        >
          분리수거 정보
        </Link>
        <Link to="/qna">Q&A</Link>
        <Link to={isLogin ? `/user/my` : "/users/login"}>
          {isLogin ? "마이페이지" : "로그인"}
        </Link>
      </Menu>
      <IconMenu onClick={() => setIsToggled((cur) => !cur)}>
        {isToggled ? <CloseOutlinedIcon /> : <MenuOutlinedIcon />}
      </IconMenu>
    </Nav>
  );
}

export default Header;
