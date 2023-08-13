import {createSlice} from '@reduxjs/toolkit';
const tokenSlice = createSlice({
    name:"token",
    initialState:null,
    reducers:{
        setToken(state,action)
        {
            state = action.payload
        },
        removeToken(state,action)
        {
            state = null
        }
    }
});
export default tokenSlice.reducer;
export const {setToken,removeToken} = tokenSlice.actions;