import { Route, Routes } from "react-router-dom";

import Landing from "../pages/prologue/Prologue";
import Ai from "../pages/ai/Ai";

function AppRouter() {
  return (
    <Routes>
      <Route path="/prologue" element={<Landing />} />
      <Route path="/ai" element={<Ai />} />
    </Routes>
  );
}

export default AppRouter;
