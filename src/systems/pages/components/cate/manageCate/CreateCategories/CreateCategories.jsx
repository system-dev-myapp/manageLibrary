import React, { useState } from "react";
import MarkdownIt from "markdown-it";
import MdEditor from "react-markdown-editor-lite";
import "react-markdown-editor-lite/lib/index.css";
import ModalExplain from "./ModalExplain/ModalExplain";
import { Button, Col, Row } from "antd";
import Swal from "sweetalert2";
import { HandleApi } from "../../../../../../services/handleApi";
import { createCategoriesService } from "../../../../../../services/cateService";

export default function CreateCategories() {
    const [isLoading, setIsLoading] = useState(false);
    const [nameCate, setNameCate] = useState("");
    const [active, setActive] = useState("");
    const [desc, setDesc] = useState({
        html: "",
        text: "",
    });

    const mdParser = new MarkdownIt(/* Markdown-it options */);

    function handleEditorChange({ html, text }) {
        setDesc({ html: html, text: text });
    }

    const handleValidate = () => {
        let isValid = true;
        const arrClone = [nameCate, active, desc.html, desc.text];
        for (let i = 0; i < arrClone.length; i++) {
            if (!arrClone[i]) {
                isValid = false;
                Swal.fire({
                    icon: "error",
                    title: "Bạn vui lòng không để trống các trường",
                });
                break;
            }
        }
        return isValid;
    };

    const handleCreateCate = async () => {
        setIsLoading(true);
        const check = handleValidate();
        if (!check) {
            setIsLoading(false);
            return;
        }

        let dataBuider = {
            title: nameCate,
            description: desc.html,
            description_markdown: desc.text,
            is_active: active === "active" ? true : false,
        };

        try {
            const Res = await HandleApi(createCategoriesService, dataBuider);
            if (Res.statusCode === 200) {
                Swal.fire({
                    icon: "success",
                    title: "Bạn đã tạo thành công",
                });
                setNameCate("");
                setActive("");
                setDesc({
                    html: "",
                    text: "",
                });
            }
        } catch (err) {
            console.log(err);
            Swal.fire({
                icon: "error",
                title: "Đã xãy ra lỗi bạn vui lòng thử lại !",
            });
        }
        setIsLoading(false);
    };

    return (
        <div className="ml-5">
            <p className="text-2xl">Tạo Danh Mục Sách</p>
            <Row>
                <Col span={12} className="border-r-2 border-[#ccc] pb-10 pr-10">
                    <div className="mt-8 w-[100%]">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            Tên danh mục sách
                        </label>
                        <input
                            value={nameCate}
                            type="text"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-[100%]"
                            placeholder="tên danh mục"
                            required
                            onChange={(e) => setNameCate(e.target.value)}
                        />

                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white mt-5">
                            Trạng thái
                        </label>
                        <select
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            onChange={(e) => setActive(e.target.value)}
                            value={active}
                        >
                            <option value="">Chọn trạng thái</option>
                            <option value="active">Hiện</option>
                            <option value="unactive">Ẩn</option>
                        </select>
                    </div>
                </Col>
                <Col span={12} className="pl-10">
                    <div className="mt-[10%] text-base flex py-3 pl-5 w-[90%] font-semibold border-[1px] border-[#ccc] rounded-lg">
                        Bạn chưa biết về danh mục sách ?
                        <ModalExplain />
                    </div>
                </Col>
            </Row>

            <div className="mt-10">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Mô tả danh mục sách
                </label>
                <MdEditor
                    value={desc.text}
                    style={{ height: "500px" }}
                    renderHTML={(text) => mdParser.render(text)}
                    onChange={handleEditorChange}
                />
            </div>

            <div className="w-full flex flex-row-reverse mt-10">
                <div className="w-[20%]">
                    <Button
                        className="w-full h-full bg-blue-500 hover:bg-blue-400 text-white font-bold py-5 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
                        onClick={handleCreateCate}
                        loading={isLoading}
                    >
                        Tạo
                    </Button>
                </div>
            </div>
        </div>
    );
}
