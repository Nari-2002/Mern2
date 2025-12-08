import React from 'react'
import Example from './Examples'
import Formik from './Formik'

const App = () => {
  const data={
    title:"narendra",
    branch:"cse"
  }
  return (
    <div>
      <Example name="narendra" data={data}></Example>
      <Formik></Formik>
    </div>
  )
}

export default App