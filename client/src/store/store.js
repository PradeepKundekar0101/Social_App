import postSlice from './slices/postSlice';
import tokenSlice from './slices/tokenSlice';
import userSlice from './slices/userSlice';
import modeSlice from './slices/modeSlice';
import { configureStore } from '@reduxjs/toolkit';
const store = configureStore(
    {
        reducer:{
            mode:modeSlice,
            user:userSlice,
            token:tokenSlice,
            posts:postSlice,
        }
    }
);
export default store;