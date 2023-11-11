export const RouterDTO = Object.freeze({
    dashboard: "/*",
    auth: "/auth/:method",
    book: {
        manageBook: "/book/*",
        createBook: "/book/create",
        allBook: "/book/allBook",
    },
    cate: {
        manageCate: "/cate/*",
        createCate: "/cate/createCategory",
        allCate: "/cate/allCategory",
    },
});
