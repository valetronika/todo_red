import { configureStore } from "@reduxjs/toolkit";
import todoReduser from "./todoSlice";
import buttonsSlice from './buttonsSlice';
import thunk from 'redux-thunk';


export default configureStore({
    reducer: {
        todosRedusers: todoReduser,
        buttonsSlice
    },
});
