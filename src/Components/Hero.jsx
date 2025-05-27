import React from 'react'
import 'boxicons/css/boxicons.min.css';
import Spline from '@splinetool/react-spline';


function Hero() {
  return (
    <main className='flex lg:mt-20 flex-col lg:flex-row items-center justify-between min-h-[calc(90vh-6rem)]'>
     <div   data-aos="fade-down-right" className='max-w-xl ml-[5%] z-10 mt-[90%] md:mt-[60%] lg:mt-0'>
       <div className='relative w-[95%] sm:w-48 h-10 bg-gradient-to-r from-[#656565] to-[#e99b63] shadow-[0_0_15px_rgba(255,255,255,0.4)] rounded-full'>
         <div className=' absolute cursor-pointer inset-[3px] bg-black rounded-full flex items-center justify-center gap-1'>
          <i><svg  xmlns="http://www.w3.org/2000/svg" width={16} height={16}  fill={"currentColor"} viewBox="0 0 24 24"><path d="m21.44,11h-3.74l-3.12,8.44,6.77-8.27c.04-.05.06-.11.1-.17Z"></path><path d="M10.72 2 8.39 9 15.61 9 13.28 2 10.72 2z"></path><path d="m21.53,8.91l-3.37-5.9c-.35-.62-1.02-1.01-1.74-1.01h-1.03l2.33,7h3.84s-.02-.06-.04-.09Z"></path><path d="M8.39 11 11.79 21.2 15.56 11 8.39 11z"></path><path d="m5.84,3.01l-3.37,5.9s-.02.06-.04.09h3.84l2.33-7h-1.03c-.72,0-1.38.39-1.74,1.01Z"></path><path d="m8.86,18.74l-2.58-7.74h-3.72c.04.05.06.11.1.17l6.2,7.58Z"></path></svg></i>
         introducing
         </div>
       </div>

        {/* main heading */}
       <h1 className='my-8 text-3xl font-semibold tracking-wider sm:text-4xl md:text-5xl lg:text-6xl'>
        EMAIL FOR <br/>
        DEVELOPERS
       </h1>

       <p className="text-base sm:text-lg tracking-wider text-gray-400 max-w-[25rem] lg:max-w-[30rem]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum voluptatibus voluptate, veniam velit dicta nemo cupiditate consectetur, reiciendis modi at vitae nihil ab cumque tempore debitis necessitatibus doloribus, magnam aspernatur.</p>
        
        <div className='flex gap-4 mt-12'>
          <a href="" className='border border-[#2a2a2a] py-2 sm:py-3 px-4 sm:px-5 rounded-full sm:text-lg text-sm font-semibold tracking-wider transition-all duration-300 hover:bg-[#1a1a1a]'>Documentation</a>
          <a href="" className='border border-[#2a2a2a] py-2 sm:py-3 px-4 sm:px-5 rounded-full sm:text-lg text-sm font-semibold tracking-wider transition-all duration-300 hover:bg-[#1a1a1a]'>Get started</a>
        </div>
     </div>

     {/* 3d robot */}
         <Spline  data-aos="fade-zoom-in"
     data-aos-easing="ease-in-back"
     data-aos-delay="300"
     data-aos-offset="0"
     data-aos-duration="3000"
      className="absolute lg:top-0 top-[-20%] bottom-0 lg:left-[25%] sm:left-[-2%] h-full" scene="https://prod.spline.design/f25SbjO03WHAnJUS/scene.splinecode" />

    </main>
  )
}

export default Hero