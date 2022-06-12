import React, { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { getData } from "./api";

import AppRouter from "./components/AppRouter";
import Header from "./components/Header";
import { categoryState } from "./stores/atoms";

function App() {
  const setCategory = useSetRecoilState(categoryState);

  //initial api get request
  useEffect(() => {
    try {
      const getCategory = async () => {
        const res = await getData(`trash/categories`);
        setCategory(res.data);
      };
      getCategory();
    } catch (err) {
      console.log("Error: award list get request fail", err);
    }
  }, [setCategory]);

  return (
    <div>
      <Header />
      <AppRouter />
    </div>
  );
}

export default App;
