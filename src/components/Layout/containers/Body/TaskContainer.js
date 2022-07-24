import React from "react";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import PendingIcon from '@mui/icons-material/Pending';
import Task from "./Task";

const TaskContainer = (props) => {
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    {renderGroups()}
                </div>
            </div>
        </>
    );
}

const renderGroups = () => {
    const groups = [1, 2, 3, 4];
    return groups.map((group) => {
        return (
            <div className="col-lg-3 col-md-6 col-12 mb-3">
                <div className="card bg-light border-0" style={{borderRadius: '15px'}}>
                    <div className="card-header border-0 bg-light" style={{borderRadius: '15px 15px 0 0'}}>
                        <div className="d-flex align-items-center justify-content-between">
                            <div className="d-flex align-items-center">
                                <h6 className="mt-2">To Do</h6>
                                <span className="badge badge-pill badge-secondary ml-2">3</span>
                            </div>
                            <div className="d-flex align-items-center">
                                <div className="text-muted"><AddCircleIcon/></div>
                                <div className="text-muted"><PendingIcon/></div>
                            </div>
                        </div>
                    </div>
                    <div className="card-body">
                        <Task />
                    </div>
                </div>
            </div>
        );
    })
}

export default TaskContainer;