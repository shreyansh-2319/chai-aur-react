/* eslint-disable react-hooks/immutability */
import { useState } from 'react'
import './App.css'

function App() {
  let [counter,setCounter]=useState(15);

  function addValue(){
    if(counter<=19)
    {  
        setCounter(counter+1); 
        // setCounter(counter+1); // no matter how many times you give this , it will still be considered as one batch 
        // setCounter(counter+1); //if run these . it will only increment by 1
        // setCounter(prev=>prev+1); // this will work as it is using previous value 
        // setCounter(prev=>prev+1); // if run these two lines , it will increment by 2
      }
    else
      alert('Reached upper limit')
  }

  function subValue(){
    if(counter>0)
      setCounter(counter-1)
    else
      alert('Reached lower limit')
  }

  return (
    <>
   <h1>Chai aur React</h1>
   <h2>Counter Value : {counter}</h2>
   <button onClick={addValue}>Increment</button>
   <br/>
   <button onClick={subValue}>Decrement</button>
    </>
  )
}

export default App
