import React from 'react'
import { useSelector } from 'react-redux'
import MovieCard from '../MovieCard';


const PopularMovies = () => {
    const popularMovies = useSelector((state)=>state?.PopularMovies?.initialPopular);
    
    if(!popularMovies) return null;

  return (
    <div>
      <h1 className='text-3xl font-bold px-[70px] py-[20px] bg-black text-white'>Popular Movies</h1>
    <div className='flex flex-wrap gap-[20px] items-center justify-center cursor-pointer px-[50px] bg-black'>
        
        {popularMovies.map((movies)=><MovieCard key={movies.id} movieData={movies}/>)}
    </div>
    </div>
  )
}

export default PopularMovies