import {createSlice} from "@reduxjs/toolkit";
import Theme from "../components/theme/Theme";

export const ThemeSlice = createSlice({
    name: "theme",
    initialState: {
        theme: JSON.parse(localStorage.getItem("theme")) || Theme.dark
    },
    reducers: {
        ToggleTheme: (state) => {
            state.theme = state.theme===Theme.light?Theme.dark:Theme.light;
            localStorage.setItem("theme",JSON.stringify(state.theme))
        }
    }
});

export const {ToggleTheme} = ThemeSlice.actions;

export const theme = (props)=>props.theme.theme;

export default ThemeSlice.reducer;