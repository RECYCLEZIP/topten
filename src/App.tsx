import "react-toastify/dist/ReactToastify.css";
import React, { useEffect, useRef } from "react";
import { useSetRecoilState } from "recoil";
import { getData } from "./api";
import AppRouter from "./components/AppRouter";
import Header from "./components/Header";
import { loginState, modalOpenState, userState } from "./stores/atoms";
import "@toast-ui/editor/dist/toastui-editor-viewer.css";
import "@toast-ui/editor/dist/toastui-editor.css";
import "tui-color-picker/dist/tui-color-picker.css";
import "@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css";
import { ToastContainer } from "react-toastify";

function App() {
  const setIsLogin = useSetRecoilState(loginState);
  const setUser = useSetRecoilState(userState);
  const setIsToggled = useSetRecoilState(modalOpenState);
  const outModal = useRef(null);

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
  }, [setIsLogin, setUser]);

  return (
    <div>
      <Header />
      <div
        ref={outModal}
        onClick={(e) => {
          if (outModal.current !== e.target) {
            setIsToggled(false);
          }
        }}
      >
        <AppRouter />
      </div>
      <ToastContainer
        style={{ fontSize: "0.5rem" }}
        position="top-center"
        autoClose={1500}
        closeOnClick={true}
      />
    </div>
  );
}

export default App;
