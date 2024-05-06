import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  initialOnTheAir:[]
}


export const OnTheAirSlice = createSlice({
  name: 'OnTheAir',
  initialState,
  reducers: {
    addOnTheAirData:(state, action)=>{
      state.initialAiringToday = action.payload;
    }
  }
  
})

export const { addOnTheAirData } = OnTheAirSlice.actions

export default OnTheAirSlice.reducer