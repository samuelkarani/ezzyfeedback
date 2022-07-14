import React from "react";
import ReactDOM from "react-dom/client";
import UIkit from "uikit";
import Icons from "uikit/dist/js/uikit-icons";
import "../node_modules/uikit/dist/css/uikit.min.css";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

UIkit.use(Icons);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
