import { createSlice } from "@reduxjs/toolkit";

const userInfo = createSlice({
   name: 'user',
   initialState: {
     userInfo: null
   },
   reducers: {
    setUserInfo: (state, action) => {
        state.userInfo = action.payload;
    }
   }
});

export const { setUserInfo } = userInfo.actions;

export default userInfo.reducer;