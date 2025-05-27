import React from 'react'
import 'boxicons/css/boxicons.min.css';

function Header() {
  // simple function to toggle the mobile
  const toggleMobileMenu=()=>{
    const mobileMenu = document.getElementById("mobileMenu")

    if(mobileMenu.classList.contains('hidden')){
      mobileMenu.classList.remove('hidden')
    }else{
      mobileMenu.classList.add('hidden')
    }
  }


  return (
    <header className='flex items-center justify-between px-4 py-4 lg:px-20'>
        <h1  data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1000" className='m-0 text-3xl font-light md:text-4xl lg:text-5xl'>
            MCODE

        </h1>
        
        <nav className='items-center hidden gap-12 md:flex'>
          <a  data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1300" className='z-50 text-base tracking-wider uppercase transition-colors hover:text-gray-300' href="#">company</a>
          <a  data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1200" className='z-50 text-base tracking-wider uppercase transition-colors hover:text-gray-300' href="#">features</a>
          <a  data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1100" className='z-50 text-base tracking-wider uppercase transition-colors hover:text-gray-300' href="#">resources</a>
          <a  data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1000" className='z-50 text-base tracking-wider uppercase transition-colors hover:text-gray-300' href="#">docs</a>
        </nav>

        <button className='hidden md:block bg-[#a7a7a7] text-black py-3 px-8 rounded-full border-none font-medium transition-all duration-500 hover:bg-white cursor-pointer z-50'>
          SIGNIN
        </button>

        {/* mobile menu button - visible only on mobile */}

        <button onClick={toggleMobileMenu} className='z-50 p-2 text-3xl md:hidden'>
         <svg  xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill={"currentColor"} viewBox="0 0 24 24"><path d="M4 4.08H20V6.08H4z"></path><path d="M4 11H20V13H4z"></path><path d="M4 17.92H20V19.92H4z"></path></svg></button>

        {/* mobile menu - hidden by default */}
        <div id='mobileMenu' className='fixed bottom-0 left-0 right-0 z-40 hidden p-5 bg-black top-16 md:hidden bg-opacity-70 backdrop-blur md:'>
        <nav className='flex flex-col items-center gap-6'>
          <a className='z-50 text-base tracking-wider uppercase transition-colors hover:text-gray-300' href="#">company</a>
          <a className='z-50 text-base tracking-wider uppercase transition-colors hover:text-gray-300' href="#">features</a>
          <a className='z-50 text-base tracking-wider uppercase transition-colors hover:text-gray-300' href="#">resources</a>
          <a className='z-50 text-base tracking-wider uppercase transition-colors hover:text-gray-300' href="#">docs</a>
        </nav>
        </div>
    </header>
  )
}

export default Header
