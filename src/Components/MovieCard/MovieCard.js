import React from 'react'
import { posterCdnPath } from '../../Utils/constants'
import { useNavigate } from 'react-router-dom'



const MovieCard = ({movieData}) => {
  const navigate = useNavigate();
  // console.log(movieData.id)
  const handleNavigate = ()=>{
    navigate(`moviedetails/${movieData.id}`)
  }
  return (
    <div onClick={handleNavigate}  className='h-[330px] w-[200px] flex flex-wrap'>
      <img className='h-[300px] w-[200px]' src={posterCdnPath+movieData?.poster_path} />
      <h1 className='font-semibold text-white'>{movieData?.original_title}</h1>
    </div>
  )
}

export default MovieCard