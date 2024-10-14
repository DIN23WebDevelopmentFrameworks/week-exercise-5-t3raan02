import { IRecipe } from './IRecipe';
import Recipe from './Recipe';

interface IRecipeListProps{
    recipes: IRecipe[];
}

export default function RecipeList({recipes} : IRecipeListProps){
    return (
        <div>
          <h2>Recipes</h2>
          <div>
            {recipes.map((recipe) => (<Recipe key={recipe.id} recipeData={recipe} />))}
          </div>
        </div>
      );   
}

