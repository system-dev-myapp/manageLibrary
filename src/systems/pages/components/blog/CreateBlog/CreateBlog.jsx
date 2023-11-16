import { Button, Col, Divider, Input, Row, Select, Typography } from "antd";
import React from "react";
import { useState } from "react";
import MarkdownIt from "markdown-it";
import MdEditor from "react-markdown-editor-lite";
import "react-markdown-editor-lite/lib/index.css";
import handleUploadImageMarkdown from "../../../../../helpers/handleUploadImageMarkdown";
import { dataCategories } from "../../../../../data/dataCategories/dateCategories";

const { Paragraph } = Typography;

export default function CreateBlog() {
    const { TextArea } = Input;
    const [title, setTitle] = useState("");
    const [active, setActive] = useState(dataCategories[0].value);
    const [metaDescription, setMetaDescription] = useState("");
    const [markdown, setMarkdown] = useState({
        text: "",
        html: "",
    });

    const mdParser = new MarkdownIt(/* Markdown-it options */);

    function handleEditorChange({ html, text }) {
        setMarkdown({ html: html, text: text });
    }

    const handleCreateBlog = () => {};

    return (
        <div>
            <p className="text-2xl font-[600]">Tạo bài viết</p>
            <Paragraph
                ellipsis={{ rows: 2, expandable: true, symbol: "more" }}
                className="py-2 text-justify font-[600] mt-4"
            >
                Blog là một website thông tin riêng hoặc nhật ký trực tuyến, với
                cách trình bày các bài viết mới nhất được đưa lên đầu. Người
                viết blog có thể là cá nhân hay một nhóm nhỏ, thể hiện cái nhìn
                chủ quan của họ về một chủ đề nhất định, viết về những điều họ
                thích.
                <br />
                <Divider />
            </Paragraph>

            <Row gutter={16}>
                <Col span={12}>
                    <div className="mt-8 w-[100%]">
                        <label className="block mb-2 text-sm font-medium text-gray-900 ">
                            Tên bài viết
                        </label>
                        <Input
                            className="h-[40px]"
                            placeholder="tên bài viết"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>
                </Col>
                <Col span={12}>
                    <div className="mt-8 w-[100%]">
                        <label className="block mb-2 text-sm font-medium text-gray-900">
                            Chọn Trạng Thái
                        </label>
                        <Select
                            className="select w-full h-[40px] rounded-[6px]"
                            options={dataCategories}
                            placeholder="Chọn trạng thái"
                            value={active}
                            onChange={(value) => setActive(value)}
                        />
                    </div>
                </Col>
            </Row>
            <Row className="mt-[20px]">
                <Col span={24}>
                    <label className="block mb-2 text-sm font-medium text-gray-900">
                        meta description
                    </label>
                    <TextArea
                        value={metaDescription}
                        onChange={(e) => setMetaDescription(e.target.value)}
                        className="border-[1px] w-[100%]"
                        placeholder="Nhập Meta Description cho sách (Tối đa 150 kí tự)"
                        allowClear
                    />
                </Col>
            </Row>
            <div className="mt-6">
                <label className="block text-sm font-medium text-gray-900">
                    Tạo nội dung bài viết
                </label>
                <MdEditor
                    value={markdown.text}
                    className="mt-[10px]"
                    style={{ height: "500px" }}
                    onImageUpload={handleUploadImageMarkdown}
                    renderHTML={(text) => mdParser.render(text)}
                    onChange={handleEditorChange}
                />
            </div>
            <div className="w-[10%] ml-[90%] my-[20px]">
                <Button
                    type="primary"
                    className="w-full"
                    onClick={handleCreateBlog}
                >
                    Tạo
                </Button>
            </div>
        </div>
    );
}
