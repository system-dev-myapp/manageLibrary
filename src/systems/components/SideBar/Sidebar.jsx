import React from "react";

import { PieChartOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import {
    childrenList,
    sideBarList,
    urlchildrenList,
} from "../../../data/dataMenu/dataMenu";
import { Menu } from "antd";

const items = [PieChartOutlined].map((icon, index) => {
    const key = index;
    return {
        key: `sub${key}`,
        icon: React.createElement(icon),
        label: `${sideBarList[key]}`,
        children:
            childrenList[key] &&
            childrenList[key].map((childLabel, childIndex) => ({
                key: urlchildrenList[key][childIndex],
                label: childLabel,
            })),
    };
});
export default function Sidebar() {
    const router = useNavigate();
    const onClick = (e) => {
        router(e.key);
    };
    return (
        <div className="sidebar shadow w-[256px] h-[calc(100%-56px)]">
            <Menu
                onClick={onClick}
                style={{
                    width: "256px",
                    fontWeight: 700,
                    color: "#999999",
                    fontSize: "14px",
                }}
                defaultSelectedKeys={["1"]}
                defaultOpenKeys={["sub1"]}
                mode="inline"
                items={items}
                className="menu "
            ></Menu>
        </div>
    );
}
