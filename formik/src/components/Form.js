import React from 'react'
import { useFormik } from 'formik';
import * as yup from 'yup'; // for everything

const initialValues = {
  name: '',
  email: '',
  channel: ''
};

const onSubmit = values => {
  console.log('formik value', values);
};

const validate = values => {
  let errors = {};
  if (!values.name) {
    errors.name = 'Required';
  }
  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email format';
  }
  if (!values.channel) {
    errors.channel = 'Required';
  }
  return errors;
}
const validationSchema = yup.object({
  name: yup.string().required('This field is required'),
  email: yup.string().email('Invalid email address').required('This field is required'),
  channel: yup.string().required('This field is required'),
})

function Form() {
  const formik = useFormik({
    initialValues,
    onSubmit,
    // validate
    validationSchema
  })

  // console.log('formik values', formik.values);
  // console.log('formik error', formik.errors);
  console.log('visited field', formik.touched);

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div className='form-control'>
          <label htmlFor='name'>Name</label>
          <input type='text' id='name' name='name' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.name} />
          {formik.touched.name && formik.errors.name && <div className='error'>{formik.errors.name}</div>}
        </div>
        <div className='form-control'>

          <label htmlFor='email'>E-mail</label>
          <input type='email' id='email' name='email' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email} />
          {formik.touched.email && formik.errors.email && <div className='error'>{formik.errors.email}</div>}
        </div>
        <div className='form-control'>
          <label htmlFor='channel'>Channel</label>
          <input type='text' id='channel' name='channel' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.channel} />
          {formik.touched.channel && formik.errors.channel && <div className='error'>{formik.errors.channel}</div>}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Form
