export const RouterDTO = Object.freeze({
    dashboard: "/*",
    auth: "/auth/:method",
    book: "/create-books",
    cate: {
        createCate: "/cate/createCategory",
        allCate: "/cate/allCategory",
    },
});
