export const RouterDTO = Object.freeze({
    dashboard: "/*",
    auth: "/auth/:method",
    book: "book/create",
    cate: {
        createCate: "/cate/createCategory",
        allCate: "/cate/allCategory",
    },
});
