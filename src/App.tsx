import React, { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { getData } from "./api";
import AppRouter from "./components/AppRouter";
import Header from "./components/Header";
import { loginState, userState } from "./stores/atoms";

function App() {
  const setIsLogin = useSetRecoilState(loginState);
  const setUser = useSetRecoilState(userState);

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    if (token) {
      setIsLogin(true);
      const getUser = async () => {
        const res = await getData("users/current");
        setUser(res.data);
      };
      getUser();
    } else setIsLogin(false);
  }, []);

  return (
    <div>
      <Header />
      <AppRouter />
    </div>
  );
}

export default App;
