import { useFormik } from 'formik'
import * as yup from 'yup'
function Form() {
    const loginForm=useFormik({
        initialValues:{
            email:"",
            password:""
        },
        validationSchema:yup.object({
            email:yup.string().email("invalid email").required("this field is mandatory"),
            password:yup.string().required("this field is mandatory").min(8,"minimum length is 8").matches(/[a-z]/,"include smalls").matches(/[A-Z]/,"include caps").matches(/[0-9]/,"include numbers").matches(/[^a-zA-Z0-9]/,"include special characters")
        }),
        onSubmit:(values)=>{
            console.log(values)
        }
    })
  return (
    <div>
        <form onSubmit={loginForm.handleSubmit} className='m-5 p-4 border border-success w-25'>
            <input type='text' placeholder='email...' {...loginForm.getFieldProps("email")}></input>
            <br></br>
            {loginForm.touched.email&&<p className='text-danger'>{loginForm.errors.email}</p>}
            <br></br>
            <input type='password' placeholder='password...' {...loginForm.getFieldProps("password")}></input>
            <br></br>
            {loginForm.touched.password&&<p className='text-danger'>{loginForm.errors.password}</p>}
            <br></br>
            <button type='submit' disabled={!loginForm.isValid}>submit</button>
        </form>
    </div>
  )
}

export default Form