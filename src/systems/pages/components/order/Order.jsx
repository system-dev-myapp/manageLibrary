import React from "react";
import { RouterDTO } from "../../../../utils/routers.dto";
import { useLocation, useNavigate } from "react-router";
import { Tabs } from "antd";
import AllOrder from "./AllOrder/AllOrder";

export default function Order() {
    const order = [
        {
            key: RouterDTO.order.allOrder,
            label: "Tất cả đơn mượn",
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
                defaultActiveKey={RouterDTO.order.allOrder}
                items={order}
                onChange={onChange}
            />
        </div>
    );
}
