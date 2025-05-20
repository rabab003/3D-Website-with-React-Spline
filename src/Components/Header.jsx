import React from 'react'

function Header() {
  return (
    <header className='flex items-center justify-between px-4 py-4 lg:px-20'>
        <h1 className='m-0 text-3xl font-light md:text-4xl lg:text-5xl'>
            MCODE

        </h1>
        
        <nav className='items-center hidden gap-12 md:flex'>
          <a className='z-50 text-base tracking-wider uppercase transition-colors hover:text-gray-300' href="#">company</a>
          <a className='z-50 text-base tracking-wider uppercase transition-colors hover:text-gray-300' href="#">features</a>
          <a className='z-50 text-base tracking-wider uppercase transition-colors hover:text-gray-300' href="#">resources</a>
          <a className='z-50 text-base tracking-wider uppercase transition-colors hover:text-gray-300' href="#">docs</a>
        </nav>

        <button className='hidden md:block bg-[#a7a7a7] text-black py-3 px-8 rounded-full border-none font-medium transition-all duration-500 hover:bg-white cursor-pointer z-50'>
          SIGNIN
        </button>
    </header>
  )
}

export default Header
