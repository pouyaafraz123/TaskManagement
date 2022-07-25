import React from 'react';
import styled from 'styled-components'
import DarkModeIcon from '@mui/icons-material/DarkMode';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import {useDispatch, useSelector} from "react-redux";
import {theme} from "../../features/ThemeSlice";
import {ToggleTheme} from "../../features/ThemeSlice";
import Theme from "./Theme";

const ThemeSwitcher = () => {
    const colors = useSelector(theme);
    const dispatch = useDispatch();
    return (
        <DivContainer
            back={colors.TogglerColor}

            style={{
            position: 'absolute',
            top: '14px',
            right: '10px'
        }} className="switch">
            <input type="checkbox" className="checkbox" id="checkbox" checked={colors.theme==="light"}/>
            <label onClick={()=> {
                console.log(1)
                dispatch(ToggleTheme(colors.theme==="light"?Theme.dark:Theme.light));
            }} htmlFor="checkbox" className="label">
                <i className="moon"><DarkModeIcon fontSize={"small"}/></i>
                <i className='sun'><WbSunnyIcon fontSize={"small"}/> </i>
                <div className='ball'></div>
            </label>
        </DivContainer>
    );
}

const DivContainer = styled.div`
  .checkbox {
    opacity: 0;
    position: absolute;
  }

  .label {
    width: 50px;
    height: 25px;
    background-color: ${props => props.back};
    display: flex;
    border-radius: 50px;
    align-items: center;
    justify-content: space-between;
    padding: 5px;
    position: relative;
    transform: scale(1.2);
  }

  .ball {
    width: 20px;
    height: 20px;
    background-color: #86a9ff;
    position: absolute;
    top: 3px;
    left: 3px;
    border-radius: 50%;
    transition: transform 0.2s linear;
  }

  .checkbox:checked + .label .ball {
    transform: translateX(24px);
  }

  .moon {
    color: pink;
    margin-bottom: 3px;
    margin-left: -3px;
  }

  .sun {
    color: yellow;
    margin-bottom: 3px;
    margin-right: -2px;
  }
`;

export default ThemeSwitcher;