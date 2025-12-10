import React from 'react'
import { useNavigate } from 'react-router-dom'

function Counter2() {
  const nav=useNavigate()
  return (
    <div>
      <input type="text" placeholder='enter text'></input>
      <button onClick={()=>nav("/")}>submit</button>
    </div>
  )
}

export default Counter2