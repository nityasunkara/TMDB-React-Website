import React, { useDeferredValue, useEffect, useState } from 'react'
import { apiOptions } from '../Utils/constants';
import { useDispatch } from 'react-redux';
import { addTopRatedData } from '../Store/TopRatedMoviesSlice';

const GetTopRatedMovies = () => {
    const [data, setData] = useState([])
    const dispatch = useDispatch();

    const topRatedApi = () => {
        fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', apiOptions)
            .then(response => response.json())
            .then(response => setData(response))
            .catch(err => console.error(err));
    }
    useEffect(() => {
        topRatedApi()
    }, [])
    dispatch(addTopRatedData(data.results))
}

export default GetTopRatedMovies