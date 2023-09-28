import React, { useState } from 'react'
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import { FaBars } from "react-icons/fa6";
function Navbar() {
  const menuItem=[
    {id:"1",to:"about",title:"企業理念", entitle:"ABOUT US"},
    {id:"2",to:"service",title:"服務項目", entitle:"SERVICE"},
    {id:"3",to:"projects",title:"熱銷個案", entitle:"PROJECTS"},
    {id:"4",to:"case",title:"經典作品", entitle:"PAST CASE"},
    {id:"5",to:"news",title:"最新消息", entitle:"NEWS"},
    {id:"6",to:"contact",title:"聯絡方式", entitle:"CONTACT"},
  ]
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className=' fixed top-0 w-full z-50 '>
      <div className='px-20 pt-5 md:flex justify-between items-start hidden'>      
        <div className=' absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-black   pointer-events-none -z-10'></div>
        <div className='flex  space-x-10'>
          {menuItem.map((item,index)=>{
            return(
              <Link  activeClass="active" smooth spy to={item.to} key={'navbar'+index} className='text-white relative group flex flex-col justify-start cursor-pointer '>
                <div className=' absolute transition-all duration-200 bottom-0 left-0 w-full h-40 bg-gradient-to-b from-[#BE9875] via-[#BE9875]  pointer-events-none -z-10 opacity-0 group-hover:opacity-100'></div>
                <div className='font-semibold'>{item.entitle}</div>
                <div className='text-xs'>{item.title}</div>
              </Link>
            )
          })}
        </div>
        <Link className='w-2/12 cursor-pointer' activeClass="active" smooth spy to="home">
          <img src={process.env.PUBLIC_URL+'/images/navbar_logo.png'}  alt="logo" className='max-w-full' />
        </Link>

      </div>

      {/* mobile */}
      <div>
        <div className=' bg-black/80 px-4 py-4 top-0  fixed w-full md:hidden' onClick={toggleMenu}>
          <FaBars size={20} color="white" />
        </div>
        <div className={` bg-black/80 absolute z-50 top-0 left-0 w-full h-screen transition-all duration-500 delay-100   ${isOpen ? ' translate-y-[5%]' :  ' -translate-y-[130%]'} `}>
          <div className='flex flex-col w-full '>
            <Link 
              className='pl-8 py-8 w-1/2  cursor-pointer' activeClass="active" smooth spy to="home"                           
              onClick={()=>{
                setIsOpen(!isOpen);
              }}
            >
              <img src={process.env.PUBLIC_URL+'/images/footer_logo.png'}  alt="logo" className='max-w-full' />
            </Link>
            <div className='flex flex-col justify- items-start w-10/12 mx-auto space-y-10'>
              {menuItem.map((item,index)=>{
                return(
                  <Link  
                    activeClass="active" smooth spy to={item.to} 
                    key={'navbar'+index} 
                    className='text-white relative group flex flex-col justify-start cursor-pointer '
                    onClick={()=>{
                      setIsOpen(!isOpen);
                    }}
                  >
                    <div className='font-semibold'>{item.entitle}</div>
                    <div className='text-xs'>{item.title}</div>
                  </Link>
                )
              })}
            </div>
          </div>


        </div>
      </div>

    </div>
  )
}

export default Navbar