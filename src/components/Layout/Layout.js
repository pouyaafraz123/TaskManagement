import React from "react";
import Header from "./containers/Header/Header";
import Body from "./containers/Body/Body";
import {BrowserRouter} from "react-router-dom";
import {Route, Routes} from "react-router";
import AddBoardPage from "../pages/AddBoardPage";
import AddTaskGroup from "../pages/AddTaskGroup";
import AddTask from "../pages/AddTask";

const Layout = () => {

    return (
        <>

            <BrowserRouter>
                <Header/>
                <Routes>
                    <Route element={<Body/>} path={"/"}/>
                    <Route element={<AddBoardPage/>} path={"/add-board"}/>
                    <Route element={<AddTaskGroup/>} path={"/add-task-group"}/>
                    <Route element={<AddTask/>} path={"/add-task/:id"}/>
                </Routes>
            </BrowserRouter>

        </>
    );
}

export default Layout;