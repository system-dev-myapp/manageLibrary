import axios from "axios";

export function createCategoriesService(data) {
    return axios.post("https://lib.fstack.com.vn/api/v1/cate", data, {
        withCredentials: true,
        headers: {
            "Content-Type": "multipart/form-data",
        },
    });
}
