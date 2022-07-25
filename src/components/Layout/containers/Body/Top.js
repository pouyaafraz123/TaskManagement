import React from "react";
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import FilterListIcon from '@mui/icons-material/FilterList';
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import {boards} from "../../../../features/TasksSlice";
import {Select, selected} from "../../../../features/SelectedBoard";
import {Link} from "react-router-dom";
import {theme} from "../../../../features/ThemeSlice";

const Top = () => {
    const colors = useSelector(theme);
    const board = useSelector(boards);
    const select = useSelector(selected);
    const dispatch = useDispatch();
    return (
        <>
            <DivContainer className="container-fluid">
                <div className="d-flex flex-lg-row flex-md-row flex-column justify-content-between py-3">
                    <div className="d-flex flex-row align-items-center justify-content-center mb-lg-0 mb-md-0 mb-3">
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <div className="input-group-text border-right-0"
                                     style={{backgroundColor: colors.InputColor, color: colors.Color}}><SearchIcon/>
                                </div>
                            </div>
                            <input type="search" name="search" id="search" placeholder={"Search Items . . ."}
                                   className="form-control border-left-0"
                                   style={{backgroundColor: colors.InputColor, color: colors.Color}}/>
                        </div>
                    </div>
                    <div
                        className="d-flex flex-lg-row flex-md-row flex-column align-items-center justify-content-center">
                        <Link to={"/add-task-group"}
                              className="btn " style={{backgroundColor: colors.ColorSecondary , color: colors.Color}}>
                            <AddIcon/>&nbsp; New Item
                        </Link>
                        <button className="btn border-secondary mx-2 my-lg-0 my-md-0 my-3" style={{backgroundColor: colors.InputColor , color: colors.Color}}>
                            <FilterListIcon/>&nbsp; Filter
                        </button>
                        <div className="dropdown">
                            <button type="button" className="btn border-secondary dropdown-toggle" style={{backgroundColor: colors.InputColor , color: colors.Color}}
                                    data-toggle="dropdown">
                                {renderButton(board, select)}
                            </button>
                            <DropDownDiv back={colors.HoverColor} className="dropdown-menu dropdown-menu-right text-center" style={{backgroundColor: colors.InputColor , color: colors.Color}}>
                                {renderBoards(board, dispatch , colors)}
                                <Link style={{color: colors.Color}} className="dropdown-item" to="/add-board">
                                    &#43; New Board</Link>
                            </DropDownDiv>
                        </div>
                    </div>
                </div>
            </DivContainer>
        </>
    );
}

const DropDownDiv = styled.div`
  .dropdown-item:hover {
    background-color: ${props => props.back} !important;
  }
`;

function renderButton(board, select) {
    if (!board || !board[select]) return <span>Select Board</span>;
    else {
        return board[select].name || <span>Select Board</span>
    }
}

const renderBoards = (board, dispatch , colors) => {
    if (!board) return;

    const keys = Object.keys(board);
    return keys.map((item) => {
        return (
            <a className="dropdown-item" style={{color: colors.Color}} href="#" onClick={() => {
                dispatch(Select(board[item].id))
            }}>{board[item].name}</a>
        );
    });
}

const DivContainer = styled.div`
  input:focus {
    border-color: #ced4da;
    box-shadow: none;
  }

  input {
    border-radius: 0 12px 12px 0 !important;
  }

  .input-group-text {
    border-radius: 12px 0 0 12px !important;
  }

  @media only screen and (max-width: 768px) {
    button {
      display: block;
      width: 100%;
    }

    .dropdown, .dropdown-menu {
      width: 100%;
    }
  }
`;

export default Top;