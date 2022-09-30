import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

const [counter, setCounter] = useState (10);

  return (
   <div className='App'>
    <p className='text-4-xl'>{counter}</p>
   <button
   type='button' 
    className='w-[25%] h-[25%] border bg-yellow-500' 
    onClick={()=> setCounter (counter+10)}>
      donet 10 taka
    </button>
    <button
   type='button' 
    className='w-[25%] h-[25%] border bg-green-500' 
    onClick={()=> setCounter (counter+15)}>
      donet 15 taka
    </button>

    <button
   type='button' 
    className='w-[25%] h-[25%] border bg-yellow-500' 
    onClick={()=> setCounter (counter-50)}>
      spend 50 taka
    </button>
   </div>
  );
}

export default App;
