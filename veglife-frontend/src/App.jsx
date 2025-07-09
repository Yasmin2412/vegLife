import { Routes, Route, Link } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';
import AddRecipe from './components/AddRecipe';
import RecipeList from './components/RecipeList';
import SavedRecipes from './components/SavedRecipes';
import Navbar from "./components/Navbar";


function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/add" element={<AddRecipe />} />
        <Route path="/recipes" element={<RecipeList />} />
        <Route path="/saved" element={<SavedRecipes />} />
      </Routes>
    </div>
  );
}

export default App;
