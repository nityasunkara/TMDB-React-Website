import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  initialTop:[]
}


export const TopRatedMoviesSlice = createSlice({
  name: 'TopRated',
  initialState,
  reducers: {
    addTopRatedData:(state, action)=>{
      state.initialTop = action.payload;
    }
  }
  
})

export const { addTopRatedData } = TopRatedMoviesSlice.actions

export default TopRatedMoviesSlice.reducer