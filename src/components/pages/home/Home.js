import React from 'react'
import { Link } from 'react-router-dom'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Hero from '../../layout/Hero'
import Categories from '../categories/Categories'
import Container from 'react-bootstrap/Container'


const Home = () => {
  return (
    <>
      <Container className='mt-4'>
        <Row className='justify-content-between'>
          <Col lg={8} className='rounded mr-6'>
            <Hero />
          </Col>
          <div className='about-text rounded p-4 ml-4 d-flex flex-column justify-content-evenly'>
            <h3 className='mb-4'>Welcome to the Recipe App!</h3>
            <p>Looking for inspiration or got a dish in mind? We've got a huge collection of recipes that will keep your tastebuds happy for months.</p>
            <h6>Simply search for a recipe or select a category below to find something tasty! </h6>
            <Container className='text-center'>
              <Link to='/browse'>
                <Button variant="primary">Start your search</Button>
              </Link>
            </Container>
          </div>
        </Row>
      </Container>
      <Categories />
    </>
  )
}

export default Home