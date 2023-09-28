import React,{useState} from 'react'
import { useForm, reset } from "react-hook-form";
import Modal from './Components/Modal';
function Footer() {
  const [msgMailTitle,setMsgMailTitle] = useState('築森官網的表單')
  const [mailSent, setmailSent] = useState(false);
  const [error, setError] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [formStatus , setFormStatus] = useState(false)
  const { register, handleSubmit, formState:{ errors },reset } = useForm({
    defaultValues:{
      name:"",
      tel: "",
      mail: "",
      house_types:"",
      area:"",
      main_district:"",
      sub_district:"",
      message:"",
    }
  });
  const sendFormStatusModal = ()=>{
    setFormStatus(true)

    setTimeout(()=>{
      setFormStatus(false)
    },5000)
  }
  const onSubmit = data => {
    console.log(data)

    let url1 = process.env.PUBLIC_URL+'/assets/sendsee.php'
    fetch(url1, {
      method: 'POST',
      headers: {"Content-type": "application/x-www-form-urlencoded; charset=UTF-8"},
      body: Object.entries(data).map(([k,v])=>{return k+'='+v}).join('&')
    }).then((response) => {
      if (response.ok) {
        console.log(response)
        console.log('ok')
        sendFormStatusModal()
        reset()
      }
    }).catch(error => console.log('error'));


  };
  return (
    <div
      className='w-full min-h-[90vh] bg-cover bg-center bg-no-repeat relative'
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL +'/images/footer_bg.png'})`,
      }}
      id="contact"
    >
      <div className='flex flex-col md:flex-row items-center justify-between w-10/12 md:space-x-10   mx-auto py-20'>
        <div className='flex flex-col  md:w-5/12    '>
          <div className='w-full md:w-full' >
            <img src={process.env.PUBLIC_URL+'/images/footer_title.png'} alt="" className='w-2/3 ' />
            {/* 表單 */}
            <div className='md:w-full'>
              <form onSubmit={handleSubmit(onSubmit)} className="w-full mx-auto pt-10 " data-aos="fade-up" data-aos-duration="1500" >
                <div className='flex flex-col w-full items-center justify-center'>
                  <div className='w-full  my-1 flex items-center justify-center  space-x-4 '>
                    <input type="text" className="block  bg-white  w-full
                        px-3 py-2  " placeholder="姓名"   {...register("name", { required: true})}/>
                  </div>
                  <div className='w-full  my-1 flex items-center justify-center space-x-4'>
                    <input type="text" className="block  bg-white  w-full
                        px-3 py-2  " placeholder="聯絡電話"    {...register("tel", { required: true})}/>
                  </div>
                  <div className='w-full my-1  flex items-center justify-center space-x-4'>
                    <input type="mail" className="block  bg-white   w-full
                        px-3 py-2 " placeholder="Email"   {...register("mail")}/>
                  </div>
                  <div className='w-full my-1  flex items-start justify-center space-x-4'>
                    <textarea name="" id=""  rows="4" className='block  bg-white   w-full
                        px-3 py-2' {...register("message")}></textarea>

                  </div>
                </div>
                <input type="hidden" name="msgMailTitle" value={msgMailTitle}  {...register("msgMailTitle", { required: true})}/>
                <div className='text-[#5C2C1F] font-bold text-sm w-full mx-auto mt-4'>
                  <div className=' flex mt-2 text-xs md:text-base items-center '>
                    <input type="checkbox"  className='px-1 mr-1' id="checkit" name="checkit" defaultChecked {...register("checkit", { required: true})}/>
                    <div className='text-black ml-2 text-xs  underline-offset-2 cursor-pointer' onClick={()=>setIsOpen(true)}>本人已知悉，<span className=''>『個人資料蒐集聲明事項』</span></div>
                  </div>
                </div>
                <div className='flex w-1/2  gap-4 my-3 md:mt-8'>
                  <button className='border-black text-black border-2 px-2 py-2   w-full   text-sm tracking-wide ' type='submit'>送出</button>
                  <button className='border-black text-black border-2 px-2 py-2   w-full   text-sm tracking-wide ' type='reset'>清除</button>
                </div>
                <div>{error}  {mailSent}</div>            
              </form>
            </div>

          </div>
        </div>

        <div className='w-full md:w-1/2  h-full'>
  
            <iframe width="100%" height="100%" className=" aspect-[16/9] " src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d904.4837965797493!2d121.2891389!3d24.9342778!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjTCsDU2JzAzLjQiTiAxMjHCsDE3JzIwLjkiRQ!5e0!3m2!1szh-TW!2stw!4v1686655595133!5m2!1szh-TW!2stw" frameBorder="0" allowFullScreen=""/>
            <div className='mt-6'>
              <a href=""><img src={process.env.PUBLIC_URL+'/images/line.png'} alt="line" className='w-24' /></a>
            </div>
        </div>

      </div>
      <div className='w-10/12 md:w-8/12 mx-auto'>
        <img src={process.env.PUBLIC_URL+'/images/release/footer_subtitle.png'} alt=""  className='max-w-full'/>
      </div>

    </div>
  )
}

export default Footer