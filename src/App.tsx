import React, { useEffect, useState } from "react";
import { useSetRecoilState } from "recoil";
import { getData } from "./api";
import axios from "axios";
import AppRouter from "./components/AppRouter";
import Header from "./components/Header";
import { categoryState, newsState } from "./stores/atoms";

function App() {
  const axiosRequest1 = getData(`trash/categories`);
  const axiosRequest2 = getData(`news`);
  const setCategory = useSetRecoilState(categoryState);
  const setNews = useSetRecoilState(newsState);

  const [isFetchCompleted, setIsFetchCompleted] = useState(false);

  //initial api get request
  const getCategory = async () => {
    try {
      await axios.all([axiosRequest1, axiosRequest2]).then(
        axios.spread((res1, res2) => {
          setCategory(res1.data);
          setNews(res2.data);
        }),
      );
    } catch {
      console.log("Error: data get request fail");
    }
    setIsFetchCompleted(true);
  };

  useEffect(() => {
    getCategory();
  }, []);

  if (!isFetchCompleted) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Header />
      <AppRouter />
    </div>
  );
}

export default App;
