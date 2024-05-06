import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  initialNowPlaying:[]
}


export const NowPlayingSlice = createSlice({
  name: 'NowPlaying',
  initialState,
  reducers: {
    addNowPlayingData:(state, action)=>{
      state.initialNowPlaying = action.payload;
    }
  }
  
})

export const { addNowPlayingData } = NowPlayingSlice.actions

export default NowPlayingSlice.reducer