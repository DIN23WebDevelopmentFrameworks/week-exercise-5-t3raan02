interface IRecipeTagProps {
    tagName: string;
    onSelectTag: (tagName: string) => void;
}

export default function RecipeTag({tagName, onSelectTag}: IRecipeTagProps){
    return (
        <button onClick={() => onSelectTag(tagName)}>
          {tagName}
        </button>
      );
}

