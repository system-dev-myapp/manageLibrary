import React, { useRef, useState } from "react";
import ReactSelect from "react-select";
import MarkdownIt from "markdown-it";
import MdEditor from "react-markdown-editor-lite";
import "react-markdown-editor-lite/lib/index.css";
import { Col, Row, Select } from "antd";
import { dataCategories } from "../../../../data/dataCategories/dateCategories";

export default function CreateBook() {
    const [title, setTitle] = useState("");
    const [state, setState] = useState({
        text: "",
        html: "",
    });
    const [cate, setCate] = useState("");
    const [active, setActive] = useState("");
    const [number, setNumber] = useState("");

    function handleEditorChange({ html, text }) {
        setState({ html: html, text: text });
    }

    const options = [
        { value: "option1", label: "Option 1" },
        { value: "option2", label: "Option 2" },
        { value: "option3", label: "Option 3" },
    ];

    const mdParser = new MarkdownIt(/* Markdown-it options */);

    async function handleSubmid() {
        if (!title || !cate || !active || !number || !state) {
            alert("Vui lòng điền đầy đủ thông tin");
            return;
        }

        let dataBuilder = {
            title: title,
            description: state.html,
            description_markdown: state.text,
            stock: number,
            is_active: active === "active" ? true : false,
            categories: cate,
        };
        try {
            // ghep api
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <h2 className="flex justify-center py-[20px] font-[600]">
                Create Book
            </h2>
            <div className="flex">
                <p className="flex items-center text-[14px]">Nhập tên sách:</p>
                <input
                    className="border rounded-md w-[75%] h-[40px] ml-[42.5px]"
                    placeholder="   Vui lòng nhập tên sách!!!"
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </div>
            <div className="flex  mt-[20px]">
                <p className="flex items-center text-[14px] mr-[10px]">
                    Chọn danh mục sách:
                </p>
                <ReactSelect
                    value={cate}
                    onChange={(e) => setCate(e)}
                    isMulti
                    options={options}
                    className="w-[75%]"
                />
            </div>
            {/* <div className="pt-[10px] mb-[50px] flex ">
                <div>
                    <SlickImages />
                </div>
            </div> */}
            <Row className="my-[20px]">
                <Col span={12}>
                    <div className="status flex items-center">
                        <p>Trạng thái:</p>
                        <Select
                            className="select w-[80%] ml-[10px] h-[35px]"
                            options={dataCategories}
                            placeholder="Chọn trạng thái"
                            value={active}
                            onChange={(value) => setActive(value)}
                        />
                    </div>
                </Col>
                <Col span={12}>
                    <div className="flex items-center">
                        <p>Số lượng sách:</p>
                        <input
                            className="border rounded-md w-[80%] ml-[10px] h-[35px]"
                            value={number}
                            placeholder="  Nhập số lượng sách"
                            onChange={(e) => setNumber(e.target.value)}
                            type="number"
                        />
                    </div>
                </Col>
            </Row>
            <MdEditor
                className="mt-[20px]"
                style={{ height: "500px" }}
                renderHTML={(text) => mdParser.render(text)}
                onChange={handleEditorChange}
            />
            <div className="flex justify-end mr-1">
                <button
                    onClick={handleSubmid}
                    className="bg-[#508bf3] p-2 border rounded-md my-[20px] "
                >
                    Create
                </button>
            </div>
        </>
    );
}
