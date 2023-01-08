import React from 'react';
// import { Button, Form, Row, Col } from 'react-bootstrap'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import * as yup from 'yup';
import { Formik } from 'formik';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';


const Contact = () => {

const schema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string()
  .email("*Must be a valid email address")
  .max(100, "*Email must be less than 100 characters")
  .required("*Email is required"),
  username: yup.string().required(),
  subject: yup.string().required(),
  message: yup.string().required(),
  zip: yup.string().required(),
  terms: yup.bool().required().oneOf([true], 'Terms must be accepted'),
});

console.log(schema)

return (
    <Formik
      validationSchema={schema}
      onSubmit={console.log}
      initialValues={{
        name: '',
        email: '',
        username: '',
        subject: '',
        message: '',
        zip: '',
        terms: false,
      }}
    >

      
      {({
        handleSubmit,
        handleChange,
        handleBlur,
        values,
        touched,
        isValid,
        errors,
      }) => (
    <div id='contact' className='contact-container'>
        <Form  action="https://getform.io/f/dadf1212-cb4d-4634-87f8-aef5e61d7197" method="POST" noValidate 
        
        // onSubmit={handleSubmit} 
        >
            {/* <form action="https://getform.io/f/dadf1212-cb4d-4634-87f8-aef5e61d7197" method="POST"> */}
          <Row className="mb-3">
            <Form.Group style={{width: "250px"}} as={Col} md="4" controlId="validationFormik01">
            <Form.Label>Name</Form.Label>
           <Form.Control 
                type="name"
                placeholder="Enter your name"
                name='name'
                value={values.name}
                onChange={handleChange}
                isInvalid={!!errors.name}
              />
              <Form.Control.Feedback type="invalid">
                {errors.name}</Form.Control.Feedback>
            </Form.Group>
            <Form.Group  style={{width: "250px"}} as={Col} md="4" controlId="validationFormik02">
            <Form.Label>Email address</Form.Label>
            <Form.Control 
                type="email" 
                placeholder="Enter email" 
                name='email'
                value={values.email}
                onChange={handleChange}
                isInvalid={!!errors.email}
              />

              <Form.Control.Feedback type="invalid"> {errors.email}</Form.Control.Feedback>
            </Form.Group>
            </Row>
      
            <FloatingLabel
              controlId="validationFormik03"
              label="Subject"
              className="mb-3"
      >
              <Form.Control 
              as="textarea" 
              placeholder="Subject" 
              name='subject' 
                value={values.subject}
                onChange={handleChange}
                isInvalid={!!errors.subject}
              />

              <Form.Control.Feedback type="invalid">
                {errors.subject}
              </Form.Control.Feedback>
            </FloatingLabel>

            <FloatingLabel controlId="validationFormik04" label="Message">
            <Form.Control
                as="textarea"
                placeholder="Write a message here"
                style={{ height: '100px' }}
                name='message'
                value={values.message}
                onChange={handleChange}
                isInvalid={!!errors.message}
              />
              <Form.Control.Feedback type="invalid">
                {errors.message}
              </Form.Control.Feedback>
            </FloatingLabel>

          <Form.Group className="mb-3">
            <Form.Check
              required
              name="terms"
              label="Agree to terms and conditions"
              onChange={handleChange}
              isInvalid={!!errors.terms}
              feedback={errors.terms}
              feedbackType="invalid"
              id="validationFormik0"
            />
          </Form.Group>
          {
           values.name !== "" && values.email !== "" && values.subject !== "" && values.message !== "" && <Button type="submit">Submit form</Button> 
          }
          {/* <Button type="submit">Submit form</Button> */}
          {/* </form> */}
        </Form>
        </div>
      )}
    </Formik>
  );
}

export default Contact;

// const schema = yup.object().shape({
//     name: yup.string().required(),
//     email: yup.string().required(),
//     subject: yup.string().required(),
//     message: yup.string().required(),
// })
// return (
//     <div className='contact-container'>
//         <Formik
//          validationSchema={schema}
//          onSubmit={console.log}
//          initialValues={{
//             name: "",
//             email: "",
//             subject: "",
//             message: ""
//         }}
//         >
//         <h3>CONTACT</h3>
//         {({
//         handleSubmit,
//         handleChange,
//         handleBlur,
//         values,
//         touched,
//         isValid,
//         errors,
//       }) => (
//         <Form className='form-container' action="https://getform.io/f/dadf1212-cb4d-4634-87f8-aef5e61d7197" method="POST">
//         <Row className="mb-3"> 
//       <Form.Group as={Col} className="mb-3" controlId="validationFormik01">
//         <Form.Label>Name</Form.Label>
//         <Form.Control type="name" 
//         placeholder="Name" 
//         name='name'
//         value={values.name}
//         onChange={handleChange}
//         isValid={touched.name && !errors.name}/>
//         <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
//       </Form.Group>

//       <Form.Group as={Col} className="mb-3" controlId="validationFormik02">
//         <Form.Label>Email address</Form.Label>
//         <Form.Control 
//         type="email" 
//         placeholder="Enter email" 
//         name='email'
//         value={values.email}
//         onChange={handleChange}
//         isValid={touched.email && !errors.email}
//         />
//         <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
//         <Form.Text className="text-muted">
//           We'll never share your email with anyone else.
//         </Form.Text>
//       </Form.Group>
//       </Row>


//       <FloatingLabel
//         controlId="validationFormik03"
//         label="Subject"
//         className="mb-3"
//       >
//         <Form.Control 
//         as="textarea" 
//         placeholder="" 
//         name='subject' 
//         value={values.subject}
//         onChange={handleChange}
//         isValid={touched.subject && !errors.subject}
//         />
//          <Form.Control.Feedback type="invalid">
//                 {errors.subject}
//               </Form.Control.Feedback>
//       </FloatingLabel>
//       <FloatingLabel controlId="validationFormik04" label="Message">
//         <Form.Control
//           as="textarea"
//           placeholder="Write a message here"
//           style={{ height: '100px' }}
//           name='message'
//           value={values.subject}
//           onChange={handleChange}
//           isValid={touched.message && !errors.message}
//         />
//         <Form.Control.Feedback type="invalid">
//                 {errors.message}
//               </Form.Control.Feedback>
//       </FloatingLabel>
//       <Button variant="primary" type="submit">
//         Submit
//       </Button>
//     </Form>
//        )}
//     </Formik>
//     </div>
//   )