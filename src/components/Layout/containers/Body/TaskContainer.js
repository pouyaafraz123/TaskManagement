import React from "react";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import PendingIcon from '@mui/icons-material/Pending';
import Task from "./Task";
import {useSelector} from "react-redux";
import {boards} from "../../../../features/TasksSlice";
import {selected} from "../../../../features/SelectedBoard";
import {Link} from "react-router-dom";
import styled from "styled-components";
import {theme} from "../../../../features/ThemeSlice";

const TaskContainer = (props) => {
    const board = useSelector(boards);
    const select = useSelector(selected);
    const colors = useSelector(theme);
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    {renderGroups(board, select,colors,props)}
                </div>
            </div>
        </>
    );
}

const renderGroups = (board, select,colors,props) => {
    if (!board || !board[select]) return;
    const groups = board[select];
    const Keys = Object.keys(groups);
    return Keys.map((key) => {
        if (key === "name" || key === "id" || key === "boardId")
            return "";
        return (
            <div className="col-lg-3 col-md-6 col-12 mb-3" style={{zIndex:100}}>
                <Card className="card border-0" style={{borderRadius: '15px'}} color={colors.ColorTop}>
                    <Card className="card-header border-0" style={{borderRadius: '15px 15px 0 0'}} color={colors.ColorTop}>
                        <div className="d-flex align-items-center justify-content-between">
                            <div className="d-flex align-items-center">
                                <h6 className="mt-2">{groups[key].name}</h6>
                                <span
                                    className="badge badge-pill badge-secondary ml-2">
                                    {Object.keys(groups[key]).length - 3}
                                </span>
                            </div>
                            <div className="d-flex align-items-center">
                                <Link to={`/add-task/${key}`} className="text-muted"><AddCircleIcon/></Link>
                                <div className="text-muted"><PendingIcon/></div>
                            </div>
                        </div>
                    </Card>
                    <div className="card-body">
                        <Task groupId={key} s={props.s}/>
                    </div>
                </Card>
            </div>
        );
    })
}

const Card = styled.div`
    background-color: ${props=>props.color} !important;
`;

export default TaskContainer;