import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css';

function FormsAppearance() {

    function handleSubmit(formData) {
        //event.preventDefault()
        //const formEl = event.currentTarget
        //const formData = new FormData(formEl);
        // const email = formData.get("email");
        // //console.log("Email: " + email);
        // //console.log("Password: " + formData.get("password"));
        // const radioValue = formData.get("employee");
        // //console.log(radioValue);
        // const checkboxValue = formData.getAll('checkbox');
        // //console.log(checkboxValue);
        // const selectValue = formData.get("favorite-color");
        // console.log(selectValue);
        const data = Object.fromEntries(formData);
        const checkbox = formData.getAll('checkbox');
        const allData = {
            ...data,checkbox
        }
        console.log(allData);
        
    }

    return (
        <section>
            <h1>Signup form</h1>
             <form /*onSubmit={handleSubmit}*/ action={handleSubmit}> 
                <label>Email:
                    <input className='main' type='email' defaultValue="24ce01006@iitbbs.ac.in" name='email' placeholder='Email' required />
                </label>
                <br />
                <label>Password:
                    <input className='main' defaultValue="123456" type='password' name='password' placeholder='Password' required />
                </label>
                <fieldset>
                    <legend>Empolyee Details</legend>
                    <div className="radio">
                        <label >Full - day
                            <input value="full-day" name='employee' type="radio" />
                        </label><br />
                        <label name='employee' >Part-time
                            <input value='part-time' name='employee' type="radio" />
                        </label><br />
                        <label value="permanent" name='employee' htmlFor="full-day">permanent
                            <input value="permanent" name='employee' id='full-day' type="radio" />
                        </label>
                    </div>
                </fieldset>


                <fieldset>
                    <legend>Empolyee Details</legend>
                    <div className="radio">
                        <label >Full - day
                            <input value="full-day" name='checkbox' type="checkbox" />
                        </label><br />
                        <label name='employee' >Part-time
                            <input defaultChecked={true} value='part-time' name='checkbox' type="checkbox" />
                        </label><br />
                        <label value="permanent" name='employee' htmlFor="full-day">permanent
                            <input value="permanent" name='checkbox' type="checkbox" />
                        </label>
                    </div>
                </fieldset>
                <div className="select">
                    <label htmlFor="favorite-color">What is your favorite color: </label>
                    <select  defaultValue="" name='favorite-color' id='favorite-color'>
                        <option disabled value="">Choose color--</option>
                        <option value="blue">Blue</option>
                        <option value="red">Red</option>
                        <option value="yellow">Yellow</option>
                        <option value="pink">Pink</option>
                        <option value="green">Green</option>
                    </select>
                </div>
                <button>Submit</button>
            </form>
        </section>
    )
}

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <FormsAppearance />
    </StrictMode>,
)
