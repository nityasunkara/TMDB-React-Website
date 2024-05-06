import React, {  useState } from 'react'
import NowPlaying from '../../Components/NowPlaying'
import PopularMovies from '../../Components/PopularMovies'
import TopRatedMovies from '../../Components/TopRatedMovies'
import UpcomingMovies from '../../Components/UpcomingMovies'
import GetPopularMovies from '../../Hooks/GetPopularMovies'
import GetNowPlaying from '../../Hooks/GetNowPlaying'
import GetTopRatedMovies from '../../Hooks/GetTopRatedMovies'
import GetUpcomingMovies from '../../Hooks/GetUpcomingMovies'
import { apiOptions } from '../../Utils/constants'
import MovieCard from '../../Components/MovieCard'

const HomeContainer = () => {
  GetPopularMovies();
  GetNowPlaying();
  GetTopRatedMovies();
  GetUpcomingMovies();

  const [input, setInput] = useState("");
  const [search, setSearch] = useState([]);

  const handleSearch = () => {
    if (input !== "") {
      fetch(`https://api.themoviedb.org/3/search/movie?query=${input}&include_adult=false&language=en-US&page=1`, apiOptions)
  .then(response => response.json())
  .then(response => setSearch(response.results))
  .catch(err => console.error(err));
    }
    else {
      setInput("");
    }
  }
  

  

  return (
    <div>
      <div id="searchbar" className='bg-black flex gap-[10px] justify-center py-[40px]'>
        <input onChange={(e) => setInput(e.target.value)} type='text' placeholder='Search' className='w-[350px] rounded-3xl p-[10px]' />
        <button onClick={handleSearch} className='text-white border-2 border-[#1F9336] bg-[#1F9336] text-[12px] font-bold rounded-md curor-pointer  px-[8px] py-[0px]'>SEARCH</button>
      </div>
      <div>
        <div id="searchedmovies" className='flex flex-wrap gap-[20px] items-center justify-center cursor-pointer px-[50px] bg-black'>
            {search && search.map((movie)=><MovieCard movieData={movie}/>)}
        </div>
        <div id="fourcomponents">
        <PopularMovies />
        <NowPlaying />
        <TopRatedMovies />
        <UpcomingMovies />
        </div>
      </div>
    </div>
  )
}

export default HomeContainer