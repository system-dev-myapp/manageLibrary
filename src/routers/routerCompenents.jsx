import React from "react";
import { Route, Routes } from "react-router-dom";
import { RouterDTO } from "../utils/routers.dto";
import Auth from "../systems/auth/Auth";

export default function RouterComponent() {
    return (
        <>
            <Routes>
                <Route path={RouterDTO.auth} element={<Auth />} />
            </Routes>
        </>
    );
}
