import React, { useState } from 'react'
import './App.css';
import Paragraph from './components/Paragraph'
import Head from './components/Head';
import 'bootstrap/dist/css/bootstrap.min.css'
import ButtonDark from './components/ButtonDark';

function App() {
  let [number, setNumber] = useState(0)

  const incrementNumber = () => setNumber(++number)

  const decrementNumber = () => {
    number > 0 ? setNumber(--number) : setNumber(number)
  }

  return (
    <>
      <div className='d-flex flex-column align-items-center mt-5'>
        <Head />
        <Paragraph content={number} />
      </div>
      <div className='d-flex justify-content-evenly'>
        <ButtonDark whenClick={decrementNumber} label='Decrement' />
        <ButtonDark whenClick={incrementNumber} label='Increment' />
      </div>
    </>
  );
}

export default App;
