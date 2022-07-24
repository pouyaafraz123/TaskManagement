import React from "react";
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import FilterListIcon from '@mui/icons-material/FilterList';
import styled from "styled-components";
import {useSelector} from "react-redux";
import {boards} from "../../../../features/TasksSlice";
import {useParams} from "react-router";

const Top = () => {
    const board = useSelector(boards);
    const params = useParams();
    console.log(params.id);
    return (
        <>
            <DivContainer className="container-fluid">
                <div className="d-flex flex-lg-row flex-md-row flex-column justify-content-between py-3">
                    <div className="d-flex flex-row align-items-center justify-content-center mb-lg-0 mb-md-0 mb-3">
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <div className="input-group-text bg-transparent border-right-0"><SearchIcon/></div>
                            </div>
                            <input type="search" name="search" id="search" placeholder={"Search Items . . ."}
                                   className="form-control border-left-0"/>
                        </div>
                    </div>
                    <div
                        className="d-flex flex-lg-row flex-md-row flex-column align-items-center justify-content-center">
                        <button className="btn btn-primary"><AddIcon/>&nbsp; New Item</button>
                        <button className="btn btn-light border-secondary mx-2 my-lg-0 my-md-0 my-3 text-muted">
                            <FilterListIcon/>&nbsp; Filter
                        </button>
                        <div className="dropdown">
                            <button type="button" className="btn btn-light border-secondary text-muted dropdown-toggle"
                                    data-toggle="dropdown">
                                Board{/* TODO OPEN WITH ROUT*/}
                            </button>
                            <div className="dropdown-menu dropdown-menu-right text-center">
                                {renderBoards(board)}
                                <a className="dropdown-item" href="#">
                                    &#43; New Board</a>
                            </div>
                        </div>
                    </div>
                </div>
            </DivContainer>
        </>
    );
}

const renderBoards = (board) => {
    const keys = Object.keys(board);
    return keys.map((item)=>{
        return (
            <a className="dropdown-item" href="#">board[item].name</a>
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
`;

export default Top;