import axios from "../axios";

export function createBookService(data) {
    return axios.post("/book", data, {
        withCredentials: true,
        headers: {
            "Content-Type": "multipart/form-data",
        },
    });
}

export function UpdateBookService(data) {
    return axios.put("https://lib.fstack.com.vn/api/v1/book", data, {
        withCredentials: true,
        headers: {
            "Content-Type": "multipart/form-data",
        },
    });
}

export function GetAllBooksService({ page = 1, pageSize = 10 }) {
    return axios.get(`/book?page=${page}&pageSize=${pageSize}`, {
        withCredentials: true,
    });
}
