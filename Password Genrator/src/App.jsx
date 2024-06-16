import React, { useState } from 'react';

const App = () => {
  const [uppercaseChars, setUppercaseChars] = useState('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
  const [lowercaseChars, setLowercaseChars] = useState('abcdefghijklmnopqrstuvwxyz');
  const [numberChars, setNumberChars] = useState('1234567890');
  const [symbolChars, setSymbolChars] = useState('~!@#$%^&*()?><|\/');
  const [generatedText, setGeneratedText] = useState('');

  const generatePassword = () => {
    let result = '';
    const checkboxes = document.querySelectorAll('.input');
    
    checkboxes.forEach((checkbox) => {
      if (checkbox.checked) {
        switch (checkbox.id) {
          case 'uppercase':
            result += uppercaseChars[Math.floor(Math.random() * uppercaseChars.length)];
            break;
          case 'lowercase':
            result += lowercaseChars[Math.floor(Math.random() * lowercaseChars.length)];
            break;
          case 'number':
            result += numberChars[Math.floor(Math.random() * numberChars.length)];
            break;
          case 'symbol':
            result += symbolChars[Math.floor(Math.random() * symbolChars.length)];
            break;
          default:
            break;
        }
      }
    });

    setGeneratedText(result);
  };

  return (
    <div id='container' className="bg-black h-screen w-full text-white">
      <span className='h-28 w-24 bg-white text-black'>{generatedText}</span><br />
      <input className='input' type="checkbox" id='uppercase' /> <label htmlFor="uppercase">UpperCase</label> <br />
      <input className='input' type="checkbox" id='lowercase' /> <label htmlFor="lowercase">LowerCase</label><br />
      <input className='input' type="checkbox" id='number' /> <label htmlFor="number">Number</label><br />
      <input className='input' type="checkbox" id='symbol' /> <label htmlFor="symbol">Symbol</label><br />
      <button onClick={generatePassword} className='text-white bg-red-600'>Generate</button><br />
    </div>
  );
};

export default App;
