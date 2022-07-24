import React from 'react';
import Layout from "../components/Layout/Layout";
import Global from "./Global";
import {useSelector} from "react-redux";
import {theme} from "../features/ThemeSlice";

const App = () => {
    const colors = useSelector(theme);
    return (
        <>
            <Global color={colors.Color} back={colors.ColorPrimary}/>
            <Layout/>
        </>
    );
}


export default App;