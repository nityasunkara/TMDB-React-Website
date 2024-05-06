import React from 'react'

import { Link, useLocation, useNavigate } from 'react-router-dom'

const NavBar = () => {

  const navigate = useNavigate();
  const location = useLocation().pathname;
  
  console.log(location)
  
  return (
    <div className='flex justify-between items-center bg-gradient-to-r from-gray-500 to-blue-500 py-[15px] px-[25px]'>
        <Link to={{pathname:"/"}}><img className='h-[30px] cursor-pointer' src='https://media.themoviedb.org/t/p/w500/cQhV414jeABfGw9yRAAnGPKtPFu.png'/></Link>
        <ul className='list-none flex gap-[20px]'>
            <li className='font-semibold cursor-pointer'>Home</li>
            <li  className='font-semibold cursor-pointer'><Link to={location === "/tvseries" ? "/" : "/tvseries"}>{location === "/tvseries" ? "Movies" : "TV Series"} </Link></li>
            <li className='font-semibold cursor-pointer'><Link to="/people">People</Link></li>
            <li className='font-semibold cursor-pointer'><Link to="/gallery">Gallery</Link></li>
            <li className='font-semibold cursor-pointer'>About Us</li>
            <li className='font-semibold cursor-pointer'>Contact Us</li>
            <li className='font-semibold cursor-pointer'>Support</li>
        </ul>
    </div>
  )
}

export default NavBar