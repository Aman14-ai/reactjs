import { useState , useEffect } from 'react';
function Main() {

    let [ ingredients , setIngredients ] = useState([]);

    function handleSubmit(FormData) {
       const newIngredient = FormData.get("ingredient");
        setIngredients(prev => [...prev , newIngredient]);
        
    }

    const ingredientsListItems = ingredients.map((ingredient , index) => (<li className='li-ingredients' key={index}>{ingredient}</li>));; 

    return (
        <>
            <main>
                <form
                    action={handleSubmit}
                    className="add-ingredient-form">
                    <input
                        name="ingredient"
                        type="text"
                        placeholder="e.g. oregano"
                        aria-label="Add ingredients"
                    />
                    <button>Add ingredient</button>
                </form>
                <ul className='ul-ingredients'>
                    {ingredientsListItems}
                </ul>
            </main>

        </>
    )
}
export default Main;