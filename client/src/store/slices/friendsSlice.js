import { createSlice } from "@reduxjs/toolkit";
const friendsSlice = createSlice({
    name:"friends",
    initialState:[],
    reducers:{
        setFriends(state,action)
        {
            state = action.payload;
        }
    }
});
export default friendsSlice; 
export const {setFriends} = setFriends.actions;