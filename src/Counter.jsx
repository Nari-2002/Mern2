import React from 'react'

function Counter() {
  console.log("counter rendered")
  return (
    <div>
        counter
    </div>
  )
}

export default React.memo(Counter)