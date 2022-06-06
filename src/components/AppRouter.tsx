import { Route, Routes } from "react-router-dom";

import Landing from "../pages/landing/Landing";

function AppRouter() {
  return (
    <Routes>
      <Route path="/prologue" element={<Landing />} />
    </Routes>
  );
}

export default AppRouter;
