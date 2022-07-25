import {createSlice} from "@reduxjs/toolkit";
import Theme from "../components/theme/Theme";

export const ThemeSlice = createSlice({
    name: "theme",
    initialState: {
        theme: JSON.parse(localStorage.getItem("theme")) || Theme.light
    },
    reducers: {
        ToggleTheme: (state,action) => {
            state.theme = action.payload;
            console.log(action.payload)
            localStorage.setItem("theme",JSON.stringify(action.payload));
        }
    }
});

export const {ToggleTheme} = ThemeSlice.actions;

export const theme = (props)=>props.theme.theme;

export default ThemeSlice.reducer;