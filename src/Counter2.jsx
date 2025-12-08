import React from 'react'
import { useNavigate } from 'react-router-dom'

function Counter2() {
    const nav=useNavigate()
  return (
    <div>
        <h1>counter2 </h1>
        <button onClick={()=>nav('/')}>counter1</button>
    </div>
  )
}

export default Counter2