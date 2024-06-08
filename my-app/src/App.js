import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {
  let [count, setCount] = useState(0)
  let plus = () => {
    setCount(count + 1)
    console.log(count + 1);
  }
  let minus = () => {
    if (count > 0) {
      setCount(count - 1)
    }
    else{
      console.log(`count is in negitive`);
    }
  }
  return (
    <>
      <h1 id="count">Count {count} </h1>
      <div id="container">
        <h1>Click  </h1>
        <button onClick={plus}>Click For +</button>
        <button onClick={minus}>Click For -</button>
      </div>
    </>
  );
}

export default App;
