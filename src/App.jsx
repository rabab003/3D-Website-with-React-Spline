import sq from "./images/gradient.png"
import Header from "./Components/Header"
import Hero from "./Components/Hero"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";


function App() {
  useEffect(()=>{
    AOS.init({
      duration:1500,
      once:true
    })
  })
  return (
    <>
    <main>
       {/* gradient image */}
       <img src={sq} className="absolute top-0 right-0 opacity-60 -z-10"/>

       {/* blur effect */}
       <div className="h-0 w-[40rem] absolute top-[20%] right-[-5%] shadow-[0_0_900_20px_#e99b63] -rotate-[30deg] -z-10">

       </div>
       <Header/>
       <Hero/>
    </main>
      
    </>
  )
}

export default App

// 31:20