import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

function RegistrationForm() {

  const validationSchema = Yup.object({
    fullName: Yup.string()
      .required("Full name is required")
      .min(3, "Minimum 3 characters"),

    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),

    password: Yup.string()
      .required("Password is required")
      .min(8, "Min 8 chars")
      .matches(/[A-Z]/, "Must include uppercase letter")
      .matches(/[a-z]/, "Must include lowercase letter")
      .matches(/[0-9]/, "Must include a number")
      .matches(/[^a-zA-Z0-9]/, "Must include special character"),

    confirmPassword: Yup.string()
      .required("Confirm password is required")
      .oneOf([Yup.ref("password")], "Passwords must match"),

    phone: Yup.string()
      .required("Phone number required")
      .matches(/^[6-9]\d{9}$/, "Invalid mobile number"),

    age: Yup.number()
      .required("Age is required")
      .min(18, "Must be 18 or older")
      .max(60, "Max age allowed is 60"),

    gender: Yup.string().required("Select gender"),

    country: Yup.string().required("Select a country"),

    hobbies: Yup.array().min(1, "Select at least one hobby"),

    terms: Yup.boolean()
      .oneOf([true], "You must accept Terms & Conditions"),
  });

  // Formik Hook
  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
      phone: "",
      age: "",
      gender: "",
      country: "",
      hobbies: [],
      terms: false,
    },
    validationSchema,
    onSubmit: (values) => {
      console.log(values);
      alert("Successfully Registered!");
    }
  });

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-3">Registration Form</h2>

      <form className="border p-4 rounded shadow w-50 mx-auto" onSubmit={formik.handleSubmit}>

        {/* Full Name */}        
        <label className="mt-2">Full Name</label>
        <input type="text" className="form-control" {...formik.getFieldProps("fullName")} />
        {formik.touched.fullName && <p className="text-danger">{formik.errors.fullName}</p>}

        {/* Email */}
        <label className="mt-2">Email</label>
        <input type="text" className="form-control" {...formik.getFieldProps("email")} />
        {formik.touched.email && <p className="text-danger">{formik.errors.email}</p>}

        {/* Password */}
        <label className="mt-2">Password</label>
        <input type="password" className="form-control" {...formik.getFieldProps("password")} />
        {formik.touched.password && <p className="text-danger">{formik.errors.password}</p>}

        {/* Confirm Password */}
        <label className="mt-2">Confirm Password</label>
        <input type="password" className="form-control" {...formik.getFieldProps("confirmPassword")} />
        {formik.touched.confirmPassword && <p className="text-danger">{formik.errors.confirmPassword}</p>}

        {/* Phone */}
        <label className="mt-2">Phone Number</label>
        <input type="text" className="form-control" {...formik.getFieldProps("phone")} />
        {formik.touched.phone && <p className="text-danger">{formik.errors.phone}</p>}

        {/* Age */}
        <label className="mt-2">Age</label>
        <input type="number" className="form-control" {...formik.getFieldProps("age")} />
        {formik.touched.age && <p className="text-danger">{formik.errors.age}</p>}

        {/* Gender */}
        <label className="mt-3">Gender</label>
        <div>
          <label className="me-3">
            <input type="radio" {...formik.getFieldProps("gender")} value="Male" /> Male
          </label>
          <label>
            <input type="radio" {...formik.getFieldProps("gender")} value="Female" /> Female
          </label>
        </div>
        {formik.touched.gender && <p className="text-danger">{formik.errors.gender}</p>}

        {/* Country */}
        <label className="mt-3">Country</label>
        <select className="form-control" {...formik.getFieldProps("country")}>
          <option value="">Select Country</option>
          <option value="India">India</option>
          <option value="USA">USA</option>
          <option value="UK">UK</option>
        </select>
        {formik.touched.country && <p className="text-danger">{formik.errors.country}</p>}

        {/* Hobbies */}
        <label className="mt-3">Hobbies</label><br />
        <label className="me-3"><input type="checkbox" name="hobbies" value="Music" onChange={formik.handleChange} /> Music</label>
        <label className="me-3"><input type="checkbox" name="hobbies" value="Sports" onChange={formik.handleChange} /> Sports</label>
        <label><input type="checkbox" name="hobbies" value="Travel" onChange={formik.handleChange} /> Travel</label>
        {formik.touched.hobbies && <p className="text-danger">{formik.errors.hobbies}</p>}

        {/* Terms */}
        <div className="mt-3">
          <label>
            <input type="checkbox" {...formik.getFieldProps("terms")} /> I accept Terms & Conditions
          </label>
        </div>
        {formik.touched.terms && <p className="text-danger">{formik.errors.terms}</p>}

        {/* Submit Button */}
        <button 
          type="submit" 
          disabled={!formik.isValid || !formik.dirty}
          className="btn btn-primary mt-3 w-100"
        >
          Register
        </button>

      </form>
    </div>
  );
}

export default RegistrationForm;
