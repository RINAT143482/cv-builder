import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { CvProvider } from "./context/CvContext";
import { ThemeProviderWrapper } from "./context/ThemeContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProviderWrapper>
    <BrowserRouter>
      <CvProvider>
        <App />
      </CvProvider>
    </BrowserRouter>
  </ThemeProviderWrapper>
);

