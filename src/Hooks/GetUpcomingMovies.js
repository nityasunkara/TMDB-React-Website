import React, { useEffect, useState } from 'react'
import { apiOptions } from '../Utils/constants';
import { useDispatch } from 'react-redux';
import { addUpcomingData } from '../Store/UpcomingMoviesSlice';

const GetUpcomingMovies = () => {
  const [data, setData] = useState([])

  const dispatch = useDispatch();

  const upcomingApi = () =>{
    fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', apiOptions)
  .then(response => response.json())
  .then(response => setData(response))
  .catch(err => console.error(err));
  }
  useEffect(()=>{
    upcomingApi()
  },[])
  dispatch(addUpcomingData(data.results))
}

export default GetUpcomingMovies