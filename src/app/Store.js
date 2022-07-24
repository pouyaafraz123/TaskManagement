import {configureStore} from "@reduxjs/toolkit";
import TasksReducer from "../features/TasksSlice";
import SelectedReducer from "../features/SelectedBoard";
import ThemeReducer from "../features/ThemeSlice";

export default configureStore({
    reducer: {boards:TasksReducer,selected:SelectedReducer,theme:ThemeReducer}
});