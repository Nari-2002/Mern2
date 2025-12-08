import { useFormik } from 'formik'
import React from 'react'

function Formik() {
    const loginForm=useFormik({
        initialValues:{
            email:"",
            password:""
        },
        onSubmit:(values)=>{
            console.log(values)
        }
    })
  return (
    <div>
        <form onSubmit={loginForm.handleSubmit}>
            <input type='text' {...loginForm.getFieldProps('email')}></input>
            <input type='password' {...loginForm.getFieldProps('password')}></input>
            <button type='submit'>submit</button>
        </form>
    </div>
  )
}

export default Formik