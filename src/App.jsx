import sq from "./images/gradient.png"
import Header from "./Components/Header"

function App() {
  return (
    <>
    <main>
       {/* gradient image */}
       <img src={sq} className="absolute top-0 right-0 opacity-60 -z-10"/>

       {/* blur effect */}
       <div className="h-0 w-[40rem] absolute top-[20%] right-[-5%] shadow-[0_0_900_20px_#e99b63] -rotate-[30deg] -z-10">

       </div>
       <Header/>
    </main>
      
    </>
  )
}

export default App

// 10:30