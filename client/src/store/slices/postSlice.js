import { createSlice } from "@reduxjs/toolkit";
const postSlice = createSlice({
    name:"post",
    initialState:[],
    reducers:{
        setPosts(state,action)
        {
            state = action.payload;
        },
        setPost(state,action)
        {
            const updatedPost = state.map((post)=>{
                if(post._id===action.payload) return action.payload;
                return post;
            })
            state =  updatedPost;
        }
    }
});
export default postSlice;
export const {setPosts,setPost} =   postSlice.actions;