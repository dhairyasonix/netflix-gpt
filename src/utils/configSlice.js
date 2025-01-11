import { createSlice } from "@reduxjs/toolkit";


const configSlice = createSlice(
    {
        name:"config",
        initialState:{
            lan:"en"
        },
        reducers:{
            changeLanguage:(state,action)=>{
                state.lan= action.payload;
            },
        },

    },
);
export const {changeLanguage} = configSlice.actions;
export default configSlice.reducer;