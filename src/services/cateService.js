import axios from "axios";

export function createCategoriesService(data) {
    return axios.post("https://lib.fstack.com.vn/api/v1/cate", data, {
        withCredentials: true,
        headers: {
            "Content-Type": "multipart/form-data",
        },
    });
}

export function getAllCateService({ page = 1, pageSize = 10 }) {
    return axios.get(
        `https://lib.fstack.com.vn/api/v1/cate?page=${page}&pageSize=${pageSize}`,
        {
            withCredentials: true,
        }
    );
}

export function UpdateCategoriesService(data) {
    return axios.put("https://lib.fstack.com.vn/api/v1/cate/update", data, {
        withCredentials: true,
        headers: {
            "Content-Type": "multipart/form-data",
        },
    });
}
