import React from 'react'
import { useFormik } from 'formik';

const initialValues = {
  name: '',
  email: '',
  channel: ''
};

const onSubmit = value => {
  console.log('formik value', value);
};

const validate = value => {
  let errors = {};
  if (!value.name) {
    errors.name = 'required';
  }
  if (!value.email) {
    errors.email = 'required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email){
    errors.email = 'Invalid email format';
  }
  if (!value.channel) {
    errors.channel = 'required';
  }
  return errors;
}

function Form() {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validate
  })

  // console.log('formik values', formik.values);

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor='name'>Name</label>
        <input type='text' id='name' name='name' onChange={formik.handleChange} value={formik.values.name} />
        <label htmlFor='email'>E-mail</label>
        <input type='email' id='email' name='email' onChange={formik.handleChange} value={formik.values.email} />
        <label htmlFor='channel'>Channel</label>
        <input type='text' id='channel' name='channel' onChange={formik.handleChange} value={formik.values.channel} />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Form
