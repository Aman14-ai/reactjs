import { useState, useEffect } from 'react';
import IngredientsList from '../claude component/IngredientsList';
import ClaudeRecipe from '../claude component/ClaudeRecipe';
import { getRecipeFromMistral } from '../ai';

function Main() {
    const [ingredients, setIngredients] = useState([]);
    const [isLoading, setIsLoading] = useState(false); // Loading state

    function handleSubmit(FormData) {
        const newIngredient = FormData.get("ingredient");
        setIngredients((prev) => [...prev, newIngredient]);
    }

    // Simulate loading effect when ingredients are added
    useEffect(() => {
        if (ingredients.length > 0) {
            setIsLoading(true); // Show loading state
            const timer = setTimeout(() => {
                setIsLoading(false); // Hide loading state after 2 seconds
            }, 850);

            return () => clearTimeout(timer); // Cleanup timer
        }
    }, [ingredients]);

    const [recipeShown, setRecipeShown] = useState(false);
    const [recipe , setRecipe] = useState("");

    async function getRecipe(){
        setRecipeShown(prev => !prev);
        const responseGenerated = await getRecipeFromMistral(ingredients);
        setRecipe(responseGenerated);
    }


    return (
        <>
            <main>
                <form action={handleSubmit} className="add-ingredient-form">
                    <input
                        required
                        name="ingredient"
                        type="text"
                        placeholder="e.g. oregano"
                        aria-label="Add ingredients"
                    />
                    <button>Add ingredient</button>
                </form>

                {ingredients.length > 0 && (
                    <>
                        {isLoading ? (
                            // Show loading spinner or skeleton loader
                            <div className="loading-spinner">
                                <div className="spinner"></div>
                                <p>Loading your ingredients...</p>
                            </div>
                        ) : (
                            // Render the actual content
                           <IngredientsList ingredients={ingredients} getRecipe={getRecipe} recipeShown={recipeShown}  />

                        )}
                    </>
                )}
                {recipeShown && <ClaudeRecipe recipe={recipe}/>}
                
            </main>
        </>
    );
}

export default Main;