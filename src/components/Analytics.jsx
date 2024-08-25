import React from 'react'
import Laptop from '../assets/dataAnalytics.avif'

const Analytics = () => {
  return (
    <div className='bg-white py-8 px-4 mx-auto flex flex-col md:flex-row items-center md:justify-between'>
        <img className='w-full max-w-md mx-auto my-4' src={Laptop} alt="Laptop image" />
        <div className='w-full md:w-[60%] flex flex-col justify-center px-6 md:px-8'>
            <p className='text-[#00df9a] font-bold'>DATA ANALYTICS DASHBOARD</p>
            <h5 className='font-bold text-xl'>Manage Data Analytics Centrally</h5>
            <p className='text-base md:text-lg mb-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                 nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                 proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p><br />
            <button className='text-[#00df9a] bg-black font-semibold rounded-3xl mx-auto px-8 py-2'>Get Started</button>
        </div>
    </div>
  )
}

export default Analytics