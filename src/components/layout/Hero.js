import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Carousel from 'react-bootstrap/Carousel'
import axios from 'axios'

const Hero = () => {
  const [randomRecipeOne, setRandomRecipeOne] = useState({})
  const [randomRecipeTwo, setRandomRecipeTwo] = useState({})
  const [hasError, setHasError] = useState({ error: true, message: '' })

  useEffect(() => {
    const getRandomRecipeOne = async () => {
      try {
        const { data } = await axios.get('https://www.themealdb.com/api/json/v1/1/random.php')
        setRandomRecipeOne(data.meals[0])
      } catch (error) {
        setHasError({ error: true, message: 'Sorry, there was an error' })
      }
    }
    getRandomRecipeOne()
  }, [])

  useEffect(() => {
    const getRandomRecipeTwo = async () => {
      try {
        const { data } = await axios.get('https://www.themealdb.com/api/json/v1/1/random.php')
        setRandomRecipeTwo(data.meals[0])
      } catch (error) {
        setHasError({ error: true, message: 'Sorry, there was an error' })
      }
    }
    getRandomRecipeTwo()
  }, [])

  return (
    <Carousel className='w-100 rounded' >
      <Carousel.Item style={{ height: '460px' }} className='rounded'>
        <Link to={`/recipes/${randomRecipeOne.idMeal}`} className='text-decoration-none'>
          <img
            className="img-fluid w-100 rounded"
            src={randomRecipeOne.strMealThumb}
            alt={randomRecipeOne.strMeal}
          />
          <Carousel.Caption className='overlay-text'>
            <h3>{randomRecipeOne.strMeal}</h3>
            <p>{`Try this delicious ${randomRecipeOne.strArea} dish`}</p>
          </Carousel.Caption>
        </Link>
      </Carousel.Item>
      <Carousel.Item style={{ height: '460px' }}>
        <Link to={`/recipes/${randomRecipeTwo.idMeal}`} className='text-decoration-none'>
          <img
            className="img-fluid w-100"
            src={randomRecipeTwo.strMealThumb}
            alt={randomRecipeTwo.strMeal}
          />
          <Carousel.Caption className='overlay-text'>
            <h3>{randomRecipeTwo.strMeal}</h3>
            <p>{`Try this delicious ${randomRecipeTwo.strArea} dish`}</p>
          </Carousel.Caption>
        </Link>
      </Carousel.Item>
    </Carousel>
  )
}

export default Hero