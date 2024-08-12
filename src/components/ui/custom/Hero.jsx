import React from 'react'
import { Button } from '../ui/button'
import { Link } from 'react-router-dom'


function Hero() {
  return (
    <div className='  hero-bg  min-h-screen overflow-x-hidden scroll-smooth'>
    <div className=' items-center gap-9  flex flex-col justify-center w-full flex-grow '>
      <h1 className='flex flex-col font-extrabold text-[50px]  text-center mt-24 lg:mt-24 '>  
        <span className='text-[#4e45d5]'>Discover Your Next Adventure with AI:</span>Personalized Itineraries at Your Fingertips
        <p className='text-xl  text-center mt-6 text-gray-800 '>
          Your personal trip planner and travel curator.
        </p>
        <Link to={'/create-trip'}>
           <Button>Get Started, It's Free</Button>
        </Link>
      </h1>
    </div>
      <footer className="bg-gray-300 text-gray-900 text-center py-4 mt-72 sm:mt-66 ">
        <p className="text-sm font-bold font-style: italic flex justify-center gap-2">Created by Sarthak Kashyap <img src="/Thunder.png" className='h-[20px]' /></p>
      </footer>
    </div>
    
  )
}

export default Hero
