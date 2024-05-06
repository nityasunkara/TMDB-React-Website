import React from 'react'
import { useSelector } from 'react-redux'
import MovieCard from '../MovieCard';


const TopRatedMovies = () => {
    const topRatedMovies = useSelector((state)=>state?.TopRated?.initialTop);
    
    if(!topRatedMovies) return null;

  return (
    <div>
      <h1 className='text-3xl font-bold px-[70px] py-[20px] bg-black text-white'>Top Rated Movies</h1>
    <div className='flex flex-wrap gap-[20px] items-center justify-center cursor-pointer px-[50px] bg-black'>
        
        {topRatedMovies.map((movies)=><MovieCard key={movies.id} movieData={movies}/>)}
    </div>
    </div>
  )
}

export default TopRatedMovies