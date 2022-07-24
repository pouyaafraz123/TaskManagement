import {createGlobalStyle} from "styled-components";

const Global = (props) => {
    return <GlobalStyle color={props.color} back={props.back}/>
}

const GlobalStyle = createGlobalStyle`
  body{
    background-color: ${props => props.back};
    color: ${props => props.color};
  }
`;

export default Global;