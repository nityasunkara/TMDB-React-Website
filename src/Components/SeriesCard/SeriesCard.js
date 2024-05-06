import React from 'react'
import { posterCdnPath } from '../../Utils/constants'
import { useNavigate } from 'react-router-dom'



const SeriesCard = ({seriesData}) => {
  const navigate = useNavigate();
  //console.log(seriesData.id)
  const handleNavigate = ()=>{
    navigate(`seriesdetails/${seriesData.id}`)
  }
  return (
    <div onClick={handleNavigate}   className='h-[330px] w-[200px] flex flex-wrap'>
      <img className='h-[300px] w-[200px]' src={posterCdnPath+seriesData?.poster_path} />
      <h1 className='font-semibold text-white'>{seriesData?.name}</h1>
    </div>
  )
}

export default SeriesCard