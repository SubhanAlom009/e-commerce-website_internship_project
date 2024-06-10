import React from 'react'
import { Link } from 'react-router-dom'
import { CiSearch } from "react-icons/ci";
import { FaShoppingCart } from "react-icons/fa";

function Header() {
  return (
    <div>
      <div className='flex justify-between fixed top-0 left-0 right-0 z-10 items-center bg-[#1D232A] text-[#F5F5F5] h-14 px-12'>
        <div>
            <Link className='font-mono text-2xl font-bold px-2 py-1 rounded-md transition-all duration-200 hover:bg-[#3e444b]' to="/">TechTrove</Link>
        </div>
        <div className='relative flex items-center justify-between'>
            <input className='bg-[#3e444b] rounded-s-md px-4 py-1 text-[#F5F5F5] outline-none' type="text" placeholder='Search for products' />
            <label htmlFor="search" className='hover:bg-[#7ab2f3] rounded-e-md px-2 py-1 transition-all duration-200 bg-[#6292c8] cursor-pointer'><CiSearch className='text-[#F5F5F5] text-2xl'/></label>
        </div>
        <ui className='flex items-center gap-4 list-none'>
            <li className='rounded-md transition-all duration-200 px-2 py-1 hover:bg-[#3e444b]'>
                <Link to='/'>Home</Link>
            </li>
            <li className='rounded-md transition-all duration-200 px-2 py-1 hover:bg-[#3e444b]'>
                <Link to="/products">Products</Link>
            </li>
            <li className='rounded-md transition-all duration-200 px-2 py-1 hover:bg-[#3e444b]'>
                <Link to='/about'>About</Link>
            </li>
            <li className='rounded-md transition-all duration-200 px-2 py-1 hover:bg-[#3e444b]'>
                <Link to='/contact'>Contact</Link>
            </li>
            <li className='flex items-center cursor-pointer'>
                <label className='text-[#F5F5F5] cursor-pointer text-2xl'><FaShoppingCart /></label>
                <label className='text-[#7ab2f3] ml-1'>0</label>
            </li>
            <button className='bg-[#F5F5F5] rounded-md hover:bg-[#e1e1e1] transition-all duration-200 text-[#1D232A] px-4 py-1'>
                <Link to='/'>Login</Link>
            </button>
        </ui>
      </div>
    </div>
  )
}

export default Header