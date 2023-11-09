import React from "react";
import ReactDOM from "react-dom/client";
import App from "./systems/App";
import { BrowserRouter } from "react-router-dom";
import "./globalStyle/globalStyle.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store } from "./app/store";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                {/* <PersistGate loading={null} persistor={persistor}> */}
                <App />
                {/* </PersistGate> */}
            </Provider>
        </BrowserRouter>
    </React.StrictMode>
);
