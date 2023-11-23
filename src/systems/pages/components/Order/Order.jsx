import React from "react";
import { RouterDTO } from "../../../../utils/routers.dto";
import AllOrder from "./AllOrder/AllOrder";
import { useLocation, useNavigate } from "react-router-dom";
import { Tabs } from "antd";

export default function Order() {
    const order = [
        {
            key: RouterDTO.order.getAllOrder,
            label: "Tất cả đơn order",
            children: <AllOrder />,
        },
    ];

    const navigate = useNavigate();
    const locations = useLocation();
    const onChange = (key) => {
        navigate(`${key}`);
    };
    return (
        <div>
            <Tabs
                className=""
                activeKey={locations.pathname}
                defaultActiveKey={RouterDTO.order.getAllOrder}
                items={order}
                onChange={onChange}
            />
        </div>
    );
}
