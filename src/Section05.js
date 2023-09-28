import React from 'react'

function Section05() {
  const projectItem=[
    {id:"1",image:"news01.png",title:"上順艾麗 產業菁英新居首選",  date:"2023/07/14", url:"https://www.chinatimes.com/newspapers/20230714000399-260210?chdtv"},
  ]
  return (
    <div
      className='w-full min-h-[60vh] md:min-h-screen bg-cover bg-center bg-no-repeat relative'
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL +'/images/section05_bg.png'})`,
      }}
      id="news"
    >

    <div className='flex flex-col h-full relative pt-20 w-10/12 mx-auto   z-10'>
      <div className=' p-8 md:p-14 '>
        <img src={process.env.PUBLIC_URL+'/images/section05_title.png'} alt="" />
      </div>
      <div className=' flex  md:flex-row md:space-x-10 px-5 space-y-5 md:space-y-0 md:px-14 mt-6 pb-12'>
        {
          projectItem.map((item,index)=>{
            return(
              <div key={'p'+index} className='flex flex-col space-y-5'>
                <a href={item.url} target='_blank' className='md:w-2/3 hover:brightness-125 transition-all duration-300'><img src={process.env.PUBLIC_URL+'/images/'+item.image} alt="" /></a>
                <div className='w-full text-white'>
                  <div className=''>{item.date}</div>
                  <div className='mb-6'>{item.title}</div>
                </div>
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

export default Section05