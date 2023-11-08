import React from "react";
import ReactDOM from "react-dom/client";
import App from "./systems/App";
import { BrowserRouter } from "react-router-dom";
import "./globalStyle/globalStyle.css";
import "bootstrap-icons/font/bootstrap-icons.css";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>
);
