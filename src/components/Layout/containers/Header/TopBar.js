import React from 'react';
import TopBarItems from "./TopBarItems";
import styled from "styled-components";

const TopBar = () => {
    return (
        <>
            <TopBarContainer className="navbar navbar-expand-md navbar-dark">
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#collapsibleNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-center" id="collapsibleNavbar">
                    <ul className="navbar-nav">
                        <TopBarItems/>
                    </ul>
                </div>
            </TopBarContainer>
        </>
    );
}

const TopBarContainer = styled.nav`
  background-color: #004cff;
`;


export default TopBar;