import React from "react";
import AddIcon from '@mui/icons-material/Add';

const Heading = (props) => {
    return (
        <>
            <div className="container-fluid border-bottom border-secondary bg-light">
                <div className="d-flex flex-lg-row flex-md-row flex-column justify-content-between py-3">
                    <div className="d-flex flex-row align-items-center justify-content-center mb-lg-0 mb-md-0 mb-3">
                        <h5>Product Design Team</h5>
                        <span className="badge badge-primary text-white py-2 px-2 ml-3">Sprint 8</span>
                    </div>
                    <div className="d-flex flex-row align-items-center justify-content-center">
                        <div className="pr-4">
                            <img src={require("../../../../img/peoplePIC.png")} alt="peoplePic" className="img-fluid" style={{width: '90px'}}/>
                        </div>
                        <div className="d-flex align-items-center border-left pl-4">
                            <a href="src/components/Layout/containers/Header/Header#" className="text-decoration-none"><AddIcon/> New Member</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Heading;