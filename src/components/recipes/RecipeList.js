import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import { Link } from 'react-router-dom'
import spinner from '../../assets/images/Spinner.gif'

const RecipeList = () => {
  const [searchResult, setSearchResult] = useState('')
  const [recipes, setRecipes] = useState([])
  const [categoryList, setCategoryList] = useState([])
  const [category, setCategory] = useState('')
  const [hasError, setHasError] = useState({
    error: false,
    message: ''
  })

  useEffect(() => {
    const getRecipes = async () => {
      try {
        const { data } = await axios.get('https://www.themealdb.com/api/json/v2/9973533/search.php?s=')
        setRecipes(data.meals)
      } catch (err) {
        setHasError({ error: true, message: err.message })
      }
    }
    getRecipes()
  }, [])

  useEffect(() => {
    if (recipes.length) {
      const categoryListItems = []
      recipes.forEach(meal => {
        categoryListItems.indexOf(meal.strCategory) === -1 && categoryListItems.push(meal.strCategory)
      })
      console.log(`category list ${categoryListItems}`)
      setCategoryList(categoryListItems)
    }
  }, [recipes])

  const handleSearch = (e) => {
    setSearchResult(e.target.value)
    console.log('search result=>', searchResult)
  }

  const handleChange = (e) => {
    setCategory(e.target.value)
  }

  const categoryFilter = () => {
    if (category === false || category === 'All') {
      return recipes
    }
    return recipes.filter(recipe => {
      return recipe.strCategory.includes(category)
    }
    )
  }
  const searchFilter = () => {
    if (searchResult === false) {
      return categoryFilter()
    }
    return categoryFilter().filter(recipe => {
      return recipe.strMeal.toLowerCase().includes(searchResult.toLowerCase())
    })
  }
  return (
    <>
      <Container className='mt-4'>
        <Row className='mt-5 mb-5 search-filter'>
          <Col sm={8} className='ps-0'>
            <h3>Search for recipes</h3>
            <p> Got a dish in mind? see if we have it by typing the name below! </p>
            <input onChange={handleSearch} type="text" placeholder="Search" aria-label="Search" />
          </Col>
          <Col sm={4}>
            <p>Filter by category</p>
            <select onChange={handleChange}>
              <option defaultValue>All</option>
              {categoryList.map((strCategory, i) => {
                return <option key={i} value={strCategory} name={strCategory}>{strCategory}</option>
              })}
            </select>
          </Col>
        </Row>
        <Row className='mt-5 justify-content-between mx-0'>
          {searchFilter().length ?
            (
              searchFilter().map((recipe, i) =>
                <Col key={i} id={i} className='mb-4'>
                  <Card style={{ width: '14rem' }}>
                    <Link to={`/recipes/${recipe.idMeal}`}>
                      <Card.Img variant="top" src={recipe.strMealThumb} alt={recipe.strMeal} />
                      <Card.Body>
                        <Card.Title>{recipe.strMeal}</Card.Title>
                      </Card.Body>
                    </Link>
                  </Card>
                </Col>
              )
            )
            : (hasError.error ? <h4 className='text-danger text-center'>{hasError.message}</h4> : <Container className='d-flex justify-content-center'><img src={spinner} alt={spinner} /> </Container>)
          }
        </Row>
      </Container>
    </>
  )
}

export default RecipeList