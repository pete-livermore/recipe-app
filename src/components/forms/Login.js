import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import FloatingLabel from 'react-bootstrap/FloatingLabel'

const Login = () => {

  return (
    <Container className='mt-4 bg-light p-5 w-50'>
      <h2>Log in to your account</h2>
      <p>Access your favourite recipes etc.</p>
      <Form className='mt-4'>
        <Form.Group className="mb-3" controlId="Email">
          <FloatingLabel
            controlId="floatingInput"
            label="Email address"
            className="mb-3"
          >
            <Form.Control type="email" placeholder="Enter email" />
          </FloatingLabel>
        </Form.Group>
        <Form.Group className="mb-3" controlId="Password">
          <FloatingLabel
            controlId="floatingInput"
            label="Password"
            className="mb-3"
          >
            <Form.Control type="password" placeholder="Password" />
          </FloatingLabel>
        </Form.Group>
        <Button className="btn btn-primary">Submit</Button>
      </Form>
    </Container>

  )
}

export default Login