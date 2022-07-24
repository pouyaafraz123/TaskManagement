import styled from "styled-components";
import {Button, TextField} from "@mui/material";
import {useDispatch} from "react-redux";
import {CreateBoard} from "../../features/TasksSlice";
import {v4 as uuid} from "uuid";
import {useState} from "react";
import {useNavigate} from "react-router";

const AddBoardPage = (props) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [value, setValue] = useState("");
    return (
        <PageBack>
            <PageContent>
                <TitleContainer>
                    <Title>Create New Board</Title>
                </TitleContainer>
                <FormInput>
                    <TextField
                        id="outlined-basic"
                        label="Name:"
                        variant="outlined"
                        className={"inputs"}
                        value={value}
                        onChange={(e) => setValue(e.target.value)}/>
                    <Button variant="outlined" onClick={() => {
                        dispatch(CreateBoard({id: uuid(), name: value}));
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
  background-color: #ffffff;
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
  background-color: #004BFF;
  padding: 15px 25px;
  color: white;
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
  justify-content: center;
  margin-top: 50px;
  align-items: center;

  .inputs {
    width: 80%;

    fieldset {
      border-radius: 10px;
      overflow: hidden;
    }
  }

  button {
    width: 80%;
    margin-top: 30px;
    margin-bottom: 50px;
    height: 50px;
    font-weight: bold;
  }




`;

export default AddBoardPage;