import React from 'react'
import pics from '../component/imgs/g10.svg'

const Homepage = () => {
  return (
    <div className='flex items-center justify-center max-h-screen max-w-full my-auto'>
        <div className=''>
            <p className='text-white text-5xl m-auto'>Make your contributions to Awesome OSS Docs</p>
            <button className='bg-btn hover:bg-green-400 cursor-pointer py-2 px-4 rounded text-white text-xl font-semibold'>
                Get Started
            </button>
        </div>
        <div className='h-full w-full'>
            <img src={pics} alt="" className=''/>
        </div>
    </div>
  )
}

export default Homepage