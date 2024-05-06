import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  initialAiringToday:[]
}


export const AiringTodaySlice = createSlice({
  name: 'AiringToday',
  initialState,
  reducers: {
    addAiringTodayData:(state, action)=>{
      state.initialAiringToday = action.payload;
    }
  }
  
})

export const { addAiringTodayData } = AiringTodaySlice.actions

export default AiringTodaySlice.reducer