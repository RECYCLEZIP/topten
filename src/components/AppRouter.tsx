import { Route, Routes } from "react-router-dom";
import Main from "../pages/main/Main";
import MultiQuiz from "../pages/quiz/MultiQuiz";
import OXQuiz from "../pages/quiz/OXQuiz";
import Quiz from "../pages/quiz/Quiz";
import QuizResult from "../pages/quiz/QuizResult";
import VSQuiz from "../pages/quiz/VSQuiz";
import Landing from "../pages/prologue/Prologue";
import Ai from "../pages/ai/Ai";
import Map from "../pages/map/Map";
import Category from "../pages/trash/Category";
import Trash from "../pages/trash/Trash";

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
      <Route path="/category/*" element={<Category />} />
      <Route path="/category/:kind/:id" element={<Trash />} />
    </Routes>
  );
}

export default AppRouter;
