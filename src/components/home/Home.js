import React from 'react'
import Hero from './Hero'
import Container from 'react-bootstrap/Container'
import SuggestedRecipes from '../recipes/SuggestedRecipes'

const Home = () => {
  return (
    <Container className='mt-4'>
      <Hero />
      <SuggestedRecipes />
    </Container>
  )
}

export default Home