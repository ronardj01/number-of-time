import React, {useState} from 'react'
import './App.css';
import Paragraph from './components/Paragraph'
import Head from './components/Head';
import 'bootstrap/dist/css/bootstrap.min.css'
import IncrementButton from './components/IncrementButton';

function App() {
  let [number, setNumber] = useState(0)

  let incrementNumber = () => setNumber(++number)
  
  return (
    <div className='d-flex flex-column align-items-center mt-5'>
      <Head />
      <Paragraph content={number}/>
      <IncrementButton whenClick={incrementNumber}/>
    </div>
  );
}

export default App;
