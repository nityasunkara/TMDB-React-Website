import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  initialPopular:[]
}


export const PopularMoviesSlice = createSlice({
  name: 'PopularMovies',
  initialState,
  reducers: {
    addPopularData:(state, action)=>{
      state.initialPopular = action.payload;
    }
  }
  
})

export const { addPopularData } = PopularMoviesSlice.actions

export default PopularMoviesSlice.reducer