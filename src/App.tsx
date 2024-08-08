import React, { useEffect, useState } from 'react';
import './App.css';
import Recipe from './compents/Recipe';

interface RecipeProps {
  title: string;
  calories: number;
  image: string;
  ingredients: any[];
}

const App: React.FC = () => {
  const APP_ID = '99944edd';
  const APP_KEY = '0999c4559905410f6383ba0988ada532';

  const [recipes, setRecipes] = useState<RecipeProps[]>([]);
  const [search, setSearch] = useState<string>('');
  const [query, setQuery] = useState<string>('Chicken');

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  }

  const updateSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  }

  const getSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }

  return(
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input 
          className ="search-bar" 
          type="text" 
          value={search} 
         onChange={updateSearch} 
        />
        <button className ="search-button" type="submit">Search</button>
      </form>
      <div className="recipes">
        {recipes.map((recipe: RecipeProps) => (
          <Recipe 
            key={recipe.title}
            title={recipe.title} 
            calories={recipe.calories}
            image={recipe.image}
            ingredients={recipe.ingredients}
          />
        ))}
      </div>
    </div>
  );
};

export default App;