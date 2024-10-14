import {useState, useEffect} from 'react';
import RecipeTagList from './RecipeTagList'
import RecipeList from './RecipeList'
import { IRecipe } from './IRecipe';


const App = () => {
  const [tags, setTags] = useState<string[]>([]);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [recipes, setRecipes] = useState<IRecipe[]>([]);

  useEffect(() => {
    fetch('https://dummyjson.com/recipes/tags')
      .then(response => response.json())
      .then(data => setTags(data))
  }, []);

  useEffect(() => {
    if (selectedTag) {
      fetch(`https://dummyjson.com/recipes/tag/${selectedTag}`)
        .then(response => response.json())
        .then(data => setRecipes(data.recipes))
    }
  }, [selectedTag]);

  return (
    <div>
        <h1>ACME Recipe O'Master</h1>
        <p>Choose a tag bellow</p>
        {selectedTag === null ? (
        <RecipeTagList tagList={tags} onSelectTag={setSelectedTag} />
      ) : (
        <div>
          <button onClick={() => setSelectedTag(null)}>Back to Tags</button>
          <RecipeList recipes={recipes} />
        </div>
      )}
    </div>
  );
};


export default App;
