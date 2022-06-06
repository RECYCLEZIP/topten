import { Route, Routes } from "react-router-dom";

import Landing from "../pages/prologue/Prologue";

function AppRouter() {
  return (
    <Routes>
      <Route path="/prologue" element={<Landing />} />
    </Routes>
  );
}

export default AppRouter;
