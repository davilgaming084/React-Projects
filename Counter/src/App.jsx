import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Count is {count}</h1>
      <button className='bg-white h-10 w-24 m-3 text-black rounded-xl' onClick={() => { if(count >= 0 ) {setCount(count+1)} }} >+</button>
      <button className='bg-white h-10 w-24 m-3 text-black rounded-xl' onClick={() => { if (count >0) {setCount(count - 1)} {
        
      } }} >-</button>
    </>
  )
}

export default App
