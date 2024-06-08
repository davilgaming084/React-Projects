import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [count, setCount] = useState('white')
  let changebg= ()=>{
    if (count === 'white') {
      setCount((count)=>{ return count = '#242424'})
      let p = document.querySelector('p')
      p.innerText = 'You Are In Dark Mode'
      p.style.color = 'white'
      document.querySelector('.btn-77').innerText = 'White Mode'
    }
    else if (count === '#242424'){
      setCount((count)=>{ return  count = 'white'})
      let p = document.querySelector('p')
      p.innerText = 'You Are In White Mode'
      p.style.color = 'black'
      document.querySelector('.btn-77').innerText = 'Dark Mode'

    }
  }
  
  return (
    <>
      <div className='w-full h-screen  flex justify-center items-center' style={{ backgroundColor: count , transition:'1s' }}>
        <button  onClick={changebg} class="btn-77 ">Dark Mode </button>

      </div>
      <p className='absolute top-1/3 left-1/2 transform -translate-x-1/2'></p>
    </>
  )
}

export default App
