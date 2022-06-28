import React from "react";
import AppRouter from "./components/AppRouter";
import Header from "./components/Header";

import "@toast-ui/editor/dist/toastui-editor-viewer.css";
import "@toast-ui/editor/dist/toastui-editor.css";
import "tui-color-picker/dist/tui-color-picker.css";
import "@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css";

function App() {
  return (
    <div>
      <Header />
      <AppRouter />
    </div>
  );
}

export default App;
