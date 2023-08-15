import {createSlice} from '@reduxjs/toolkit';
const tokenSlice = createSlice({
    name:"token",
    initialState:null,
    reducers:{
        setToken(state,action)
        {
            localStorage.setItem("token",action.payload);
            state = action.payload;
            return state;
        },
        removeToken(state,action)
        {
            localStorage.removeItem("token");
            state = null;
            return state;
        }
    }
});
export default tokenSlice.reducer;
export const {setToken,removeToken} = tokenSlice.actions;