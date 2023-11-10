import React from "react";
import Header from "../../components/Header/Header";
import { Col, Row } from "antd";
import SideBar from "../../components/SideBar/Sidebar";
import { Route, Routes } from "react-router";
import Categories from "../cate/Categories";

export default function Home() {
    return (
        <>
            <Header />
            <Row>
                <Col span={5}>
                    <SideBar></SideBar>
                </Col>
                <Col span={19}>
                    <Routes>
                        <Route path="/cate/*" element={<Categories />}></Route>
                    </Routes>
                </Col>
            </Row>
        </>
    );
}
