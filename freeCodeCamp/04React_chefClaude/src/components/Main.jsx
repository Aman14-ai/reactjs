import { useState, useEffect } from 'react';

function Main() {
    const [ingredients, setIngredients] = useState([]);
    const [isLoading, setIsLoading] = useState(false); // Loading state

    function handleSubmit(FormData) {
        const newIngredient = FormData.get("ingredient");
        setIngredients((prev) => [...prev, newIngredient]);
    }

    const ingredientsListItems = ingredients.map((ingredient, index) => (
        <li className="li-ingredients" key={index}>
            {ingredient}
        </li>
    ));

    // Simulate loading effect when ingredients are added
    useEffect(() => {
        if (ingredients.length > 0) {
            setIsLoading(true); // Show loading state
            const timer = setTimeout(() => {
                setIsLoading(false); // Hide loading state after 2 seconds
            }, 350);

            return () => clearTimeout(timer); // Cleanup timer
        }
    }, [ingredients]);

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
                            <section>
                                <h2>Ingredients on hand:</h2>
                                <ul className="ingredients-list" aria-live="polite">
                                    {ingredientsListItems}
                                </ul>
                                {ingredients.length >= 3 && <div className="get-recipe-container">
                                    <div>
                                        <h3>Ready for a recipe?</h3>
                                        <p>Generate a recipe from your list of ingredients.</p>
                                    </div>
                                    <button className="get-recipe-btn">Get a recipe</button>
                                </div>}
                            </section>
                        )}
                    </>
                )}
            </main>
        </>
    );
}

export default Main;