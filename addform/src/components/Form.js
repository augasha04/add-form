import React, { useState } from 'react'

function Form() {

  const [num1, setNum1]=useState();
  const [num2, setNum2]=useState();
  const [toContainHTML, setTotal]=useState(num1 + num2);

  function addTotal(){
    setTotal(num1 + num2)
  }
  return (
    <div>
      <form>
        <input type="number" id='number' placeholder='fisrtnum' value={num1} onChange={e=>setNum1(+e.target.value)}/>
        <br/>
        <p>After entering the digits hear, they should add fter clicking 
          the button and display the results after</p>
        <input type="number" id='number' placeholder='secondnum' value={num2} onChange={e=>setNum2(+e.target.value)}/>
        <button onClick={addTotal}>add numbers</button>
        </form>
    </div>
  )
}

export default Form