import React from 'react'

function Navbar() {
  const menuItem=[
    {id:"1",title:"企業理念", entitle:"ABOUT US"},
    {id:"2",title:"服務項目", entitle:"SERVICE"},
    {id:"3",title:"熱銷個案", entitle:"PROJECTS"},
    {id:"4",title:"經典作品", entitle:"PAST CASE"},
    {id:"5",title:"最新消息", entitle:"NEWS"},
    {id:"6",title:"聯絡方式", entitle:"CONTACT"},
  ]
  return (
    <div className=' fixed top-0 w-full px-20 pt-5 flex justify-between items-start z-50 '>
      <div className=' absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-black   pointer-events-none -z-10'></div>
      <div className='flex  space-x-10'>
        {menuItem.map((item,index)=>{
          return(
            <button key={'navbar'+index} className='text-white relative group flex flex-col justify-start '>
              <div className=' absolute transition-all duration-200 bottom-0 left-0 w-full h-40 bg-gradient-to-b from-[#BE9875] via-[#BE9875]  pointer-events-none -z-10 opacity-0 group-hover:opacity-100'></div>
              <div className='font-semibold'>{item.entitle}</div>
              <div className='text-xs'>{item.title}</div>
            </button>
          )
        })}
      </div>
      <button className='w-2/12'>
        <img src={process.env.PUBLIC_URL+'/images/navbar_logo.png'} alt="logo" className='max-w-full' />
      </button>
    </div>
  )
}

export default Navbar