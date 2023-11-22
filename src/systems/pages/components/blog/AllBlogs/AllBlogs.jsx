import React from "react";
import { Table } from "antd";
import { columnsTableBlogs } from "../../../../../data/dataTableBlogs/dataTableBlogs";

export default function AllBlogs() {
    return (
        <div>
            <p>quản lí bài viết</p>
            <div className="table_blogs">
                <Table
                    // pagination={false}
                    bordered
                    virtual
                    scroll={{ x: 400, y: 400 }}
                    rowKey="id"
                    // dataSource={allUsers}
                    columns={columnsTableBlogs.map((item) => {
                        if (item.dataIndex === "action") {
                            item.render = (...data) => {
                                return <div>a</div>;
                            };
                        }
                        return item;
                    })}
                />
            </div>
            <div className=""></div>
        </div>
    );
}
