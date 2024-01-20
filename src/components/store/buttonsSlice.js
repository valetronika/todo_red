import { createSlice } from "@reduxjs/toolkit";

const buttonsSlice = createSlice({
    name:'buttons',
    initialState:{
        buttons:[
            {
                name:'all',
                isActive:false
            },
            {
                name:'active',
                isActive:false
            },
            {
                name:'completed',
                isActive:false
            },
       ]
    },
    reducers:{
        setActive(state,action){
            state.buttons = state.buttons.map(button => ({
                ...button,
                isActive: button.name === action.payload ? true:false
            }))
        }
    }
})
export const {
    setActive
} = buttonsSlice.actions;
export default buttonsSlice.reducer;