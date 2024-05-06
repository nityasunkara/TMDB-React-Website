import React from 'react'
import { useSelector } from 'react-redux'
import MovieCard from '../MovieCard';


const NowPlaying = () => {
    const nowPlayingMovies = useSelector((state)=>state?.NowPlaying?.initialNowPlaying);
    
    if(!nowPlayingMovies) return null;

  return (
    <div>
      <h1 className='text-3xl font-bold px-[70px] py-[20px] bg-black text-white'>Now Playing Movies</h1>
    <div className='flex flex-wrap gap-[20px] items-center justify-center cursor-pointer px-[50px] bg-black'>
        
        {nowPlayingMovies.map((movies)=><MovieCard key={movies.id} movieData={movies}/>)}
    </div>
    </div>
  )
}

export default NowPlaying