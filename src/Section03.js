import React from 'react'

function Section03() {
  const projectItem=[
    {id:"1",image:"project01.png",title:"新亦ONE",  company:"新亦建設", place:"桃園八德擴大重劃區", url:"https://www.maizizi.vaserver.com/xinyi-one/"},
    {id:"2",image:"project02.png",title:"偉築新豐洲", company:"偉築建設", place:"桃園青埔航空城", url:"https://www.maizizi.vaserver.com/neo-supercity/" },
    {id:"3",image:"project03.png",title:"上順艾麗", company:"上順房屋開發", place:"桃園大園客運特區", url:"https://www.maizizi.vaserver.com/beautiful-time/"},
  ]
  return (
    <div
      className='w-full min-h-[60vh] md:min-h-screen bg-cover bg-center bg-no-repeat relativ '
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL +'/images/section03_bg.png'})`,
      }}
      id="projects"
    >

    <div className='flex flex-col h-full relative pt-20 md:w-10/12 mx-auto   z-10'>
      <div className=' p-8 md:p-14 '>
        <img src={process.env.PUBLIC_URL+'/images/section03_title.png'} alt="" />
      </div>
      <div className=' flex flex-col md:flex-row md:space-x-10 px-5 space-y-5 md:space-y-0 md:px-14 mt-6 pb-12'>
        {
          projectItem.map((item,index)=>{
            return(
              <div key={'p'+index} className='flex space-x-5'>
                <div className='w-6/12'><img src={process.env.PUBLIC_URL+'/images/'+item.image} alt="" /></div>
                <div className='w- flex flex-col text-white'>
                  <div className='border-b pb-2 mb-2'>{item.place}</div>
                  <div className=''>{item.company}</div>
                  <div className='mb-6'>{item.title}</div>
                  <a href={item.url} target='_blank' className='mt-auto px-5 py-1 text-center border transition-all hover:bg-white/30 break-before-all '>個案網站</a>
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