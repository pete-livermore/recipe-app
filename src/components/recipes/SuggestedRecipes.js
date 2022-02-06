import React from 'react'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import recipeImage from '../../assets/images/suggested_recipe.jpg'

const SuggestedRecipes = () => {
  return (
    <>
      <h4>Struggling for inspiration? Check out our recipe suggestions below</h4>
      <Row>
        <Col>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={recipeImage} alt="recipe-name" />
            <Card.Body>
              <Card.Title>Recipe name</Card.Title>
              <Card.Text>
                Struggling for inspiration? Check out our recipe suggestions below
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={recipeImage} alt="recipe-name" />
            <Card.Body>
              <Card.Title>Recipe name</Card.Title>
              <Card.Text>
                Struggling for inspiration? Check out our recipe suggestions below
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={recipeImage} alt="recipe-name" />
            <Card.Body>
              <Card.Title>Recipe name</Card.Title>
              <Card.Text>
                Struggling for inspiration? Check out our recipe suggestions below
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  )
}

export default SuggestedRecipes

