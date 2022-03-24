import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Stack from 'react-bootstrap/Stack'
import Container from 'react-bootstrap/Container'
import Spinner from 'react-bootstrap/Spinner'

const SuggestedRecipes = () => {
  const [categoryList, setCategoryList] = useState([])
  const [hasError, setHasError] = useState({ error: false, message: '' })

  useEffect(() => {
    const getCategories = async () => {
      try {
        const { data } = await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php')
        setCategoryList(data.categories)
      } catch (err) {
        setHasError({ error: true, message: err.message })
      }
    }
    getCategories()
  }, [])

  return (
    <Container className='mt-4'>
      <h4 className='mb-5'>Find a recipe by category</h4>
      <Stack direction="horizontal" className='flex-wrap justify-content-between' gap={2}>
        {categoryList.length ?
          categoryList.map(category => (
            <Col key={category.idCategory} sm={12} md={4} lg={3} xl={2}>
              <Link to={`/categories/${category.strCategory}`} className='text-decoration-none'>
                <Card className='mb-4'>
                  <Card.Img variant='top' src={category.strCategoryThumb} alt={category.strCategory} />
                  <Card.Body className='bg-light'>
                    <Card.Title className='text-dark text-center'>{category.strCategory}</Card.Title>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
          ))
          : (hasError.error ?
            <h4 className='text-danger text-center'>{hasError.message}</h4>
            : <Container className='d-flex justify-content-center'>
              <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            </Container>)
        }
      </Stack>
    </Container>
  )
}

export default SuggestedRecipes

