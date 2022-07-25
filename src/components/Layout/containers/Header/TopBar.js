import React from 'react';
import TopBarItems from "./TopBarItems";
import styled from "styled-components";
import {useSelector} from "react-redux";
import {theme} from "../../../../features/ThemeSlice";
import ThemeSwitcher from "../../../theme/ThemeSwitcher";

const TopBar = () => {
    const colors = useSelector(theme);
    return (
        <>
            <TopBarContainer className="navbar navbar-expand-md navbar-dark" color={colors.ColorSecondary}>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#collapsibleNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-center" id="collapsibleNavbar">
                    <ul className="navbar-nav">
                        <TopBarItems/>
                    </ul>
                </div>
                <ThemeSwitcher />
            </TopBarContainer>
        </>
    );
}

const TopBarContainer = styled.nav`
  background-color: ${props => props.color};
`;


export default TopBar;