import { useState } from 'react'
import './App.css'

function App() {

  let [bgColor, setBgColor] = useState("olive");  

  return (
    <>
    <div className='w-full h-screen' style={{backgroundColor: bgColor}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
          <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: "orange"}} onClick={()=>setBgColor("orange")}>Amber</button>
          <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: "red"}} onClick={()=>setBgColor("red")}>Red</button>
          <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: "green"}} onClick={()=>setBgColor("green")}>Green</button>
          <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: "pink"}} onClick={()=>setBgColor("pink")}>Pink</button>
          <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: "purple"}} onClick={()=>setBgColor("purple")}>Purple</button>  
        </div>
        </div>
    </div>

    </>
  )
}

export default App
