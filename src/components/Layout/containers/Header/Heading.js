import React from "react";
import AddIcon from '@mui/icons-material/Add';
import styled from "styled-components";
import {useSelector} from "react-redux";
import {theme} from "../../../../features/ThemeSlice";

const Heading = () => {
    const colors = useSelector(theme);
    return (
        <>
            <HeadingContainer className="container-fluid border-bottom border-secondary" color={colors.ColorTop}>
                <div className="d-flex flex-lg-row flex-md-row flex-column justify-content-between py-3">
                    <div className="d-flex flex-row align-items-center justify-content-center mb-lg-0 mb-md-0 mb-3">
                        <h5>Product Design Team</h5>
                        <span className="badge py-2 px-2 ml-3" style={{backgroundColor: colors.ColorSecondary , color: colors.Color}}>Sprint 8</span>
                    </div>
                    <div className="d-flex flex-row align-items-center justify-content-center">
                        <div className="pr-4">
                            <img src={require("../../../../img/peoplePIC.png")} alt="peoplePic" className="img-fluid"
                                 style={{width: '90px'}}/>
                        </div>
                        <div className="d-flex align-items-center border-left pl-4">
                            <a href="#" className="text-decoration-none"><AddIcon/> New Member</a>
                        </div>
                    </div>
                </div>
            </HeadingContainer>
        </>
    );
}

const HeadingContainer = styled.div`
    background-color: ${props=>props.color};
`;


export default Heading;