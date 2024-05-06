import React from 'react'
import { useSelector } from 'react-redux'
import SeriesCard from '../SeriesCard/SeriesCard';


const OnTheAir = () => {
  const ontheAir = useSelector((state) => state?.OnTheAir?.initialAiringToday);

  if (!ontheAir) return null;

  return (
    <div>
      <h1 className='text-3xl font-bold px-[70px] py-[20px] bg-black text-white'>On The Air Series</h1>
      <div className='flex flex-wrap gap-[20px] items-center justify-center cursor-pointer px-[50px] bg-black'>

        {ontheAir.map((series) => <SeriesCard key={series.id} seriesData={series} />)}
      </div>
    </div>
  )
}

export default OnTheAir