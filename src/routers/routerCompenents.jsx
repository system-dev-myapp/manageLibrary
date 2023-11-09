import React from "react";
import { Route, Routes } from "react-router-dom";
import { RouterDTO } from "../utils/routers.dto";
import Auth from "../systems/auth/Auth";
import PrivateRouter from "../components/PrivateRouter/PrivateRouter";

export default function RouterComponent() {
    return (
        <>
            <Routes>
                {/* <Route>
                    <PrivateRouter></PrivateRouter>
                </Route> */}

                <Route path={RouterDTO.auth} element={<Auth />} />
            </Routes>
        </>
    );
}
