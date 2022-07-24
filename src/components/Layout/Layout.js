import React from "react";
import Header from "./containers/Header/Header";
import Body from "./containers/Body/Body";
import {BrowserRouter} from "react-router-dom";
import {Route, Routes} from "react-router";
import AddBoardPage from "../pages/AddBoardPage";

const Layout = () => {

    return (
        <>

            <BrowserRouter>
                <Header/>
                <Routes>
                    <Route element={<Body/>} path={"/"}/>
                    <Route element={<AddBoardPage/>} path={"/add-board"}/>
                </Routes>
            </BrowserRouter>

        </>
    );
}

export default Layout;