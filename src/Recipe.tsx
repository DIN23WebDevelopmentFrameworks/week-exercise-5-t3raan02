import {IRecipe} from './IRecipe'

interface IRecipeProps{
  recipeData: IRecipe;
}


export default function Recipe({recipeData}: IRecipeProps) {
  return (
    <div className='recipe-box'>
      <h3>{recipeData.name}</h3>
      <p><strong>Ingredients:</strong>{recipeData.ingredients.join(', ')}</p>
      <p><strong>Instructions:</strong></p>
      <ul>
        {recipeData.instructions.map((instruction, index) => <li key={index}>{instruction}</li>)}
      </ul>
      <p><strong>Prep Time:</strong>{recipeData.prepTimeMinutes} minutes</p>
      <p><strong>Cook Time:</strong>{recipeData.cookTimeMinutes} minutes</p>
      <p><strong>Servings:</strong>{recipeData.servings}</p>

    </div>
  );
}