import React from 'react'

const Hero = () => {
  return (
    <div className='text-white flex flex-col place-content-center items-center py-8'>
        <p className='uppercase text-[#00df9a] font-semibold'>Growing with Data Analytics</p>
        <h2 className='text-5xl font-bold'>Grow with data.</h2>
        <h4 className='text-2xl font-bold'>Fast, flexible financing for BTB</h4><br />
        <p className='text-gray-500 font-semibold'>Our data analytics to increase revenue for BTB, BTC & SASS</p>
        <p className='text-gray-500 font-semibold'>platforms.</p><br />
        <button className='bg-[#00df9a] text-black font-semibold rounded-3xl px-8 py-2'>Get Started</button>
    </div>
  )
}

export default Hero