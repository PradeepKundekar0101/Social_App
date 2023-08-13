import {createSlice} from '@reduxjs/toolkit';
const userSlice = createSlice({
    name:"user",
    initialState:null,
    reducers:{
        setUser(state,action)
        {
            state = action.payload
        },
        removeUser(state,action)
        {
            state = null
        }
    }
});
export default userSlice.reducer;
export const {setUser,removeUSer} = userSlice.actions;