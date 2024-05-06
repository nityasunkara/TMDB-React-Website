import React, { useEffect, useState } from 'react'
import { apiOptions, posterCdnPath } from '../../Utils/constants';

const GalleryContainer = () => {
    const [input, setInput] = useState("");
    const [imageid, setImageid] = useState([]);
    const [photo, setPhoto] = useState("")

    const handleSearch = () => {
        fetch(`https://api.themoviedb.org/3/search/person?query=${input}&include_adult=false&language=en-US&page=1`, apiOptions)
            .then(response => response.json())
            .then(response => setImageid(response.results.map((person) => person.id)))
            .catch(err => console.error(err));
            setPhoto([])
    }
    // console.log(imageid)

    const displayImage = (person) => {
        fetch(`https://api.themoviedb.org/3/person/${person}/images`, apiOptions)
            .then(response => response.json())
            .then(response => setPhoto([...photo,...response.profiles]))
            .catch(err => console.error(err));
    }
    console.log(photo)
    
    useEffect(()=>{
        imageid.map((person)=>displayImage(person)) //fetch image for each imageid when the imageid changes
    },[imageid])
    

    return (
        <div className='bg-black h-screen'>
            <div id="searchbar" className='bg-black flex gap-[10px] justify-center py-[40px]'>
                <input onChange={(e) => setInput(e.target.value)} type='text' placeholder='Search for people..' className='w-[350px] rounded-3xl p-[10px]' />
                <button onClick={handleSearch} className='text-white border-2 border-[#1F9336] bg-[#1F9336] text-[12px] font-bold rounded-md curor-pointer  px-[8px] py-[0px]'>SEARCH</button>
            </div>
            <div>
            {photo && photo.map((image)=><img src={posterCdnPath+image.file_path}/>)}

            </div>
        </div>
    )
}

export default GalleryContainer