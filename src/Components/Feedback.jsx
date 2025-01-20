import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

export default function Feedback() {
   
    const initialVal = {
        name: '',
        feedback: '',
      };
    
    const validateFields = Yup.object({
    name: Yup.string()
      .required('Name is required!')
      .min(2, 'Name should be at least have 2 characters!'),
    feedback: Yup.string()
      .required('Feedback is required!')
      .min(5, 'Feedback should be at least have 5 characters!'),
  });

  const handleOnSubmit = (val) => {
    console.log('Form is submitted : ', val);
  };

  return (
    <div className="container">
      <h2>Feedback Form</h2>
      <Formik
        initialValues={initialVal}
        validationSchema={validateFields}
        onSubmit={handleOnSubmit}
      >
        <Form>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name:</label>
            <Field type="text" className="form-control" id="name" name="name" placeholder="Enter your Name here"/>
            <ErrorMessage name="name" component="div" className="text-danger" />
          </div>

          <div className="mb-3">
            <label htmlFor="feedback" className="form-label">Feedback:</label>
            <Field as="textarea" className="form-control" id="feedback" name="feedback" rows="3" placeholder="Enter your feedback" />
            <ErrorMessage name="feedback" component="div" className="text-danger" />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </Form>
      </Formik>
    </div>
  );
}
