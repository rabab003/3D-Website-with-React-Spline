import React from 'react'
import 'boxicons/css/boxicons.min.css';


function Hero() {
  return (
    <main className='flex lg:mt-20 flex-col lg:flex-row items-center justify-between min-h-[calc(90vh-6rem)]'>
     <div className='max-w-xl ml-[5%] z-10 mt-[90%] md:mt-[60%] lg:mt-0'>
       <div>
         <div>
            <svg  xmlns="http://www.w3.org/2000/svg" width={16} height={16}  fill={"currentColor"} viewBox="0 0 24 24"><path d="m21.44,11h-3.74l-3.12,8.44,6.77-8.27c.04-.05.06-.11.1-.17Z"></path><path d="M10.72 2 8.39 9 15.61 9 13.28 2 10.72 2z"></path><path d="m21.53,8.91l-3.37-5.9c-.35-.62-1.02-1.01-1.74-1.01h-1.03l2.33,7h3.84s-.02-.06-.04-.09Z"></path><path d="M8.39 11 11.79 21.2 15.56 11 8.39 11z"></path><path d="m5.84,3.01l-3.37,5.9s-.02.06-.04.09h3.84l2.33-7h-1.03c-.72,0-1.38.39-1.74,1.01Z"></path><path d="m8.86,18.74l-2.58-7.74h-3.72c.04.05.06.11.1.17l6.2,7.58Z"></path></svg>
         </div>
       </div>
     </div>
    </main>
  )
}

export default Hero