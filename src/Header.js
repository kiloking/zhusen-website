import React from 'react'
import ReactPlayer from 'react-player'
function Header() {
  // https://www.youtube.com/watch?v=-jeAU_wXCiM
  return (
    <div
      className='w-full h-[60vh] md:min-h-screen  relative py-10 md:py-20'
      id="home"
    >
      <div class="video-container">
        <iframe src="https://www.youtube.com/embed/-jeAU_wXCiM?controls=0&autoplay=1&mute=1&playsinline=1&loop=1&playlist=-jeAU_wXCiM"></iframe>
      </div>

      {/* <video 
        src={process.env.PUBLIC_URL+'/images/header.mp4'} 
        autoPlay loop muted 
        className=' object-cover w-full min-h-screen  absolute top-0 opacity-70 -z-20'
      /> */}
       <div className='w-1/3 md:w-3/12 h-full mx-auto flex justify-center  items-center relative  z-10'>
        <img src={process.env.PUBLIC_URL+'/images/header_logo.png'} alt="" className='max-w-full' data-aos="fade" data-aos-duration="1500"/>
      </div>
    </div>
  )
}

export default Header