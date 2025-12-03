import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    const navlinks=[{
      name:"About",
      link:"/"
    },{
      name:"Projects",
      link:"/projects"
    },{
      name:"Skills",
      link:"/skills"
    },{
      name:"Education",
      link:"/education"
    }]
  return (
    <div className='d-flex justify-content-around bg-secondary mb-5 '>
        {
            navlinks.map((item)=>(
                <Link to={item.link} className='text-white p-2 text-decoration-none'>{item.name}</Link>
            ))
        }
    </div>
  )
}

export default Navbar