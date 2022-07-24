import React from "react";
import AttachFileIcon from '@mui/icons-material/AttachFile';
import FlagIcon from '@mui/icons-material/Flag';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import {useSelector} from "react-redux";
import {boards} from "../../../../features/TasksSlice";
import {selected} from "../../../../features/SelectedBoard";
import {theme} from "../../../../features/ThemeSlice";

const Task = (props) => {
    const board = useSelector(boards);
    const select = useSelector(selected);
    const colors = useSelector(theme);
    if (!board || !board[select] || !board[select][props.groupId])
        return "";
    const taskItems = Object.keys(board[select][props.groupId]);
    return taskItems.map((item) => {
        if (item === "name" || item === "id" || item === "boardId") {
            return "";
        }

        const task = board[select][props.groupId][item];
        return (
                <div className="mb-3" style={
                    {
                        backgroundColor: colors.ColorPrimary,
                        padding: '15px',
                        borderRadius: '12px',
                        zIndex: 2234
                    }}>
                    <h6 className="card-title mb-2">
                        <strong>{task.title}</strong>
                    </h6>
                    <p className={"text-muted"}>{task.text}</p>
                    <span className="text-success px-3 py-1"
                          style={{
                              backgroundColor: colors.ColorBadge,
                              borderRadius: '7px',
                              fontSize: '13px'
                          }}>VIVERRA DIAM</span>
                    <div className="card-footer px-0 mt-4" style={{backgroundColor: colors.ColorPrimary}}>
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