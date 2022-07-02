import React from "react";
import { hydrate, render } from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import { RecoilRoot } from "recoil";
import { HelmetProvider } from "react-helmet-async";

const rootElement = document.getElementById("root")!;
if (rootElement.hasChildNodes()) {
  hydrate(
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <RecoilRoot>
          <App />
        </RecoilRoot>
      </BrowserRouter>
    </HelmetProvider>,
    rootElement,
  );
} else {
  render(
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <RecoilRoot>
          <App />
        </RecoilRoot>
      </BrowserRouter>
    </HelmetProvider>,
    rootElement,
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
