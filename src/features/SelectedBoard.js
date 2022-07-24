import {createSlice} from "@reduxjs/toolkit";

export const SelectedBoard = createSlice({
    name:"selected",
    initialState:{
        selected:JSON.parse(localStorage.getItem("selected"))
    },
    reducers:{
        Select:(state, action)=>{
            state.selected=action.payload;
            localStorage.setItem("selected",JSON.stringify(action.payload));
        }
    }
});

export const {Select} = SelectedBoard.actions;

export const selected = (state)=> state.selected.selected;

export default SelectedBoard.reducer;