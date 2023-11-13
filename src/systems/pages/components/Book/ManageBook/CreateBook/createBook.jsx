import React, { useEffect, useRef, useState } from "react";
import ReactSelect from "react-select";
import MarkdownIt from "markdown-it";
import MdEditor from "react-markdown-editor-lite";
import "react-markdown-editor-lite/lib/index.css";
import { Button, Col, Image, Input, Row, Select } from "antd";
import { dataCategories } from "../../../../../../data/dataCategories/dateCategories";
import { createBookService } from "../../../../../../services/bookService";
import PreviewListImage from "./slickImages/slickImages";
import handleValidateImage from "../../../../../../helpers/validateImageFile";
import { HandleApi } from "../../../../../../services/handleApi";
import Swal from "sweetalert2";
import ModalExplain from "./ModalExplain/ModalExplain";
// import ModalExplain from "../CreateBook/ModalExplain/ModalExplain";
import { getAllOptionsCateService } from "../../../../../../services/cateService";
import { HttpStatusCode } from "axios";
import handleUploadImageMarkdown from "../../../../../../helpers/handleUploadImageMarkdown";

export default function CreateBook() {
    const { TextArea } = Input;
    const [title, setTitle] = useState("");
    const [markdown, setMarkdown] = useState({
        text: "",
        html: "",
    });
    const [cate, setCate] = useState([]);
    const [active, setActive] = useState(dataCategories[0].value);
    const [number, setNumber] = useState(0);
    const [thumbnail, setThumbnail] = useState([]);
    const [thumbnailPreview, setThumbnailPreview] = useState("");
    const [listImage, setListImage] = useState([]);
    const [textMeta, setTextMeta] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [option, setOption] = useState([]);

    const refInputThumbnail = useRef(null);

    function handleEditorChange({ html, text }) {
        setMarkdown({ html: html, text: text });
    }

    useEffect(() => {
        const _fetch = async () => {
            try {
                const Res = await getAllOptionsCateService();
                if ((Res.statusCode = HttpStatusCode.Ok)) {
                    setOption(Res.data);
                }
            } catch (error) {
                console.log(error);
            }
        };
        _fetch();
    }, []);

    const mdParser = new MarkdownIt(/* Markdown-it options */);

    const handleChooseThumbnailFile = () => {
        const input = refInputThumbnail.current;
        if (input) {
            input.click();
        }
    };

    const handleChangeFileThumbnail = (e) => {
        const file = e.target.files[0];

        if (handleValidateImage(file)) {
            setThumbnailPreview(URL.createObjectURL(file));
            setThumbnail((prev) => [...prev, file]);
        }
    };

    const chooseListImageFile = (e) => {
        const files = e.target.files;
        let ImageFiles = [];
        if (files && files.length) {
            Array.from(files).map((item) => {
                if (handleValidateImage(item)) {
                    ImageFiles.push(item);
                }
            });
            setListImage(ImageFiles);
        }
    };

    const handleValidate = () => {
        let isValid = true;
        const arrClone = [
            title,
            markdown.html,
            markdown.text,
            number,
            active,
            cate,
            thumbnail,
            listImage,
            textMeta,
        ];
        for (let i = 0; i < arrClone.length; i++) {
            if (!arrClone[i]) {
                isValid = false;
                Swal.fire({
                    icon: "error",
                    title: " Bạn vui lòng không để trống các trường !",
                });
                break;
            }
        }
        return isValid;
    };

    const handleSelectCate = (e) => {
        setCate(e);
    };

    async function handleSubmid() {
        setIsLoading(true);
        const check = handleValidate();
        if (!check) {
            setIsLoading(false);
            return;
        }

        let dataBuilder = {
            title: title,
            description: markdown.html,
            description_markdown: markdown.text,
            stock: number,
            is_active: active === "active" ? true : false,
            categories: cate.map((item) => item.value),
            images: [...thumbnail, ...listImage],
            meta_description: textMeta,
        };
        try {
            const Res = await HandleApi(createBookService, dataBuilder);
            if (Res.statusCode === HttpStatusCode.Ok) {
                Swal.fire({
                    icon: "success",
                    title: "Thành Công!",
                });
                setCate([]);
                setTitle("");
                setMarkdown({
                    text: "",
                    html: "",
                });
                setActive(dataCategories[0].value);
                setNumber(0);
                setThumbnail([]);
                setThumbnailPreview("");
                setListImage([]);
                setTextMeta("");
            }
        } catch (error) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Có Lỗi Xảy Ra Vui Lòng Thử Lại Sau!",
                footer: '<a href="https://fstack.com.vn/">Tại sao tôi gặp vấn đề này?</a>',
            });
        }
        setIsLoading(false);
    }

    return (
        <div className="bg-[#fff] px-4 py-6 mt-4 mb-6 shadow-sm rounded-[10px]">
            <h2 className="flex justify-center py-[20px] font-[600]">
                Create Book
            </h2>
            <Row gutter={16}>
                <Col sm={12}>
                    <label className="block mb-2 text-sm font-medium text-gray-900">
                        Nhập Tên Sách Của Bạn
                    </label>
                    <input
                        className="w-full h-[35px] border rounded-[6px] outline-none pl-4"
                        placeholder="Vui lòng nhập tên sách...."
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </Col>
                <Col sm={12}>
                    <label className="block mb-2 text-sm font-medium text-gray-900">
                        Chọn Danh Mục Sách
                    </label>
                    <ReactSelect
                        placeholder="Bạn hãy chọn danh mục sách (có thể chọn nhiều)"
                        value={cate}
                        onChange={handleSelectCate}
                        isMulti
                        options={option}
                        className="w-full"
                    />
                </Col>
            </Row>
            <Row className="my-[20px]" gutter={16}>
                <Col span={12}>
                    <div className="status">
                        <label className="block mb-2 text-sm font-medium text-gray-900">
                            Chọn Trạng Thái
                        </label>
                        <Select
                            className="select w-full h-[35px] rounded-[6px]"
                            options={dataCategories}
                            placeholder="Chọn trạng thái"
                            value={active}
                            onChange={(value) => setActive(value)}
                        />
                    </div>
                </Col>
                <Col span={12}>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900">
                            Nhập số lượng sách
                        </label>
                        <input
                            className="pl-4 w-full h-[35px] border rounded-[6px] outline-none"
                            value={number}
                            placeholder="  Nhập số lượng sách"
                            onChange={(e) => setNumber(e.target.value)}
                            type="number"
                        />
                    </div>
                </Col>
            </Row>

            <Row>
                <Col span={24}>
                    <label className="block mb-2 text-sm font-medium text-gray-900">
                        meta description
                    </label>
                    <TextArea
                        className="border-[1px] w-[100%]"
                        placeholder="Nhập Meta Description cho sách (Tối đa 150 kí tự)"
                        allowClear
                        value={textMeta}
                        onChange={(e) => setTextMeta(e.target.value)}
                    />
                </Col>
            </Row>

            <div className="choose-images">
                <Row gutter={16}>
                    <Col sm={12}>
                        <label className="block mt-[10px] mb-[6px] text-sm font-medium text-gray-900">
                            Chọn Ảnh Thumbnail Sách
                        </label>
                        <div className="overflow-hidden shadow-sm h-[200px] border-[1px] border-solid border-[#ccc] rounded-[10px] bg-[#faf3f3] relative">
                            <input
                                onChange={handleChangeFileThumbnail}
                                ref={refInputThumbnail}
                                type="file"
                                accept="image/png, image/gif, image/jpeg"
                                hidden
                            />
                            <Image
                                src={thumbnailPreview}
                                style={{
                                    display: `${
                                        thumbnailPreview ? "block" : "none"
                                    }`,
                                }}
                                className="cursor-pointer absolute h-100-imp top-0 left-0 right-0 bottom-0 z-[1] w-[100%] h-[100%] object-cover"
                                alt="Hinh Anh"
                            />
                            <button
                                onClick={handleChooseThumbnailFile}
                                className="z-[2] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] hover:text-[#ee4d2d]"
                            >
                                <span className="text-[30px]">
                                    <i className="bi bi-upload"></i>
                                </span>
                                <p className="font-[600]">Chọn Ảnh Thumbnail</p>
                            </button>
                        </div>
                    </Col>
                    <Col sm={12}>
                        <PreviewListImage data={listImage} />
                        <div className="mt-[10px]">
                            <label
                                htmlFor="file-input"
                                className="block mb-2 text-sm font-medium text-gray-900"
                            >
                                Chọn Thêm Ảnh
                            </label>
                            <input
                                onChange={chooseListImageFile}
                                type="file"
                                name="file-input"
                                id="file-input"
                                multiple
                                accept="image/png, image/gif, image/jpeg"
                                className="block w-full border border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600   file:bg-gray-50 file:border-0 file:me-4  file:py-3 file:px-4 dark:file:bg-gray-700 dark:file:text-gray-400"
                            />
                        </div>
                        {!listImage && (
                            <div className="mt-[10%] text-base flex py-3 pl-5 w-[100%] font-semibold border-[1px] border-[#ccc] rounded-lg">
                                Bạn chưa biết về danh mục sách ?
                                <ModalExplain />
                            </div>
                        )}
                    </Col>
                </Row>
            </div>
            <div className="mt-6">
                <label className="block text-sm font-medium text-gray-900">
                    Nhập Mô Tả Sách
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
            <div className="flex justify-end mr-1">
                <Button
                    onClick={handleSubmid}
                    type="primary"
                    className="mt-[10px]"
                    loading={isLoading}
                >
                    Tạo Sách
                </Button>
            </div>
        </div>
    );
}
