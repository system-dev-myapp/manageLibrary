import React, { useEffect, useState } from "react";
import { Button, Col, Modal, Pagination, Row, Table } from "antd";
import MdEditor from "react-markdown-editor-lite";
import MarkdownIt from "markdown-it";
import { columns } from "../../../../data/dataTableUser/dataTableUser";
import usePagination from "../../../../hook/usePagination";
import { getAllUserService } from "../../../../services/userService";
import handleUploadImageMarkdown from "../../../../helpers/handleUploadImageMarkdown";
import Swal from "sweetalert2";
import SendNotification from "./SendNotification/SendNotification";

const mdParser = new MarkdownIt(/* Markdown-it options */);

export default function AllUser() {
    const [allUsers, setAllUsers] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [desc, setDesc] = useState({
        html: "",
        text: "",
    });

    function handleEditorChange({ html, text }) {
        setDesc({ html: html, text: text });
    }

    // get data user

    const { isLoading, data, meta, handleChangePage } = usePagination({
        api: getAllUserService,
        page: 1,
        pageSize: 10,
        isToken: true,
        is_load_more: false,
    });

    useEffect(() => {
        if (data.length > 0) {
            setAllUsers(data);
        }
    }, [data]);

    //change pagination

    const handleChangePagination = (index) => {
        handleChangePage(index);
    };

    // modal markdown

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleCancel = () => {
        Swal.fire({
            title: "Nếu bạn thoát các thông báo đã tạo sẽ không được lưu !",
            showCancelButton: true,
            confirmButtonText: "Ok",
        }).then((result) => {
            if (result.isConfirmed) {
                setIsModalOpen(false);
                setDesc({
                    html: "",
                    text: "",
                });
            }
        });
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleNewNotify = () => {
        Swal.fire({
            title: "Bạn có muốn tạo thông báo khác ?",
            showCancelButton: true,
            confirmButtonText: "Yes",
        }).then((result) => {
            if (result.isConfirmed) {
                setDesc({
                    html: "",
                    text: "",
                });
            }
        });
    };

    return (
        <div>
            <p>Người dùng</p>

            <Row justify="end" gutter={10} className="mb-10">
                <Col span={3}>
                    <Button
                        type="primary"
                        onClick={showModal}
                        className="w-full"
                    >
                        Tạo thông báo
                    </Button>
                    <Modal
                        title="Basic Modal"
                        open={isModalOpen}
                        onOk={handleOk}
                        onCancel={handleCancel}
                        width={1000}
                    >
                        <Button
                            type="primary"
                            className="mb-5"
                            onClick={handleNewNotify}
                        >
                            Tạo thông báo mới
                        </Button>
                        <MdEditor
                            onImageUpload={handleUploadImageMarkdown}
                            value={desc.text}
                            style={{ height: "500px" }}
                            renderHTML={(text) => mdParser.render(text)}
                            onChange={handleEditorChange}
                        />
                    </Modal>
                </Col>
                <Col span={3}>
                    <Button
                        type="primary"
                        onClick={showModal}
                        className="w-full"
                    >
                        Send All User
                    </Button>
                </Col>
            </Row>

            <Row>
                <Col span={24}>
                    <Table
                        pagination={false}
                        bordered
                        virtual
                        scroll={{ x: 400, y: 400 }}
                        rowKey="id"
                        dataSource={allUsers}
                        columns={columns.map((item) => {
                            if (item.dataIndex === "action") {
                                item.render = (...data) => {
                                    return (
                                        <div>
                                            <SendNotification
                                                data={data[1]}
                                                contentNotify={desc.html}
                                            />
                                        </div>
                                    );
                                };
                            }
                            return item;
                        })}
                    />
                </Col>
            </Row>
            <Row justify="center" className="my-5">
                <Col span={5}>
                    {meta && meta.currentPage <= meta.totalPages && (
                        <Pagination
                            className="w-full"
                            defaultCurrent={1}
                            total={meta.totalItems}
                            onChange={handleChangePagination}
                        ></Pagination>
                    )}
                </Col>
            </Row>
        </div>
    );
}
