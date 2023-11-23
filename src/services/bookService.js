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
    return axios.put("/book", data, {
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

export function GetBookDetailService({ slug }) {
    return axios.get(`/book/detail/${slug}`, {
        withCredentials: true,
    });
}

export function UpdateStatusImagesService(data) {
    return axios.patch("/book/update-image-status", data, {
        withCredentials: true,
        headers: {
            "Content-Type": "multipart/form-data",
        },
    });
}

export function RevalidateBookService() {
    return axios.get(
        ` https://lib-next-js.vercel.app/api/revalidatebook?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJidWlsZCI6dHJ1ZX0.MhVgMq4AdHvFLy-6se9sokN2oUttJE-ZsfHSCe6YEgI&tag=detail-book`,
        {
            withCredentials: true,
        }
    );
}
