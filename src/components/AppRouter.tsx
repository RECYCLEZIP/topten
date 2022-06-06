import { Route, Routes } from "react-router-dom";
import Main from "../pages/main/Main";
import Quiz from "../pages/Quiz/Quiz";

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/quizlist" element={<Quiz />} />
    </Routes>
  );
}

export default AppRouter;
