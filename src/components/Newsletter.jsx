import React from 'react'

const Newsletter = () => {
    return (
        <div className='py-8 px-4 sm:px-8 lg:px-16 max-h-screen'>
        <div className='flex flex-col md:flex-row justify-center items-center md:justify-between'>
            <div className='text-white mb-6 md:mb-0'>
                <h3 className='text-xl font-bold mb-2'>Want tips & tricks to optimize your flow?</h3>
                <p className='font-semibold'>Sign up to our newsletter and stay up to date.</p>
            </div>
            <div className='text-white flex flex-col items-center md:items-start'>
                <form action="" className='flex flex-col md:flex-row items-center' >
                    <input type="text" value="Enter your email" className='text-gray-700 h-10 w-full max-w-xs rounded-md mb-2 md:mb-0 md:mr-4 px-3'/>
                    <button className='bg-[#00df9a] text-black px-6 py-2 rounded-md w-full md:w-full'>Notify me</button>
                </form>
                <p className='mt-4'>We care about the protection of you data. Read our</p>
                <a className='text-[#00df9a] underline' href="">Privacy policy.</a>
            </div>
        </div>
        </div>
    )
}

export default Newsletter