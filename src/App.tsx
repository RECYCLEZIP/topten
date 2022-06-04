import React from "react";

import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";

import Landing from './pages/landing/Landing'

function App() {
  return (
    <RecoilRoot>
      <Landing />
    </RecoilRoot>
  );
}

export default App;
