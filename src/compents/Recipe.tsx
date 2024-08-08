import React from 'react';

interface RecipeProps {
  title: string;
  calories: number;
  image: string;
  ingredients: { text: string }[];
}

const Recipe: React.FC<RecipeProps> = ({ title, calories, image, ingredients }) => {
  return (
    <div>
      <h1 className="recipe">{title}</h1>
      <ol>
        {ingredients.map((ingredient) => (
          <li key={ingredient.text}>{ingredient.text}</li>
        ))}
      </ol>
      <p>{calories}</p>
      <img src={image} alt="" />
    </div>
  );
};

export default Recipe;