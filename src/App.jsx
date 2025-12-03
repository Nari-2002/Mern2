import React from 'react'
import { BrowserRouter, Route,Routes } from 'react-router-dom'
import Navbar from './Navbar'
import About from './About'
import Projects from './Projects'
import Skills from './Skills'
import Education from './Education'

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<About></About>}></Route>
        <Route path='/projects' element={<Projects></Projects>}></Route>
        <Route path='/skills' element={<Skills></Skills>}></Route>
        <Route path='/education' element={<Education></Education>}></Route>
        <Route path='*' element={<About></About>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App