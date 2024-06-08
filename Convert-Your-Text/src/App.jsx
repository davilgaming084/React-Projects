import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react'

function App() {
  const [textarea, settextarea] = useState('')
  let handletextarea = (e) => {
    settextarea(e.target.value) 
  }
 let toupercse = ()=>{
  settextarea(textarea.toUpperCase())
 }
 let lowercase = ()=>{
  settextarea(textarea.toLowerCase())
 }
 let remove = ()=>{
  settextarea('')
 }
 let copy = ()=>{
  navigator.clipboard.writeText(textarea)
 }
 let trulength = textarea.replace(/\s/g,'').length
 
  return (
    <>
      <h1 className='text-center text-xl'>Conver Your Text </h1>
      <textarea id="myTextarea" className="text-black resize-none overflow-hidden absolute left-1/2 transform -translate-x-1/2 w-96 h-40 rounded-lg" value={textarea} onChange={handletextarea}></textarea>
      <div className='absolute top-72 left-1/2 transform -translate-x-1/2 flex justify-evenly w-1/2'>
        <p>Lenngth is {trulength}</p>
        <button className='bg-black rounded-lg text-white p-2' onClick={toupercse}>UpperCase</button>
        <button className='bg-black rounded-lg text-white p-2' onClick={lowercase}>LowerCase</button>
        <button className='bg-black rounded-lg text-white p-2' onClick={remove}>Remove</button>
        <button className='bg-black rounded-lg text-white p-2' onClick={copy}>Copy</button>
      </div>

      {/* <button className='bg-black rounded-lg text-white p-2' onClick={startSpeechRecognition}>Start Speech Recognition</button> */}
      {/* <button className='bg-black rounded-lg text-white p-2' onClick={readSpeak}>Read Speak</button> */}
      <h1></h1>
    </>
  )
}

export default App


