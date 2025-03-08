import { useState , useEffect } from 'react';
function Main() {

    let [ ingredients , setIngredients ] = useState([]);

    function handleSubmit(event) {
        event.preventDefault();
        const form = event.target;
        const input = form.querySelector('input');
        const value = input.value;
        setIngredients(prev => [...prev , value]);
        input.value = '';
    }

    const ingredientsListItems = ingredients.map((ingredient , index) => (<li className='li-ingredients' key={index}>{ingredient}</li>));; 

    return (
        <>
            <main>
                <form
                    onSubmit={handleSubmit}
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