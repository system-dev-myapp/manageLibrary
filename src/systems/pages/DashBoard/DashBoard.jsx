import React from "react";
import Header from "../../components/Header/Header";
import { Col, Row } from "antd";
import SideBar from "../../components/SideBar/Sidebar";
import { RouterDTO } from "../../../utils/routers.dto";
import { Route, Routes } from "react-router";
import CreateBook from "../components/Book/createBook";
import Categories from "../components/cate/Categories";

export default function DashBoard() {
    return (
        <>
            <Header />
            <Row>
                <Col sm={5}>
                    <SideBar />
                </Col>
                <Col span={19}>
                    <Routes>
                        <Route path={RouterDTO.book} element={<CreateBook />} />
                        <Route path="/cate/*" element={<Categories />}></Route>
                    </Routes>
                </Col>
            </Row>
        </>
    );
}
