import { useState, useEffect } from 'react';
function Main() {

    let [ingredients, setIngredients] = useState([]);

    function handleSubmit(FormData) {
        const newIngredient = FormData.get("ingredient");
        setIngredients(prev => [...prev, newIngredient]);

    }

    const ingredientsListItems = ingredients.map((ingredient, index) => (<li className='li-ingredients' key={index}>{ingredient}</li>));;

    return (
        <>
            <main>
                <form
                    action={handleSubmit}
                    className="add-ingredient-form">
                    <input
                        required
                        name="ingredient"
                        type="text"
                        placeholder="e.g. oregano"
                        aria-label="Add ingredients"
                    />
                    <button>Add ingredient</button>
                </form>
                {ingredients.length > 0 &&<section>
                    <h2>Ingredients on hand:</h2>
                    <ul className="ingredients-list" aria-live="polite">
                        {ingredientsListItems}
                    </ul>
                    <div className="get-recipe-container">
                        <div>
                            <h3>Ready for a recipe?</h3>
                            <p>Generate a recipe from your list of ingredients.</p>
                        </div>
                        <button className="get-recipe-btn">Get a recipe</button>
                    </div>
                </section>}
            </main>

        </>
    )
}
export default Main;