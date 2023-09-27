import React from 'react'

function Header() {
  return (
    <div
      className='w-full h-[60vh] md:min-h-screen  relative py-10 md:py-20'
    >
      <video 
        src={process.env.PUBLIC_URL+'/images/header.mp4'} 
        autoPlay loop muted 
        className=' object-cover w-full min-h-screen  absolute top-0 opacity-50 -z-20'
      />
       <div className='w-3/12 h-full mx-auto flex justify-center  items-center '>
        <img src={process.env.PUBLIC_URL+'/images/header_logo.png'} alt="" className='max-w-full' data-aos="fade" data-aos-duration="1500"/>
      </div>
    </div>
  )
}

export default Header