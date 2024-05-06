import React from 'react'
import { useSelector } from 'react-redux'
import SeriesCard from '../SeriesCard/SeriesCard';



const AiringToday = () => {
    const airingToday = useSelector((state)=>state?.AiringToday?.initialAiringToday);
    
    if(!airingToday) return null;
    console.log(airingToday)

  return (
    <div>
      <h1 className='text-3xl font-bold px-[70px] py-[20px] bg-black text-white'>Airing Today Series</h1>
    <div className='flex flex-wrap gap-[20px] items-center justify-center cursor-pointer px-[50px] bg-black'>
        
        {airingToday.map((series)=><SeriesCard key={series.id} seriesData={series}/>)}
    </div>
    </div>
  )
}

export default AiringToday