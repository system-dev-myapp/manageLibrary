import React from "react";
import Header from "../../components/Header/Header";
import { RouterDTO } from "../../../utils/routers.dto";
import { Route, Routes } from "react-router";
import Categories from "../components/cate/Categories";
import MenuSideBar from "../../components/SideBar/Sidebar";
import CreateBook from "../components/Book/createBook";

export default function DashBoard() {
    return (
        <>
            <Header />
            <div className="mt-[56px]">
                <div className="h-[calc(100vh_-_56px)] flex items-center justify-between max-w-[100vw] overflow-hidden">
                    <div className="relative h-full min-w-[256px] overflow-y-auto overflow-x-hidden flex-shrink-0">
                        <div className="absolute w-full">
                            <MenuSideBar />
                        </div>
                    </div>
                    <div className="px-5 flex-shrink-0 w-[calc(100%_-_256px)] h-full overflow-x-auto bg-[#f6f6f6] text-[#333]">
                        <div className="rounded bg-[#fff] p-5 mt-5">
                            <Routes>
                                <Route
                                    path={RouterDTO.book}
                                    element={<CreateBook />}
                                />
                                <Route
                                    path={RouterDTO.cate.manageCate}
                                    element={<Categories />}
                                ></Route>
                            </Routes>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
