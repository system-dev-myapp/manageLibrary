import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { CheckRole, LogOutService } from "../../services/authService";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logoutAction } from "../../features/auth/AuthSlice";
import { configUser } from "../../utils/constant";
import { HandleApi } from "../../services/handleApi";

export default function PrivateRouter({ children }) {
    const [admin, setAdmin] = useState(null);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    async function handleDispatLogoutAndCallAPI() {
        dispatch(logoutAction());
        await LogOutService();
        navigate("/");
    }

    useEffect(() => {
        const _fetch = async () => {
            try {
                const Res = await HandleApi(CheckRole);
                console.log(Res);
                if (Res?.role === configUser.role.admin) {
                    setAdmin(true);
                } else {
                    await handleDispatLogoutAndCallAPI();
                    navigate("/auth/login");
                }
            } catch (error) {
                console.log(error);
            }
        };

        _fetch();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [navigate]);

    return <div>{admin ? children : <></>}</div>;
}

PrivateRouter.propTypes = {
    children: PropTypes.node,
};
