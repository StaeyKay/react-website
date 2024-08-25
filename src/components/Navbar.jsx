import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-scroll';

const Navbar = () => {

  const [nav, setNav] = useState(false)

  const handleNav = () => {
    setNav(!nav)
  }
  return (
    <div className='flex text-white justify-between h-24 items-center px-4 mx-auto max-w-[1240px]'>
      <h1 className='text-3xl font-bold text-[#00df9a] w-full'>REACT.</h1>
      <ul className='hidden md:flex'>
        <li className='p-4'>
          <Link to="home" smooth={true} duration={500}>Home</Link>
        </li>
        <li className='p-4'>
          <Link to="analytics" smooth={true} duration={500}>Analytics</Link>
        </li>
        <li className='p-4'>
          <Link to="newsletter" smooth={true} duration={500}>Newsletter</Link>
        </li>
        <li className='p-4'>
          <Link to="pricing" smooth={true} duration={500}>Pricing</Link>
        </li>
        <li className='p-4'>
          <Link to="footer" smooth={true} duration={500}>Footer</Link>
        </li>
      </ul>
      <div onClick={handleNav} className='fixed top-0 right-0 p-5 block md:hidden'>
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}

      </div>
      <div className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'fixed left-[-100%]'}>
        <h1 className='text-3xl font-bold text-[#00df9a] w-full m-4'>REACT.</h1>
        <ul className='p-4'>
          <li className='p-4 border-b border-gray-600'>
            <Link to="home" smooth={true} duration={500}>Home</Link>
          </li>
          <li className='p-4 border-b border-gray-600'>
            <Link to="analytics" smooth={true} duration={500}>Analytics</Link>
          </li>
          <li className='p-4 border-b border-gray-600'>
            <Link to="newsletter" smooth={true} duration={500}>Newsletter</Link>
          </li>
          <li className='p-4 border-b border-gray-600'>
            <Link to="pricing" smooth={true} duration={500}>Pricing</Link>
          </li>
          <li className='p-4'>
            <Link to="footer" smooth={true} duration={500}>Footer</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar