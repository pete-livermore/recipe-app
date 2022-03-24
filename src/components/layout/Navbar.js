import React from 'react'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Logo from '../../assets/images/favicon.png'

const TopNav = () => (
  <Navbar bg="light" variant="light" expand="lg" className='py-2'>
    <Container>
      <Navbar.Brand href="/"><img src={Logo} alt='Recipe app' /></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="/browse">Browse all recipes</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
)
export default TopNav