import React from "react";
import ReactDOM from "react-dom/client";
import App from "~/App";
import reportWebVitals from "./reportWebVitals";
import GlobalLayout from "~/layouts/GlobalLayout";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GlobalLayout>
      <App />
    </GlobalLayout>
  </React.StrictMode>
);
reportWebVitals();
