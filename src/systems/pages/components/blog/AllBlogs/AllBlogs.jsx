import { Button } from "antd";
import React from "react";

export default function AllBlogs() {
    return (
        <div>
            <table className="w-[100%]">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Tên bài viết</th>
                        <th>Trạng thái</th>
                        <th>Hành động</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="text-center">1</td>
                        <td className="text-center">Tên </td>
                        <td className="text-center">Ẩn/ hiện</td>
                        <td className="text-center">
                            <Button type="primary">Chỉnh sửa bài viết</Button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
