import React, { useState } from 'react'
import { apiOptions } from '../../Utils/constants';
import MovieCast from '../../Components/MovieCast';





const PeopleContainer = () => {
    const [input, setInput] = useState("");
    const [search, setSearch] = useState([]);

    const handleSearch = () => {
        if (input !== "") {
            fetch(`https://api.themoviedb.org/3/search/person?query=${input}&include_adult=false&language=en-US&page=1`, apiOptions)
                .then(response => response.json())
                .then(response => setSearch(response.results))
                .catch(err => console.error(err));
        }
        
    }
console.log(search)
    return (
        <div className='bg-black h-screen'>
            <div id="searchbar" className='flex gap-[10px] justify-center py-[40px]'>
                <input onChange={(e) => setInput(e.target.value)} type='text' placeholder='Search of an actor' className='w-[350px] rounded-3xl p-[10px]' />
                <button onClick={handleSearch} className='text-white border-2 border-[#1F9336] bg-[#1F9336] text-[12px] font-bold rounded-md curor-pointer  px-[8px] py-[0px]'>SEARCH</button>
            </div>
            <div className='flex flex-wrap gap-[35px] px-[100px]'>
                {search && <MovieCast cast={search} />}
            </div>
        </div>
    );
    
}

export default PeopleContainer