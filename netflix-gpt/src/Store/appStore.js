import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "../Slices/UserSlice";

const appStore = configureStore({
    reducer: {
        user: UserSlice
    }
});


export default appStore;