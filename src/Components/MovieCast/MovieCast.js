import React from 'react'
import ProfileCard from '../ProfileCard'

const MovieCast = ({cast}) => {
  console.log(cast)
  return (
    <div className='flex flex-wrap gap-[35px]'>
        {cast && cast.map((castData)=><ProfileCard key={castData.id} finalCast={castData}/>)}
    </div>
  )
}

export default MovieCast