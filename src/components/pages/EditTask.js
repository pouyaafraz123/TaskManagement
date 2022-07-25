import styled from "styled-components";
import {Button, TextField} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {boards, EditTask} from "../../features/TasksSlice";

import {useState} from "react";
import {useNavigate, useParams} from "react-router";
import {selected} from "../../features/SelectedBoard";
import {theme} from "../../features/ThemeSlice";
import CloseIcon from "@mui/icons-material/Close";
import {Link} from "react-router-dom";
import React from "react";
const EditTaskPage = () => {
    const colors = useSelector(theme);
    const board = useSelector(boards);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const select = useSelector(selected);
    const params = useParams();
    const [title, setTitle] = useState(board[select][params.groupId][params.id].title);
    const [text, setText] = useState(board[select][params.groupId][params.id].text);
    const [groupId, setGroupId] = useState(params.groupId);

    return (
        <PageBack>
            <PageContent backTheme={colors.PopUpColor}>
                <TitleContainer backTheme={colors.ColorSecondary} textTheme={"white"}>
                    <div className="d-flex justify-content-between">
                        <div></div>
                        <Title>Create New Task</Title>
                        <CloseIcon style={{cursor: "pointer"}} fontSize={"medium"}
                                   onClick={() => navigate("/", {replace: false})}/>
                    </div>
                </TitleContainer>
                <FormInput border={colors.Color}>
                    <CssTextField textTheme={colors.Color}
                                  id="outlined-basic"
                                  label="Title:"
                                  variant="outlined"
                                  className={"inputs"}
                                  value={title}
                                  onChange={(e) => setTitle(e.target.value)}/>
                    <CssTextField textTheme={colors.Color}
                                  id="outlined-multiline-flexible"
                                  multiline
                                  maxRows={4}
                                  label="Text:"
                                  variant="outlined"
                                  className={"inputs"}
                                  value={text}
                                  onChange={(e) => setText(e.target.value)}/>

                    <label htmlFor={"dropdown"}>Move To</label>
                    <div className="dropdown w-100 d-flex justify-content-center align-items-center" id={"dropdown"}>
                        <button type="button" className="btn border-secondary dropdown-toggle"
                                style={{backgroundColor: colors.InputColor, color: colors.Color}}
                                data-toggle="dropdown">
                            {board[select][groupId].name}
                        </button>
                        <DropDownDiv back={colors.HoverColor} className="dropdown-menu dropdown-menu-right text-center"
                                     style={{backgroundColor: colors.InputColor, color: colors.Color,width:"80%"}}>
                            {RenderGroups(board[select], setGroupId)}
                            <Link style={{color: colors.Color}} className="dropdown-item" to="/add-board">
                                &#43; New Board</Link>
                        </DropDownDiv>
                    </div>

                    <Button variant="outlined" onClick={() => {
                        console.log(11111111)
                        dispatch(EditTask(
                            {
                                boardId: select,
                                groupId: groupId,
                                pGroup:params.groupId,
                                id: params.id,
                                title: title,
                                text: text
                            }));
                        navigate("/", {replace: false});
                    }}>Edit</Button>
                </FormInput>
            </PageContent>
        </PageBack>
    );
}

const RenderGroups = (groups, setGroupId) => {
    const groupIds = Object.keys(groups);

    return groupIds.map((groupId) => {
        if (groupId === "name" || groupId === "id" || groupId === "boardId")
            return "";
        return <li onClick={() => setGroupId(groupId)}>
            <a className="dropdown-item" href="#">{groups[groupId].name}
            </a></li>;
    });
}
const DropDownDiv = styled.div`
  .dropdown-item:hover {
    background-color: ${props => props.back} !important;
  }
`;

const PageBack = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.82);
`;
const PageContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${props => props.backTheme};
  border-radius: 25px;
  width: 50%;
  @media (max-width: 992px) {
    width: 70%;
  }
  @media (max-width: 768px) {
    width: 80%;
  }
`;

const TitleContainer = styled.div`
  background-color: ${props => props.backTheme};
  padding: 15px 25px;
  color: ${props => props.textTheme};
  border-radius: 25px 25px 0 0;
  font-size: 20px;
`;
const Title = styled.h1`
  text-align: center;
  @media (max-width: 992px) {
    font-size: 30px;
  }
  @media (max-width: 576px) {
    font-size: 25px;
  }
`;
const FormInput = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  gap: 20px;
  margin-top: 50px;
  align-items: center;

  .inputs {
    width: 80%;

    fieldset {
      border-radius: 10px;
      border-color: ${props => props.border} !important;
      overflow: hidden;
    }
  }

  button {
    width: 80%;
    height: 50px;
    font-weight: bold;
    margin-bottom: 50px;
    border-radius: 10px;
  }

`;

const CssTextField = styled(TextField)({
    '& label': {
        color: props => props.textTheme,
    },
    '.css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input': {
        color: props => props.textTheme,
    },
    '.css-14s5rfu-MuiFormLabel-root-MuiInputLabel-root': {
        color: props => props.textTheme,
    },
    '.css-dpjnhs-MuiInputBase-root-MuiOutlinedInput-root': {
        color: props => props.textTheme,
    }
});

export default EditTaskPage;