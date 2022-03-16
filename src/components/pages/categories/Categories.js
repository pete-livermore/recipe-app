import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Stack from 'react-bootstrap/Stack'
import Container from 'react-bootstrap/Container'

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

  console.log(categoryList)

  return (
    <Container className='mt-5'>
      <h4 className='mb-3'>Recipe categories</h4>
      <Stack direction="horizontal" className='flex-wrap justify-content-between'>
        {categoryList.map(category => (
          <Col key={category.idCategory}>
            <Link to={`/categories/${category.strCategory}`} className='text-decoration-none'>
              <Card style={{ width: '18rem' }} className='mb-4'>
                <Card.Img variant='top' src={category.strCategoryThumb} alt={category.strCategory} />
                <Card.Body>

                  <Card.Title>{category.strCategory}</Card.Title>
                </Card.Body>
              </Card>
            </Link>
          </Col>
        ))
        }
      </Stack>
    </Container>
  )
}

export default SuggestedRecipes

