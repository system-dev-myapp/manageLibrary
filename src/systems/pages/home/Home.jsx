import React from "react";
import Header from "../../components/Header/Header";
import { Col, Row } from "antd";
import SideBar from "../../components/SideBar/Sidebar";
import CreateBook from "../Book/createBook";
import { RouterDTO } from "../../../utils/routers.dto";
import { Route, Routes } from "react-router";

export default function Home() {
    return (
        <>
            <Header />
            <Row>
                <Col sm={5}>
                    <SideBar />
                </Col>
                <Col>
                    <Routes>
                        <Route path={RouterDTO.book} element={<CreateBook />} />
                    </Routes>
                </Col>
            </Row>
        </>
    );
}
