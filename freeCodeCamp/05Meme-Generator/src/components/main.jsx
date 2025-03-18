import { useState } from "react";
export default function Main() {

    const [meme, setMeme] = useState({
        topText: "aman radha",
        bottomText: "choudhary",
        imageUrl: "https://media.gettyimages.com/id/1186525906/photo/sunburned-boy.jpg?s=612x612&w=gi&k=20&c=h8vkrnOMc4-e_lAI9kHaPPLNLnYSl6zDUUJCMdOiMKw="
    });
    

    function handleChange(event) {
        // console.log(event.target.value);
        const { value, name } = event.currentTarget;
        if (name == 'topText') {
            setMeme(prevObject => (
                {
                    ...prevObject, topText: event.target.value
                }
            ))
        } else if (name == 'bottomText') {
            setMeme(prevObject => (
                {
                    ...prevObject, bottomText: event.target.value
                }
            ));
        }
    }
    

    return (
        <main>
            <div className="form">
                <div className="label">
                    <label>
                        Top Text<br />
                        <input
                            type="text"
                            value={meme.topText}
                            name="topText"
                            onChange={handleChange} />
                    </label>
                    <label>
                        Bottom Text<br />
                        <input type="text" value={meme.bottomText} name="bottomText"
                            onChange={handleChange} />
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