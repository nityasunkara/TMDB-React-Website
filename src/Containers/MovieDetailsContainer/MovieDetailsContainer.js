import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { apiOptions, posterCdnPath } from '../../Utils/constants';
import MovieCast from '../../Components/MovieCast';

const MovieDetailsContainer = () => {
    const { id } = useParams();
    const [movieData, setMovieData] = useState({});
    const [castInfo, setCastInfo] = useState({});
    const [youtube, setYoutube] = useState([]);
    
    const movieDetailsData = () => {
        

        fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, apiOptions)
            .then(response => response.json())
            .then(response => setMovieData(response))
            .catch(err => console.error(err));
    }
    const castInfoData = () => {
        

        fetch(`https://api.themoviedb.org/3/movie/${id}/credits?language=en-US`, apiOptions)
            .then(response => response.json())
            .then(response => setCastInfo(response))
            .catch(err => console.error(err));
    }
    const youtubeData = () => {
        
        fetch('https://api.themoviedb.org/3/movie/823464/videos?language=en-US', apiOptions)
            .then(response => response.json())
            .then(response => setYoutube(response?.results))
            .catch(err => console.error(err));
    }
    
    useEffect(() => {
        movieDetailsData();
        castInfoData();
        youtubeData();
    }, [id])

    const youtubeFilteredData = youtube.filter((data)=>data?.site === "YouTube" && data?.name === "Official Trailer");
    console.log(youtubeFilteredData)
    
    // console.log(movieData)
    // console.log(castInfo)
    // console.log(youtube)

    if (!movieData) return null
    if (!castInfo) return null
    // console.log(castInfo.cast)
    



    const { title, poster_path, overview, production_companies, production_countries, tagline, release_date, genres, vote_average, runtime } = movieData
    return (
        <div className=' bg-black flex flex-col'>
            <div className='main flex pl-[120px] pt-[80px] pb-[25px] gap-[20px] bg-black h-[540px]'>
                <div className='left w-[30%] flex flex-col gap-[10px] pl-[40px]'>
                    <img className='h-[400px] w-[250px]' src={posterCdnPath + poster_path} />
                    <h1 className='text-white font-semibold '>{production_countries && production_countries.map((country) => <h1>{country.name}</h1>)}</h1>
                </div>
                <div className='right w-[60%] flex flex-col gap-[16px] py-[30px]'>
                    <div className='flex items-center gap-[20px]'>
                        <h1 className='text-[#daa520] font-bold text-[36px] cursor-pointer hover:text-[#C0C0C0]'>{title}</h1>
                        <h1 className='text-[#daa520] text-[16px] cursor-pointer hover:text-[#C0C0C0]'><i>{tagline}</i></h1>
                    </div>
                    <h1 className='text-white text-[18px] font-light hover:text-[#b78727] cursor-pointer'><i>{overview}</i></h1>
                    <h1 className='text-white text-[15px] font-semibold hover:text-[#b78727] cursor-pointer'>Releasing On {release_date}</h1>
                    <h1 className='text-white font-semibold flex gap-[15px] hover:text-[#b78727] cursor-pointer'>{genres && genres.map((genre) => <h1>{genre.name}</h1>)}</h1>
                    <div className='sub flex gap-[18px]'>
                        <h1 className='text-white font-semibold hover:text-[#b78727] cursor-pointer'>{vote_average}</h1>
                        <h1 className='text-white font-semibold hover:text-[#b78727] cursor-pointer'>{runtime} mins</h1>
                    </div>
                </div>
            </div>
            <div className='bg-black ml-[160px] mr-[60px] mb-[100px] flex flex-col gap-[30px] pt-[40px]'>
                <h1 className='bg-black text-white font-semibold text-[28px]'>Cast</h1>
                <MovieCast cast={castInfo?.cast} />
            </div>
            {youtubeFilteredData[0] && <iframe width="560" height="315" src={"https://www.youtube.com/embed/"+youtubeFilteredData[0]?.key} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>}
        </div>

    )
}

export default MovieDetailsContainer