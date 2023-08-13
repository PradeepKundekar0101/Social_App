import { createSlice } from "@reduxjs/toolkit";
const modeSlice = createSlice({
    name:"mode",
    initialState:"light",
    reducers:{
        changeMode(state)
        {
            state = state==="light"?"dark":"light";
        }
    }
});
export default modeSlice;
export const {changeMode} = modeSlice.actions;