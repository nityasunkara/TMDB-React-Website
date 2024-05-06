import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { apiOptions } from '../Utils/constants';
import { addOnTheAirData } from '../Store/OnTheAirSlice';


const GetOnTheAir = () => {

    const [tvData, setTvData] = useState([]);

    const dispatch = useDispatch();

    const OnTheAirApi = () => {
        fetch('https://api.themoviedb.org/3/tv/on_the_air?language=en-US&page=1', apiOptions)
            .then(response => response.json())
            .then(response => setTvData(response))
            .catch(err => console.error(err));
    }


    useEffect(() => {
        OnTheAirApi();
    }, [])
    dispatch(addOnTheAirData(tvData.results))


}

export default GetOnTheAir