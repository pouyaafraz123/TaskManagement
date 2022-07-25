import React from "react";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import PendingIcon from '@mui/icons-material/Pending';
import Task from "./Task";
import {useDispatch, useSelector} from "react-redux";
import {boards} from "../../../../features/TasksSlice";
import {selected} from "../../../../features/SelectedBoard";
import {Link} from "react-router-dom";
import styled from "styled-components";
import {theme} from "../../../../features/ThemeSlice";
import {DeleteTaskGroup} from "../../../../features/TasksSlice";

const TaskContainer = (props) => {
    const board = useSelector(boards);
    const select = useSelector(selected);
    const colors = useSelector(theme);
    const dispatch = useDispatch();
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    {renderGroups(board, select,colors,props,dispatch)}
                </div>
            </div>
        </>
    );
}

const renderGroups = (board, select,colors,props,dispatch) => {
    if (!board || !board[select]) return;
    const groups = board[select];
    const Keys = Object.keys(groups);
    return Keys.map((key) => {
        if (key === "name" || key === "id" || key === "boardId")
            return "";
        return (
            <div className="col-lg-3 col-md-6 col-12 mb-3">
                <Card className="card border-0" style={{borderRadius: '15px'}} color={colors.ColorTop}>
                    <Card className="card-header border-0" style={{borderRadius: '15px 15px 0 0'}}
                          color={colors.ColorTop}>
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
                                <DeleteOption back={colors.OptionColor} color={colors.Color}>
                                    {/*<PendingIcon className="text-muted deleteBTN"/>*/}
                                    {/*<div className="deleteBox">Delete</div>*/}
                                    <div className="deleteBTN">
                                        <PendingIcon className="text-muted"/>
                                        <div
                                            className="deleteBox"
                                            onClick={()=>dispatch(DeleteTaskGroup({boardId:select,id:key}))}
                                        >
                                            <strong>Delete</strong>
                                        </div>
                                    </div>
                                </DeleteOption>
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
  background-color: ${props => props.color} !important;
`;

const DeleteOption = styled.div`
  .deleteBTN {
    cursor: pointer;
    position: relative;
  }

  .deleteBox {
    cursor: pointer;
    padding: 5px 15px;
    border-radius: 8px;
    width: 80px;
    transition: all ease 0.7s;
    position: absolute;
    right: -25px;
    top: 33px;
    background-color: ${props => props.back};
    color: ${props => props.color};
    margin-top: 30px;
    visibility: hidden;
    opacity: 0;
  }

  .deleteBox::after {
    content: "";
    border-width: 5px;
    border-style: solid;
    position: absolute;
    border-color: transparent transparent ${props => props.back} transparent;
    bottom: 100%;
    left: 50%;
    margin-left: -2px;
    transition: all ease 0.7s;
  }

  .deleteBTN:hover .deleteBox {
    margin-top: 0;
    visibility: visible;
    opacity: 1;
  }

  .deleteBox:hover {
    background-color: #b0535c;
    color: #5f0d0f;
  }

  .deleteBox:hover::after {
    border-color: transparent transparent #b0535c transparent;;
  }
`;

export default TaskContainer;