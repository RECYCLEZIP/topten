import React from "react";

import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";
import Main from "./pages/main/Main";

function App() {
  return (
    <RecoilRoot>
      <Main></Main>
    </RecoilRoot>
  );
}

export default App;
