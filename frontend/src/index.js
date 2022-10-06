import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, useLocation } from "react-router-dom";
import App from "./App";
import GlobalStyle from "./components/GlobalStyle/GlobalStyle";
import reportWebVitals from "./reportWebVitals";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

const root = ReactDOM.createRoot(document.getElementById("root"));
const Wrapper = ({ children }) => {
  const location = useLocation();
  React.useLayoutEffect(() => {
    document.documentElement.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [location.pathname]);
  return children;
};

root.render(
  <React.StrictMode>
    <GlobalStyle>
      <BrowserRouter>
        <Wrapper>
          <App />
          <ScrollToTop />
        </Wrapper>
      </BrowserRouter>
    </GlobalStyle>
  </React.StrictMode>
);

reportWebVitals();
