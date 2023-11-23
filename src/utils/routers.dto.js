export const RouterDTO = Object.freeze({
    dashboard: "/*",
    auth: "/auth/:method",
    book: {
        manageBook: "/book/:method",
        handleBook: "/book/handle",
        allBook: "/book/allBook",
    },
    cate: {
        manageCate: "/cate/*",
        createCate: "/cate/createCategory",
        allCate: "/cate/allCategory",
    },
    user: {
        manageUser: "/user/*",
        allUser: "/user/allUser",
    },
    blog: {
        manageBlog: "/blog/*",
        createBlog: "/blog/createBlog",
        allBlog: "/blog/allBlog",
    },
    order: {
        getAllOrder: "/order/allorder",
    },
    Statistics: {
        dataStatistics: "/data/statistics",
    },
});
