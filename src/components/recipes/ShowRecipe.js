import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Container from 'react-bootstrap/Container'
import Stack from 'react-bootstrap/Stack'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import YoutubeEmbed from '../subcomponents/VideoEmbed'
import Spinner from 'react-bootstrap/Spinner'

const ShowRecipe = () => {
  const { idMeal } = useParams()
  const [recipe, setRecipe] = useState({})
  const [hasError, setHasError] = useState({ error: false, message: '' })

  useEffect(() => {
    const getRecipe = async () => {
      try {
        const { data } = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`)
        setRecipe(data.meals[0])
      } catch (err) {
        setHasError({ error: true, message: 'Sorry, we encountered an error' })
      }
    }
    getRecipe()
  }, [idMeal])

  const Ingredients = () => {
    const filteredIngredients = (Object.entries(recipe).filter(arr => arr[0].includes('Ingredient')).filter(arr => arr[1]))
    const filteredMeasures = (Object.entries(recipe).filter(arr => arr[0].includes('Measure')).filter(arr => arr[1]))
    const mappedMeasures = filteredMeasures.map(arr => {
      return arr[1]
    })
    return (
      <>
        <h4>Ingredients</h4>
        <ul>
          {filteredIngredients && filteredIngredients.map((ingredient, i) => {
            return <li key={i}>{ingredient[1]} - {mappedMeasures[i]}</li>
          })}
        </ul>
      </>
    )
  }


  const CategoryTags = () => {
    if (recipe.strTags) {
      const categoryArr = recipe.strTags.split(',')
      return (
        categoryArr.map((category, i) => <div key={i} className='p-1 bg-primary text-light rounded'>{category}</div>)
      )
    }
    else return <p>None yet</p>
  }

  return (
    <Container>
      {Object.keys(recipe).length ?
        <>
          <h2>{recipe.strMeal}</h2>
          <hr />
          <Row>
            <Col lg={4}>
              <img src={recipe.strMealThumb} alt={recipe.strMeal} className='w-100' />
            </Col>
            <Col lg={8}>
              <Ingredients />
            </Col>
          </Row>
          <p className='mt-3'>Tags:</p>
          <Stack direction='horizontal' gap={2}>
            <CategoryTags />
          </Stack>
          <Row className='mt-4'>
            <hr />
            <Col lg={7} xl={8} className='bg-light p-3 rounded'>
              <h4>Instructions:</h4>
              <ol>
                {recipe.strInstructions.split('.').splice(0, recipe.strInstructions.split('.').length - 1).map((str, i) => {
                  return <li key={i} style={{ fontSize: '15px' }}>{str}</li>
                })}
              </ol>
            </Col>
            <Col sm={12} lg={5} xl={4}><YoutubeEmbed embedURL={recipe.strYoutube.replace('watch?v=', 'embed/')} /></Col>
          </Row>
        </>
        :
        hasError.error ?
          <p>{hasError.message}</p>
          :
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
      }
    </Container>
  )
}

export default ShowRecipe