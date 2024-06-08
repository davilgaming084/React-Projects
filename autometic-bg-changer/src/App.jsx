import { useState } from 'react';
import './App.css';

function App() {
  const [color, setColor] = useState('#242424');

  let changeColor = () => {
    let intervalid;
    clearInterval(intervalid)
    intervalid = setInterval(() => {
      let colorcode = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
      console.log(colorcode);
      setColor(colorcode);
    }, 1000);
  };

  return (
    <div id='main' className='min-h-screen bg-black text-white flex justify-center items-center' style={{ backgroundColor: color, transition: '0.5s' }}>
      <div id='container' className='w-11/12 sm:w-2/3 md:w-1/2 lg:w-1/3 xl:w-1/4 bg-gray-800 rounded-lg p-8'>
        <p className='text-center mb-8'>{color}</p>
        <button onClick={changeColor} className='rounded-lg bg-white text-black h-10 w-full'>
          Click
        </button>
      </div>
    </div>
  );
}

export default App;
