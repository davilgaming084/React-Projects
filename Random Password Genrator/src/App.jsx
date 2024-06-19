import React, { useEffect, useRef, useState } from 'react';

const App = () => {
  const [uppercaseChars, setUppercaseChars] = useState('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
  const [lowercaseChars, setLowercaseChars] = useState('abcdefghijklmnopqrstuvwxyz');
  const [numberChars, setNumberChars] = useState('1234567890');
  const [symbolChars, setSymbolChars] = useState('~!@#$%^&*()?><|\/');
  const [fillGAp, setfillGAp] = useState('ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890~!@#$%^&*()?><|\/');
  const [FinalPAss, setFinalPAss] = useState('')
  let genrateRandom = (data) => {
    return data[Math.floor(Math.random() * data.length)]
  }
  const UpperCaseREf = useRef(null)
  const LowerCaseREf = useRef(null)
  const NumberREf = useRef(null)
  const SymbolREf = useRef(null)
  const Length = useRef(null)

  let Genrate = () => {

    if (UpperCaseREf.current.checked) {
      setFinalPAss(genrateRandom(uppercaseChars))
    }
    if (LowerCaseREf.current.checked) {
      setFinalPAss((prev) => prev += genrateRandom(lowercaseChars))
    }
    if (NumberREf.current.checked) {
      setFinalPAss((prev) => prev += genrateRandom(numberChars))
    }
    if (SymbolREf.current.checked) {
      setFinalPAss((prev) => prev += genrateRandom(symbolChars))
    }

  }
  useEffect(() => {

    if (FinalPAss.length < Length.current.value) {
      let finf = FinalPAss.length - Length.current.value
      let conver = Math.abs(finf)
      for (let index = 0; index < conver; index++) {
        setFinalPAss((prev) => prev += genrateRandom(fillGAp))
      }
    }
  })
  console.log(FinalPAss.length);

  return (
    <div id='container' className="bg-black h-screen w-full text-white">
      <span className='h-28 w-24 bg-white text-black'>{FinalPAss}</span><br />
      <input ref={UpperCaseREf} type="checkbox" id='uppercase' /> <label htmlFor="uppercase">UpperCase</label> <br />
      <input ref={LowerCaseREf} type="checkbox" id='lowercase' /> <label htmlFor="lowercase">LowerCase</label><br />
      <input ref={NumberREf} type="checkbox" id='number' /> <label htmlFor="number">Number</label><br />
      <input ref={SymbolREf} type="checkbox" id='symbol' /> <label htmlFor="symbol">Symbol</label><br />
      <button onClick={Genrate} className='text-white bg-red-600'>Generate</button><br />
      <input ref={Length} type="number" className='text-black' />
    </div>
  );
};

export default App;
