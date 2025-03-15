import { useState } from "react";
export default function Main() {
    
    const [meme , setMeme] = useState({
        topText : "aman radha",
        bottomText : "choudhary",
        imageUrl: "https://media.gettyimages.com/id/1186525906/photo/sunburned-boy.jpg?s=612x612&w=gi&k=20&c=h8vkrnOMc4-e_lAI9kHaPPLNLnYSl6zDUUJCMdOiMKw="
    });
    function handleChangeForTopText(event){
        //console.log(event.target.value);
        setMeme(prevObject => (
            {
                ...prevObject, topText:event.target.value
            }
        ))
    }

    function handleChangeForBottomText(event){
       // console.log(event.target.value);
        setMeme(prevObject => (
            {
                ...prevObject, bottomText:event.target.value
            }
        ))
    }
    
    return (
        <main>
            <div className="form">
                <div className="label">
                    <label>
                        Top Text<br />
                        <input
                         type="text" 
                         placeholder="one does not simply" 
                         name="topText"
                         onChange= {handleChangeForTopText} />
                    </label>
                    <label>
                        Bottom Text<br />
                        <input type="text" placeholder="walk into mordor" name="bottomText" 
                        onChange={handleChangeForBottomText}/>
                    </label>
                </div>
                <div className="form-button">
                    <button>Get a new meme image</button>
                </div>
            </div>
            <div className="meme">
                <img src={meme.imageUrl} />
                <span className="top">{meme.topText}</span>
                <span className="bottom">{meme.bottomText}</span>
            </div>
        </main>
    )
}