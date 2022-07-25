import styled from "styled-components";
import {Button, TextField} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {CreateTask} from "../../features/TasksSlice";
import {v4 as uuid} from "uuid";
import {useState} from "react";
import {useNavigate, useParams} from "react-router";
import {selected} from "../../features/SelectedBoard";
import {theme} from "../../features/ThemeSlice";
import CloseIcon from "@mui/icons-material/Close";

const AddTask = () => {
    const colors = useSelector(theme);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const select = useSelector(selected);
    const [title, setTitle] = useState("");
    const [text, setText] = useState("");
    const params = useParams();
    return (
        <PageBack>
            <PageContent backTheme={colors.PopUpColor}>
                <TitleContainer backTheme={colors.ColorSecondary} textTheme={"white"}>
                    <div className="d-flex justify-content-between">
                        <div></div>
                        <Title>Create New Task</Title>
                        <CloseIcon style={{cursor:"pointer"}} fontSize={"medium"} onClick={()=>navigate("/", {replace: false})}/>
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
                    <Button variant="outlined" onClick={() => {
                        dispatch(CreateTask(
                            {
                                boardId: select,
                                groupId: params.id,
                                id: uuid(),
                                title: title,
                                text: text
                            }));
                        navigate("/", {replace: false});
                    }}>Create</Button>
                </FormInput>
            </PageContent>
        </PageBack>
    );
}

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
    '.css-dpjnhs-MuiInputBase-root-MuiOutlinedInput-root':{
        color: props => props.textTheme,
    }
});

export default AddTask;