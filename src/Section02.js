import React from 'react'

function Section02() {
  return (
    <div
      className='w-full min-h-[90vh] bg-cover bg-center bg-no-repeat relative'
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL +'/images/section02_bg.png'})`,
      }}
    >

      <div className='flex items-end h-full  absolute w-full bottom-10 px-16  z-10'>
        
        <div className=' p-10 '>
          <img src={process.env.PUBLIC_URL+'/images/section02_p01.png'} alt="" />
        </div>
        
        <div className=' p-10 '>
          <img src={process.env.PUBLIC_URL+'/images/section02_title.png'} alt="" />
        </div>

       
      </div>
      <div className=' absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-black opacity-90   pointer-events-none -z-0'></div>
    </div>
  )
}

export default Section02