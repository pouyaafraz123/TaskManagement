import styled from "styled-components";

const AddTask = ()=>{
    return (
        <Back>
            <Content>
                <Title>Craete New Task</Title>
                <Input type={"text"} placeholder={"Title:"}/>
                <Input type={"text"} placeholder={"Text:"}/>
            </Content>
        </Back>
    );
}

const Back = styled.div``;
const Content = styled.div``;
const Title = styled.h1``;
const Input = styled.input``;

export default AddTask;