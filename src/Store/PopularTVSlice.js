import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  initialPopularTV:[]
}


export const PopularTVSlice = createSlice({
  name: 'PopularTV',
  initialState,
  reducers: {
    addPopularTVData:(state, action)=>{
      state.initialPopularTV = action.payload;
    }
  }
  
})

export const { addPopularTVData } = PopularTVSlice.actions

export default PopularTVSlice.reducer