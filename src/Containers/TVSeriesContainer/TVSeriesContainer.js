import React from 'react'
import GetAiringToday from '../../Hooks/GetAiringToday'
import GetOnTheAir from '../../Hooks/GetOnTheAir'
import GetPopularTV from '../../Hooks/GetPopularTV'
import GetTopRatedTV from '../../Hooks/GetTopRatedTV'
import AiringToday from '../../Components/AiringToday'
import OnTheAir from '../../Components/OnTheAir'
import PopularTV from '../../Components/PopularTV'
import TopRatedTV from '../../Components/TopRatedTV'

const TVSeriesContainer = () => {
    GetAiringToday();
    GetOnTheAir();
    GetPopularTV();
    GetTopRatedTV();

  return (
    <div>
        <AiringToday/>
        <OnTheAir/>
        <PopularTV/>
        <TopRatedTV/>

    </div>
  )
}

export default TVSeriesContainer