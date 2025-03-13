export default function IngredientsList(props) {
    const ingredientsListItems = props.ingredients.map((ingredient, index) => (
        <li className="li-ingredients" key={index}>
            {ingredient}
        </li>
    ));
    return (
        <section className="ingredients-list-section">
            <h2>Ingredients on hand:</h2>
            {props.ingredients.length < 3 && <p className='atleast-three-ingredients-paragraph'>Add atleast three ingredients.</p>}
            <ul className="ingredients-list" aria-live="polite">
                {ingredientsListItems}
            </ul>
            {props.ingredients.length >= 3 && <div className="get-recipe-container">
                <div>
                    <h3>Ready for a recipe?</h3>
                    <p>Generate a recipe from your list of ingredients.</p>
                </div>
                <button onClick={props.getRecipe} className="get-recipe-btn">{props.recipeShown === false ? "Get a Recipe" : "Hide"} </button>
            </div>}
        </section>
    )
}