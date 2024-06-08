import { useState } from 'react'
import './App.css'

function App() {
  const [Time, setTime] = useState("Click to see Time")
  let show = ()=>{
    setInterval(() => {
      let date = new Date();
      let time = date.toLocaleTimeString()
      setTime(time)
    },1000)
  }
  
  return (
    <>
      <div className=" h-24  w-60 bg-yellow-300 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black"> {Time}</div>
      <button onClick={show}  className='relative top-80 left transform-translate-x-1/2 translate-y-1/2 bg-white text-black rounded-lg p-2'>Show Time</button>
    </>
  )
}

export default App
