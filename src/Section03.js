import React from 'react'

function Section03() {
  const projectItem=[
    {id:"1",image:"project01.png",title:"新亦ONE",  company:"新亦建設", place:"桃園八德擴大重劃區", url:"https://"},
    {id:"2",image:"project02.png",title:"偉築新豐洲", company:"偉築建設", place:"桃園青埔航空城", url:"https://" },
    {id:"3",image:"project03.png",title:"上順艾麗", company:"上順房屋開發", place:"桃園大園客運特區", url:"https://"},
  ]
  return (
    <div
      className='w-full min-h-screen bg-cover bg-center bg-no-repeat relative'
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL +'/images/section03_bg.png'})`,
      }}
    >

    <div className='flex flex-col h-full relative pt-20 w-10/12 mx-auto   z-10'>
      <div className=' p-14 '>
        <img src={process.env.PUBLIC_URL+'/images/section03_title.png'} alt="" />
      </div>
      <div className=' flex space-x-10 px-14 mt-6'>
        {
          projectItem.map((item,index)=>{
            return(
              <div key={'p'+index} className='flex space-x-5'>
                <div className='w-2/3'><img src={process.env.PUBLIC_URL+'/images/'+item.image} alt="" /></div>
                <div className='w-1/3 text-white'>
                  <div className='border-b pb-2 mb-2'>{item.place}</div>
                  <div className=''>{item.company}</div>
                  <div className='mb-6'>{item.title}</div>
                  <a href={item.url} className='px-5 py-1 border transition-all hover:bg-white/30 '>個案網站</a>
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

export default Section03