import React from 'react'

function Skills() {
  const frontend=["html","css","javascript","react","bootstrap","material ui"]
  const backend=["node","express","mongodb"]
  const programming=["python","java","Java Script"]
  return (
    <div className='container d-flex justify-content-around py-5'>
      <div className='frontend rounded-4 shadow-lg p-3 w-25'>
        <h3 className='text-center text-warning'>Frontend</h3>
        <ul className='list-unstyled d-flex flex-column justify-content-around'>
          {
            frontend.map((item)=>(
              <li className='rounded-5 border border-success text-center m-2'>{item}</li>
            ))
          }
        </ul>
      </div>
      <div className='backend rounded-4 shadow-lg p-3 w-25'>
        <h3 className='text-center text-warning'>Backend</h3>
        <ul className='list-unstyled d-flex flex-column justify-content-around'>

          {
            backend.map((item)=>(
              <li className='rounded-5 border border-success text-center m-2'>{item}</li>
            ))
          }
        </ul>
      </div>
      <div className='programming rounded-4 shadow-lg p-3 w-25'>
        <h3 className='text-center text-warning'>Programming</h3>
        <ul className='list-unstyled d-flex flex-column justify-content-around'>
          {
            programming.map((item)=>(
              <li className='rounded-5 border border-success text-center m-2'>{item}</li>
            ))
          }
        </ul>
      </div>
    </div>
  )
}

export default Skills