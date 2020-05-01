import React from 'react'
import { useFormik } from 'formik';
function Form() {
  const formik = useFormik({})
  return (
    <div>
      <label htmlFor='name'>Name</label>
      <input type='text' id='name' name='name' />
      <label htmlFor='email'>E-mail</label>
      <input type='email' id='email' name='email' />
      <label htmlFor='channel'>Channel</label>
      <input type='text' id='channel' name='channel' />
      <button>Submit</button>
    </div>
  )
}

export default Form
