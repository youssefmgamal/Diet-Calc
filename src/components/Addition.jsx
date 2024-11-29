import React, { useState } from 'react';
import './Addition.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function Addition() {
  const [num1, setNum1] = useState();
  const [num2, setNum2] = useState();
  const [num3, setNum3] = useState();
  const [answer, setAnswer] = useState(0);

  const handleNum1Change = (event) => {
    setNum1(parseInt(event.target.value));
  };

  const handleNum2Change = (event) => {
    setNum2(parseInt(event.target.value));
  };

    const handleNum3Change = (event) => {
    setNum3(parseInt(event.target.value));
    };

  const handleSubmit = (event) => {
    event.preventDefault();
    setAnswer(Math.floor((num1 * num2) / num3));
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className='text'>
        <input id="box1" className ="textbox" type="number" value={num1} onChange={handleNum1Change} placeholder='Grams Of Food In Plan'/>
        *
        <input id="box2" className ="textbox" type="number" value={num2} onChange={handleNum2Change} placeholder='Gram Of New Food' />
        /
        <input id="box3" className ="textbox" type="number" value={num3} onChange={handleNum3Change} placeholder='Grams Of Food in Table' /> 
        <p className='ans'>answer: {answer}</p>
        <br />
        <button id='btn' className='btn btn-primary' type="submit">Calculate</button>
      </form>
      
    </div>
  );
}

export default Addition;