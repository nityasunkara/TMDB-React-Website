import React from 'react'
import { useSelector } from 'react-redux'
import MovieCard from '../MovieCard';
import SeriesCard from '../SeriesCard/SeriesCard';


const TopRatedTV = () => {
    const topRatedTV = useSelector((state)=>state?.TopRatedTV?.initialTopRatedTV);

    
    
    if(!topRatedTV) return null;

  return (
    <div>
      <h1 className='text-3xl font-bold px-[70px] py-[20px] bg-black text-white'>Top Rated TV Series</h1>
    <div className='flex flex-wrap gap-[20px] items-center justify-center cursor-pointer px-[50px] bg-black'>
        
        {topRatedTV.map((series)=><SeriesCard key={series.id} seriesData={series}/>)}
    </div>
    </div>
  )
}

export default TopRatedTV