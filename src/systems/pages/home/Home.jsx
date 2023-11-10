import React from "react";
import Header from "../../components/Header/Header";
import { Col, Row } from "antd";
import SideBar from "../../components/SideBar/Sidebar";
import CreateBook from "../Book/createBook";
import { RouterDTO } from "../../../utils/routers.dto";
import { Route, Routes } from "react-router";
import Categories from "../cate/Categories";

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
                <Col span={19}>
                    <Routes>
                        <Route path="/cate/*" element={<Categories />}></Route>
                    </Routes>
                </Col>
            </Row>
        </>
    );
}
