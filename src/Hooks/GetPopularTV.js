import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { apiOptions } from '../Utils/constants';
import { addPopularTVData } from '../Store/PopularTVSlice';

const GetPopularTV = () => {

    const [tvData, setTvData] = useState([]);

    const dispatch = useDispatch();

    const PopularTVApi = () => {
        fetch('https://api.themoviedb.org/3/tv/popular?language=en-US&page=1', apiOptions)
            .then(response => response.json())
            .then(response => setTvData(response))
            .catch(err => console.error(err));
    }


    useEffect(() => {
        PopularTVApi();
    }, [])
    dispatch(addPopularTVData(tvData.results))


}

export default GetPopularTV