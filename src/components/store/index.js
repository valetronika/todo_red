import { configureStore } from "@reduxjs/toolkit";
import todoReduser from "./todoSlice";
import buttonsSlice from './buttonsSlice'

export default configureStore({
    reducer: {
        todosRedusers: todoReduser,
        buttonsSlice
    },
});
