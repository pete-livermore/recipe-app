import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'

const RecipeCard = ({ recipe }) => (
  <Link to={`/recipes/${recipe.idMeal}`} className='text-decoration-none'>
    <Card className='h-100 w-100'>
      <Card.Img variant="top" className='w-100' src={recipe.strMealThumb} alt={recipe.strMeal} />
      <Card.Body>
        <Card.Title className='text-primary'>{recipe.strMeal}</Card.Title>
      </Card.Body>
    </Card>
  </Link>
)

export default RecipeCard