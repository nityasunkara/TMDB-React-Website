import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { apiOptions } from '../Utils/constants';
import { addTopRatedTVData } from '../Store/TopRatedTVSlice';

const GetTopRatedTV = () => {

    const [tvData, setTvData] = useState([]);

    const dispatch = useDispatch();

    const TopRatedTVApi = () => {
        fetch('https://api.themoviedb.org/3/tv/popular?language=en-US&page=1', apiOptions)
            .then(response => response.json())
            .then(response => setTvData(response))
            .catch(err => console.error(err));
    }


    useEffect(() => {
        TopRatedTVApi();
    }, [])
    dispatch(addTopRatedTVData(tvData.results))


}

export default GetTopRatedTV