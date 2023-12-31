import { createSlice } from "@reduxjs/toolkit";
const modeSlice = createSlice({
    name:"mode",
    initialState:"light",
    reducers:{
        changeMode(state,action)
        {
            
            state = state==="light"?"dark":"light";
            return state;
        }
    }
});
export default modeSlice.reducer;
export const {changeMode} = modeSlice.actions;