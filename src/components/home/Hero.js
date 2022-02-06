import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import heroImage from '../../assets/images/hero_image.jpg'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <>
      <Row>
        <Col lg={8} className='image-container'>
          <img src={heroImage} alt="recipe" className='w-100' />
          <div className='overlay-text'>
            <h4>Pick your delight</h4>
            <p>Ingredients, instructions and videos to help you cook up a treat.</p>
          </div>
        </Col>
        <Col lg={4}><h1>Welcome to the recipe app!</h1>
          <Link to='/browse'>
            <Button>Browse all recipes</Button>
          </Link>
        </Col>
      </Row>
    </>
  )
}

export default Hero