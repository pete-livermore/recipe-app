import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Home from './components/pages/home/Home'
import ShowRecipe from './components/recipes/ShowRecipe'
import RecipeList from './components/recipes/RecipeList'
import SignUp from './components/forms/SignUp'
import Login from './components/forms/Login'
import ShowCategory from './components/pages/categories/ShowCategory'

function App() {

  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/browse" element={<RecipeList />} />
          <Route path="/recipes/:idMeal" element={<ShowRecipe />} />
          <Route path="/categories/:categoryName" element={<ShowCategory />} />
          <Route path="/register" element={<SignUp />} />
          <Route path="/login" element={<Login />} />

        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
