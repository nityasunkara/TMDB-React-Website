import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  initialTopRatedTV:[]
}


export const TopRatedTVSlice = createSlice({
  name: 'TopRatedTV',
  initialState,
  reducers: {
    addTopRatedTVData:(state, action)=>{
      state.initialTopRatedTV = action.payload;
    }
  }
  
})

export const { addTopRatedTVData } = TopRatedTVSlice.actions

export default TopRatedTVSlice.reducer