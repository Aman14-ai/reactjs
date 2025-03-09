import React, { useState } from 'react';
import './index.css'; // Import the CSS file

const JokeComponent = (props) => {
    const [isShown, setIsShown] = useState(false);

    const toggleShown = () => {
        setIsShown(!isShown);
    };

    return (
        <div>
            <h1 className="setup-heading">Setup: {props.setup}</h1>
            {isShown && (
                <p className="punchline-text">
                    <strong>Punchline:</strong> {props.punchline}
                </p>
            )}
            <button className="toggle-button" onClick={toggleShown}>
                {isShown && 'Hide' || 'Show'}
            </button>
            <hr className="divider" />
        </div>
    );
};

export default JokeComponent;