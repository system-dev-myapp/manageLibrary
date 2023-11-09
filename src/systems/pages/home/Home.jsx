import React from "react";
import Header from "../../components/Header/Header";
import { Col, Row } from "antd";
import SideBar from "../../components/SideBar/Sidebar";

export default function Home() {
    return (
        <>
            <Header />
            <Row>
                <Col sm={5}>
                    <SideBar></SideBar>
                </Col>
            </Row>
        </>
    );
}
