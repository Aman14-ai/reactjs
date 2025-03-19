import { useState, useEffect } from "react";
 // Import the CSS file for styling

export default function Main() {
    const [meme, setMeme] = useState({
        topText: "aman radha",
        bottomText: "choudhary",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmqU26fdZx4o5Tb5M8jyi-j24qHLkyUHhPbA&s",
    });
    const [imageNumber, setImageNumber] = useState(4);
    const [allMemes, setAllMemes] = useState([]);
    const [loading, setLoading] = useState(false); // State to manage loading spinner

    useEffect(() => {
        // Fetch memes data when the component mounts
        fetch('https://api.imgflip.com/get_memes')
            .then(res => res.json())
            .then(data => setAllMemes(data.data.memes))
            .catch(error => console.error("Error fetching memes:", error));
    }, []);

    async function handleClick() {
        if (allMemes.length === 0) return; // If no memes are available, do nothing

        setLoading(true); // Show spinner

        const random = Math.round(Math.random() * 100);
        console.log(random);
        setImageNumber(random);

        try {
            // Simulate a delay to mimic network latency (optional)
            await new Promise(resolve => setTimeout(resolve, 1000));

            // Update the meme image URL
            setMeme(prev => ({
                ...prev,
                imageUrl: allMemes[random].url,
            }));
        } catch (error) {
            console.error("Error fetching meme:", error);
        } finally {
            setLoading(false); // Hide spinner after the image is set
        }
    }

    function handleChange(event) {
        const { value, name } = event.currentTarget;
        if (name === 'topText') {
            setMeme(prevObject => ({
                ...prevObject,
                topText: event.target.value,
            }));
        } else if (name === 'bottomText') {
            setMeme(prevObject => ({
                ...prevObject,
                bottomText: event.target.value,
            }));
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
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        Bottom Text<br />
                        <input
                            type="text"
                            value={meme.bottomText}
                            name="bottomText"
                            onChange={handleChange}
                        />
                    </label>
                </div>
                <div onClick={handleClick} className="form-button">
                    <button disabled={loading || allMemes.length === 0}>
                        {loading ? "Loading..." : "Get a new meme image"}
                    </button>
                </div>
            </div>
            <div className="meme">
                {loading ? (
                    <div className="spinner"></div> // Show spinner while loading
                ) : (
                    <>
                        <img src={meme.imageUrl} alt="meme" />
                        <span className="top">{meme.topText}</span>
                        <span className="bottom">{meme.bottomText}</span>
                    </>
                )}
            </div>
        </main>
    );
}