import React from 'react'
import Header from './Header'
import Homepage from './Homepage'

const Home = () => {
  return (
    <div className=' bg-bgColor h-screen w-screen py-7 px-40'>
        <Header/>
        <Homepage className='flex items-center justify-center'/>
    </div>
  )
}

export default Home