import React, { useEffect, useState } from 'react'
import { apiOptions } from '../Utils/constants';
import {useDispatch} from 'react-redux'
import { addNowPlayingData } from '../Store/NowPlayingSlice';

const GetNowPlaying = () => {
  const [data, setData] = useState([])
  
  const dispatch = useDispatch()

  const fetchApi =()=>{
    fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', apiOptions)
  .then(response => response.json())
  .then(response => setData(response))
  .catch(err => console.error(err));
 }
 useEffect(()=>{
    fetchApi()
 },[])
 dispatch(addNowPlayingData(data.results))
}


export default GetNowPlaying