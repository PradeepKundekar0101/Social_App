import {createSlice} from '@reduxjs/toolkit';
const userSlice = createSlice({
    name:"user",
    initialState:null,
    reducers:{
        setUser(state,action)
        {
            state = action.payload;
            console.log(action.payload);
            localStorage.setItem("user",action.payload);
            return state;
        },
        removeUser(state,action)
        {
            state = null;
            localStorage.removeItem("user");
            return state;
        }
    }
});
export default userSlice.reducer;
export const {setUser,removeUser} = userSlice.actions;

