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
          <Col className='about-text rounded p-4 ml-4 d-flex flex-column justify-content-evenly text-center'>
            <h3 className='mb-4'>Welcome to the Recipe App!</h3>
            <p>Looking for inspiration or got a dish in mind? We've got a huge collection of recipes that will keep your tastebuds happy for months.</p>
            <p class='fw-bold'>Simply search for a recipe or select a category below to find something tasty!</p>
            <Container className='text-center'>
              <Link to='/browse'>
                <Button className='home-search-button'>Start your search</Button>
              </Link>
            </Container>
          </Col>
        </Row>
        <hr className='mt-4' />
      </Container>
      <Categories />
    </>
  )
}

export default Home