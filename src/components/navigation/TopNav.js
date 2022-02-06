import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'

const TopNav = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">Recipe app</Navbar.Brand>
        <Nav className="w-100 justify-content-between">
          <div>
            <Nav.Link href="/browse">Browse all recipes</Nav.Link>
          </div>
          <div className='d-flex'>
            <Nav.Link href="/login">Login</Nav.Link>
            <Nav.Link href="/register">Sign up</Nav.Link>
          </div>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default TopNav