import React, { useState } from 'react'
import '../styles/App.css';
const App = () => {
const [text,setText] = useState();
const [num, setNum] = useState();

  const handleInput = (event) =>{
    event.preventDefault();
    let textvalue = document.getElementById('text-input').event.target.value
   // use console.log
   console.log('first input'+textvalue)
   console.log('first input'+num)

   setText('');
   setNum('')

  }

  // do not change id of input elements
  return (
    <div id="main">
      <label htmlFor='text-input'>Text Input:- </label>
      <input id="text-input" type={'text'}  onSubmit={event => setText(event.target.value)}/>

      <br/>
      <br/>

      <label htmlFor='num-input'>Number input</label>
      <input id="num-input"  type={'number'} onSubmit={event => setNum(event.target.value)}/>
      <br/>
      <button type='submit' onSubmit={handleInput}>submit</button>
    </div>
  )
}


export default App;
