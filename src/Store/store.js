import { configureStore } from '@reduxjs/toolkit'
import NowPlayingSlice from './NowPlayingSlice'
import PopularMoviesSlice from './PopularMoviesSlice'
import TopRatedMoviesSlice from './TopRatedMoviesSlice'
import UpcomingMoviesSlice from './UpcomingMoviesSlice'
import AiringTodaySlice from './AiringTodaySlice'
import OnTheAirSlice from './OnTheAirSlice'
import PopularTVSlice from './PopularTVSlice'
import TopRatedTVSlice from './TopRatedTVSlice'


export default configureStore({
  reducer: {
    NowPlaying: NowPlayingSlice,
    PopularMovies: PopularMoviesSlice,
    TopRated: TopRatedMoviesSlice,
    Upcoming: UpcomingMoviesSlice,
    AiringToday: AiringTodaySlice,
    OnTheAir: OnTheAirSlice,
    PopularTV: PopularTVSlice,
    TopRatedTV: TopRatedTVSlice
    

  }
})