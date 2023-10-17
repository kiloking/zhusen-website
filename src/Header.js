import React from 'react'
import FullscreenYouTubeBackground from './Components/FullscreenYouTubeBackground'
function Header() {
  // https://www.youtube.com/watch?v=-jeAU_wXCiM
  return (
    <div
      className='w-full h-[60vh] md:min-h-screen  relative pt-10 md:pt-20'
      id="home"
    >
      <FullscreenYouTubeBackground />
      <div className='w-1/3 md:w-3/12 h-full mx-auto flex justify-center  items-center relative  z-10'>
        <img src={process.env.PUBLIC_URL+'/images/header_logo.png'} alt="" className='max-w-full' data-aos="fade" data-aos-duration="1500"/>
      </div>
    </div>
  )
}

export default Header