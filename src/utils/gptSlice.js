import { createSlice } from "@reduxjs/toolkit";

const gptSlice  =createSlice({
    name:"gpt",
    initialState:{
showGptSearch:false,
    },
    reducers:{
        toggleGptSerch:(state,action)=>{
            state.showGptSearch = !state.showGptSearch;
        },
    },
});
export const{toggleGptSerch} = gptSlice.actions
export default gptSlice.reducer