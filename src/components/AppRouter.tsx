import { Route, Routes } from "react-router-dom";
import Main from "../pages/main/Main";
import MultiQuiz from "../pages/Quiz/MultiQuiz";
import OXQuiz from "../pages/Quiz/OXQuiz";
import Quiz from "../pages/Quiz/Quiz";
import QuizResult from "../pages/Quiz/QuizResult";
import VSQuiz from "../pages/Quiz/VSQuiz";
import Landing from "../pages/prologue/Prologue";
import Ai from "../pages/ai/Ai";
import Map from "../pages/map/Map";

//set router component
function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/quizzes" element={<Quiz />} />
      <Route path="/quizzes/multiple-choice" element={<MultiQuiz />} />
      <Route path="/quizzes/ox" element={<OXQuiz />} />
      <Route path="/quizzes/vs" element={<VSQuiz />} />
      <Route path="/quizzes/result" element={<QuizResult />} />
      <Route path="/prologue" element={<Landing />} />
      <Route path="/map" element={<Map />} />
      <Route path="/ai" element={<Ai />} />
    </Routes>
  );
}

export default AppRouter;
