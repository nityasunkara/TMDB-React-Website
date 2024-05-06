import React from 'react'
import { useSelector } from 'react-redux'
import SeriesCard from '../SeriesCard/SeriesCard';


const PopularTV = () => {
    const popularTV = useSelector((state)=>state?.PopularTV?.initialPopularTV);

    console.log(popularTV)
    
    if(!popularTV) return null;

  return (
    <div>
      <h1 className='text-3xl font-bold px-[70px] py-[20px] bg-black text-white'>Popular TV Series</h1>
    <div className='flex flex-wrap gap-[20px] items-center justify-center cursor-pointer px-[50px] bg-black'>
        
        {popularTV.map((series)=><SeriesCard key={series.id} seriesData={series}/>)}
    </div>
    </div>
  )
}

export default PopularTV