import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {
  return (
    <div>
      <div className=" flex justify-between items-center p-5 shadow-md shadow-gray-300 ">
        <div className='cursor-pointer text-green-600'><a href="#">SunkamiWaste</a></div>
        <div className='space-x-10 mr-10'>
            <a className='cursor-pointer hover:text-green-600'>Home</a>
            <a className='cursor-pointer hover:text-green-600'>About us</a>
            <a className='cursor-pointer hover:text-green-600'>Services</a>
            <a className='cursor-pointer hover:text-green-600 bb-yellow'>Contact us</a>

        </div>
        <div className='flex lg:hidden display-none cursor-pointer text-green-600'>
        <MenuIcon />
        </div>
        
      </div>
    </div>
  )
}

export default Header
