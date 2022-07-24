import React from "react";
import AttachFileIcon from '@mui/icons-material/AttachFile';
import FlagIcon from '@mui/icons-material/Flag';
import WatchLaterIcon from '@mui/icons-material/WatchLater';

const Task = (props) => {
    const taskitems = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    return taskitems.map((taskitem) => {
        return (
            <div className="mb-3" style={{backgroundColor: 'white' , padding: '15px' , borderRadius: '12px'}}>
                <h6 className="card-title mb-3">
                    <strong>Mobile Wireframes</strong>
                </h6>
                <span className="text-success px-3 py-1"
                      style={{backgroundColor: '#ebfbee', borderRadius: '7px', fontSize: '13px'}}>VIVERRA DIAM</span>
                <div className="card-footer px-0 mt-4" style={{backgroundColor: 'white'}}>
                    <div className="d-flex align-items-center justify-content-between">
                        <div className="d-flex">
                            <div className="d-flex justify-content-center align-items-center">
                                <AttachFileIcon className="text-muted pr-1 pt-1"/>
                                <span className="text-muted">3</span>
                            </div>
                            <div className="d-flex mx-2">
                                <FlagIcon className="text-danger pr-1 pt-1"/>
                                <span className="text-muted"></span>
                            </div>
                            <div className="d-flex">
                                <WatchLaterIcon className="text-muted pr-1 pt-1"/>
                                <span className="text-muted">Apr 12</span>
                            </div>
                        </div>
                        <img src={require("../../../../img/personPic.png")} alt="personPic" style={{width: '30px'}}
                             className="img-fluid"/>
                    </div>
                </div>
            </div>
        );
    })
}

export default Task;