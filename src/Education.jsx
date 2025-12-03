import React from 'react'

function Education() {
  const education=[
    {
      class:"X class (ssc)",
      school:"Lakshmi High School",
      CGPA:"9.8",
      total:"10"      
    },
    {
      class:"Internediate MPC",
      school:"Sri Chaitanya Jr College",
      CGPA:"956",
      total:"1000"      
    },{
      class:"B.Tech",
      school:"Seshadri Rao Gudlavalleru Engineering College",
      CGPA:"9.12",
      total:"10"      
    }
  ]
  return (
    <div>
      <div className='container py-5'>
        <h1 className='text-center text-warning mb-4'>Education</h1>
        <div className='row justify-content-center'>
          {
            education.map((item)=>(
              <div className='col-md-5 overflow-auto'>
                <div className='card shadow mb-4 rounded-4'>
                  <div className='card-body'>
                    <h3 className='card-title text-primary fw-bold'>{item.class}</h3>
                    <p className='card-text text-secondary mt-2'>{item.school}</p>
                    <p className='card-text text-secondary mt-2'>{item.CGPA}/{item.total}</p>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Education