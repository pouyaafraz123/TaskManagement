import {configureStore} from "@reduxjs/toolkit";
import TasksReducer from "../features/TasksSlice";

export default configureStore({
    reducer: {boards:TasksReducer}
});