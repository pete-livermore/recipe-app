import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import RecipeCard from '../../recipes/RecipeCard'
import Spinner from 'react-bootstrap/Spinner'

const ShowCategory = () => {
  const { categoryName } = useParams()
  const [categoryRecipes, setCategoryRecipes] = useState([])
  const [hasError, setHasError] = useState({ error: false, message: '' })

  useEffect(() => {
    const getCategoryRecipes = async () => {
      try {
        const { data } = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`)
        setCategoryRecipes(data.meals)
      } catch (err) {
        setHasError({ error: true, message: 'Sorry, we encountered an error' })
      }
    }
    getCategoryRecipes()
  }, [categoryName])

  console.log(categoryRecipes)

  return (
    <Container className='mt-4'>
      <h2 className='mb-4'>{`Check out our ${categoryName} recipes`}</h2>
      <Row className='justify-content-between wrap align-items-stretch'>
        {categoryRecipes.length ? categoryRecipes.map(recipe => (
          <Col key={recipe.idMeal} id={recipe.idMeal} className='mb-4' sm={12} md={4} lg={3} xl={2}>
            <RecipeCard recipe={recipe} />
          </Col>
        ))
          : hasError.error ?
            <p>{hasError.message}</p>
            :
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
        }
      </Row>
    </Container>
  )
}

export default ShowCategory