import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { apiOptions } from '../Utils/constants';
import { addAiringTodayData } from '../Store/AiringTodaySlice';

const GetAiringToday = () => {

    const [tvData, setTvData] = useState([]);

    const dispatch = useDispatch();

    const AiringTodayApi = () => {
        fetch('https://api.themoviedb.org/3/tv/airing_today?language=en-US&page=1', apiOptions)
            .then(response => response.json())
            .then(response => setTvData(response))
            .catch(err => console.error(err));
    }


    useEffect(() => {
        AiringTodayApi();
    }, [])
    dispatch(addAiringTodayData(tvData.results))


}

export default GetAiringToday