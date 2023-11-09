import React from "react";
import { Route, Routes } from "react-router-dom";
import { RouterDTO } from "../utils/routers.dto";
import Auth from "../systems/auth/Auth";
import PrivateRouter from "../components/PrivateRouter/PrivateRouter";
import Home from "../systems/pages/home/home";

export default function RouterComponent() {
    return (
        <>
            <Routes>
                <Route
                    element={
                        <PrivateRouter>
                            <Home />
                        </PrivateRouter>
                    }
                    path={RouterDTO.dashboard}
                />
                <Route path={RouterDTO.auth} element={<Auth />} />
            </Routes>
        </>
    );
}
