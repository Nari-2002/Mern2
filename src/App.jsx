import React from 'react'
import { BrowserRouter, Link, Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Counter from './Counter.jsx'
import Counter2 from './Counter2.jsx'
import Form from './Form.jsx'
import RegistrationForm from './RegistrationForm.jsx'


function App() {
  return (
    <div>
      <RegistrationForm></RegistrationForm>
    </div>
  )
}

export default App