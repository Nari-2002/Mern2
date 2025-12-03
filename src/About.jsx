import React from 'react'
import { FaCloud, FaNodeJs } from 'react-icons/fa'
import { SiExpress, SiMixcloud, SiMongodb, SiReact } from 'react-icons/si'

function About() {
  return (
    <div className="container py-5" id="about">
      <div className="row align-items-center bg-light p-4 rounded-4 shadow-lg">
        {/* Image Section */}
        <div className="col-md-4 text-center mb-4 mb-md-0">
          <img 
            src="https://img.freepik.com/premium-photo/isolated-businessman-character-avatar-professional-branding_1029469-183667.jpg?w=200" 
            alt="Profile"
            className="rounded-circle img-fluid shadow-sm"
            style={{ width: "200px", height: "200px", objectFit: "cover" }}
          />
        </div>

        {/* Text Section */}
        <div className="col-md-8">
          <h1 className="fw-bold">
            Hello, I'm <span className="text-primary">Narendra Kamepalli</span>
          </h1>

          <p className="text-secondary fs-5 mt-3">
            I am a passionate <strong>Full-Stack Developer</strong> skilled in the MERN stack 
            (MongoDB, Express.js, React, Node.js) and experienced in building scalable web 
            applications, REST APIs, and database integration.
          </p>

          <p className="text-secondary fs-5">
            I also have hands-on experience in <strong>Machine Learning</strong> including 
            data preprocessing, model training, deployment, and visualization. I work with Python, 
            Power BI, and analytical tools to turn data into meaningful insights.
          </p>
          <div className='m-2 d-flex justify-content-around'>
            <SiMongodb size={40} color='green'></SiMongodb>
            <SiExpress size={40} color='red'></SiExpress>
            <SiReact size={40} color='blue'></SiReact>
            <FaNodeJs size={40} color='green'></FaNodeJs> 
            <FaCloud size={40}></FaCloud>
          </div>

          <button className="btn btn-primary mt-3 rounded-pill px-4">
            View Resume
          </button>
        </div>

      </div>
    </div>
  )
}

export default About
