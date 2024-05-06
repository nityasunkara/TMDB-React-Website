import React, { useEffect, useState } from 'react'
import { apiOptions } from '../Utils/constants';
import { useDispatch } from 'react-redux';
import { addPopularData } from '../Store/PopularMoviesSlice';

const GetPopularMovies = () => {
  const [data, setData] = useState([])
  
  const dispatch = useDispatch();

  const popularApi = () =>{
    fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', apiOptions)
  .then(response => response.json())
  .then(response => setData(response))
  .catch(err => console.error(err));
  }
  useEffect(()=>{
    popularApi()
  },[])
  dispatch(addPopularData(data.results))
}

export default GetPopularMovies