import {createSlice} from "@reduxjs/toolkit";

export const TasksSlice = createSlice({
    name: "tasks",
    initialState: {
        taskBoard: JSON.parse(localStorage.getItem("board")) || {}
    },
    reducers: {
        CreateBoard: (state, action) => {
            state.taskBoard[action.payload.id] = action.payload;
            Save(state.taskBoard);
        },
        CreateTaskGroup: (state, action) => {
            state.taskBoard[action.payload.boardId][action.payload.id] = action.payload;
            Save(state.taskBoard);
        },
        CreateTask: (state, action) => {
            state.taskBoard[action.payload.boardId][action.payload.groupId][action.payload.id] = action.payload;
            Save(state.taskBoard);
        },
        EditBoard: (state, action) => {
            state.taskBoard[action.payload.id] = action.payload;
            Save(state.taskBoard);
        },
        EditTaskGroup: (state, action) => {
            state.taskBoard[action.payload.boardId][action.payload.id] = action.payload;
            Save(state.taskBoard);
        },
        EditTask: (state, action) => {
            state.taskBoard[action.payload.boardId][action.payload.groupId][action.payload.id] = action.payload;
            Save(state.taskBoard);
        },
        DeleteBoard: (state, action) => {
            delete state.taskBoard[action.payload.id];
            Save(state.taskBoard);
        },
        DeleteTaskGroup: (state, action) => {
            delete state.taskBoard[action.payload.boardId][action.payload.id];
            Save(state.taskBoard);
        },
        DeleteTask: (state, action) => {
            delete state.taskBoard[action.payload.boardId][action.payload.groupId][action.payload.id];
            Save(state.taskBoard);
        }

    }
});

export const {
    CreateBoard,
    CreateTaskGroup,
    CreateTask,
    EditBoard,
    EditTaskGroup,
    EditTask,
    DeleteBoard,
    DeleteTaskGroup,
    DeleteTask
} = TasksSlice.actions;

const Save = (boards) => {
    localStorage.setItem("board",JSON.stringify(boards));
}

export const boards = (state) => state.boards.taskBoard;
export default TasksSlice.reducer;