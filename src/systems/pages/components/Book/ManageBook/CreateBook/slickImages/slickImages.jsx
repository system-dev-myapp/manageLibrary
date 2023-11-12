import { Image } from "antd";
import React, { memo, useState } from "react";
import Slider from "react-slick";

// eslint-disable-next-line react/prop-types
const PreviewListImage = ({ data = [] }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [linkPreview, setLinkPreview] = useState("");

    const settings = {
        customPaging: function (i) {
            return (
                <a>
                    <img
                        className="w-[50px] h-[50px] object-cover flex-shrink-0 block rounded-[50%] shadow-sm border-[1px] border-solid border-[#ccc]"
                        src={URL.createObjectURL(data[i])}
                    />
                </a>
            );
        },
        dots: true,
        dotsClass: "slick-dots slick-thumb",
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    };

    const handleClickPreviewImage = (link) => {
        setIsOpen(true);
        setLinkPreview(link);
    };

    return (
        <div className="slider-preview-image">
            <div className="preview-image-custom-slider">
                {isOpen && (
                    <Image.PreviewGroup
                        preview={{
                            visible: isOpen,
                            onVisibleChange: (visible) => {
                                setIsOpen(visible);
                            },
                        }}
                    >
                        <Image
                            src={linkPreview}
                            className="hidden"
                            preview={(visible) => {
                                console.log(visible);
                            }}
                        />
                    </Image.PreviewGroup>
                )}
            </div>
            <Slider {...settings}>
                {data &&
                    data.length > 0 &&
                    data.map((item, index) => (
                        <div key={index}>
                            <Image
                                onClick={() =>
                                    handleClickPreviewImage(
                                        URL.createObjectURL(item)
                                    )
                                }
                                preview={false}
                                key={index}
                                className="w-[100%] object-cover h-200px-imp rounded-[6px] border-[1px] border-solid border-[#ccc]"
                                src={URL.createObjectURL(item)}
                            />
                        </div>
                    ))}
            </Slider>
        </div>
    );
};

// eslint-disable-next-line react-refresh/only-export-components
export default memo(PreviewListImage);
