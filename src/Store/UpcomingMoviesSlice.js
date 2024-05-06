import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  initialUpcoming:[]
}


export const UpcomingMoviesSlice = createSlice({
  name: 'Upcoming',
  initialState,
  reducers: {
    addUpcomingData:(state, action)=>{
      state.initialNowPlaying = action.payload;
    }
  }
  
})

export const { addUpcomingData } = UpcomingMoviesSlice.actions

export default UpcomingMoviesSlice.reducer