import React from 'react'

function Section04() {
  const caseItem=[
    {id:"1",image:"case01.png", url:"https://"},
    {id:"2",image:"case02.png", url:"https://" },
    {id:"3",image:"case03.png", url:"https://"},
    {id:"3",image:"case04.png", url:"https://"},
  ]
  return (
    <div
      className='w-full min-h-[60vh] md:min-h-screen bg-cover bg-center bg-no-repeat relative'
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL +'/images/section04_bg.png'})`,
      }}
      id="case"
    >

    <div className='flex flex-col h-full relative pt-20 w-10/12 mx-auto   z-10'>
      <div className=' p-8 md:p-14 '>
        <img src={process.env.PUBLIC_URL+'/images/section04_title.png'} alt="" />
      </div>
      <div className=' flex flex-col md:flex-row md:space-x-10 px-5 space-y-5 md:space-y-0 md:px-14 mt-6 pb-12 '>
        {
          caseItem.map((item,index)=>{
            return(
              <div key={'case'+index} className='flex space-x-5'>
                <div className='w-full'><img src={process.env.PUBLIC_URL+'/images/'+item.image} alt="" /></div>
                
              </div>
            )
          })
        }
      </div>

     
    </div>
    <div className=' absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-black opacity-90   pointer-events-none -z-0'></div>
  </div>
  )
}

export default Section04