import React, { useEffect, useRef, useState } from "react";
import ReactMarkdown from "react-markdown";
import "./Recipe.css"; // Import CSS for styling

export default function ClaudeRecipe({ recipe }) {
    const recipeRef = useRef(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (recipe) {
            // Scroll immediately when recipe updates
            recipeRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    
            // Show loading effect for 2 seconds
            setIsLoading(true);
            const timeout = setTimeout(() => {
                setIsLoading(false);
    
                // Scroll AGAIN after loading completes to ensure visibility
                setTimeout(() => {
                    recipeRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
                }, 550); // Small delay for smooth effect
    
            }, 2000); // 2 seconds loading effect
    
            return () => clearTimeout(timeout);
        }
    }, [recipe]);

    return (
        <section ref={recipeRef} className="claudeRecipe-section">
            <h2>Recipe</h2>

            {/* Show shimmer loader while waiting for recipe */}
            {isLoading ? (
                <div className="shimmer-loader"></div>
            ) : (
                <ReactMarkdown>{recipe}</ReactMarkdown>  
            )}
        </section>
    );
}
