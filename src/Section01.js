import React from 'react'

function Section01() {
  return (
    <div
      className='w-full min-h-[60vh] md:min-h-[90vh] bg-cover bg-center bg-no-repeat relative'
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL +'/images/section01_bg.png'})`,
      }}
      id="about"
    >

      <div className='flex items-end h-full  absolute w-full md:w-2/5 bottom-10 md:bottom-20 left-0 md:left-10  z-10'>
        <div className=' p-14 '>
          <img src={process.env.PUBLIC_URL+'/images/section01_title.png'} alt="" />
        </div>

       
      </div>
      <div className=' absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-black opacity-90   pointer-events-none -z-0'></div>
    </div>
  )
}

export default Section01