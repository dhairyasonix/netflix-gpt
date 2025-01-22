import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: "gpt",
    initialState: {
        showGptSearch: false,
        gptMoviesResult: null,
        moviesName: null,
    },
    reducers: {
        toggleGptSerch: (state, action) => {
            state.showGptSearch = !state.showGptSearch;
        },
        addGptMovieResult: (state, action) => {

            const { gptMovies, tmdbResults } = action.payload // gptmovies
            state.moviesName = gptMovies;
            state.gptMoviesResult = tmdbResults;
        },
    },
});
export const { toggleGptSerch, addGptMovieResult } = gptSlice.actions
export default gptSlice.reducer