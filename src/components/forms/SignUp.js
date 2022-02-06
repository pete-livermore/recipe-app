import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import FloatingLabel from 'react-bootstrap/FloatingLabel'

const SignUp = () => {

  return (
    <Container className='mt-4 bg-light p-5 w-50'>
      <h2>Sign up to the recipe app</h2>
      <p>Store your favourite recipes etc.</p>
      <Form className='mt-4'>
        <Form.Group className="mb-3" controlId="Email">
          <FloatingLabel
            controlId="floatingInput"
            label="Email address"
            className="mb-3"
          >
            <Form.Control type="email" placeholder="Enter email" />
          </FloatingLabel>

          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
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
        <Form.Group className="mb-3" controlId="PasswordConfirmation">
          <FloatingLabel
            controlId="floatingInput"
            label="Confirm password"
            className="mb-3"
          >
            <Form.Control type="password" placeholder="Password" />
          </FloatingLabel>
        </Form.Group>
        <Form.Group className="mb-3" controlId="Checkbox">
          <Form.Check type="checkbox" label="Sign up for latest recipe updates" />
        </Form.Group>
        <Button className="btn btn-primary">Submit</Button>
      </Form>
    </Container>

  )
}

export default SignUp