import { createSlice } from "@reduxjs/toolkit";
const movieSlice = createSlice(
    {
        name: "movies",
        initialState:{
            nowPlayingMovies: null,
            trailerVideo: null,
            popularMovies: null,
            topRatedMovies: null, //slice
            upcominfMovies: null,

        },
        reducers: {
            addNowPlayingMovies: (state, action) => {
                state.nowPlayingMovies = action.payload;
            },
            addTrailerVideo:(state,action)=>{
                state.trailerVideo = action.payload
            },
            addPopularMovies:(state,action)=>{
                state.popularMovies = action.payload
            },
            addTopRatedMovies:(state,action)=>{
                state.topRatedMovies = action.payload
            },
            addUpcominfMovies:(state,action)=>{
                state.upcominfMovies = action.payload
            },
        },

    }
);

export const {addNowPlayingMovies,addTrailerVideo,addPopularMovies,addTopRatedMovies,addUpcominfMovies} = movieSlice.actions;
export default movieSlice.reducer