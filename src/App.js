import { Routes, Route, Link } from 'react-router-dom'
import './App.css'
import TopNav from './components/navigation/TopNav'
import Home from './components/home/Home'
import ShowRecipe from './components/recipes/ShowRecipe'
import RecipeList from './components/recipes/RecipeList'
import SignUp from './components/forms/SignUp'
import Login from './components/forms/Login'

function App() {
  return (
    <div className="App">
      <TopNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/browse" element={<RecipeList />} />
        <Route path="/recipes/:idMeal" element={<ShowRecipe />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>

    </div>
  )
}

export default App;
