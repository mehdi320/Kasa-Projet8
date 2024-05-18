import React, { useState } from 'react';

const CollapsibleSection = () => {
    const [showText, setShowText] = useState(false);

    const handleButtonClick = () => {
        setShowText(!showText);
    };

    return (
        <div>
            <div>
                {/* Carrousel d'images */}
            </div>
            <button onClick={handleButtonClick}>Description</button>
            <button onClick={handleButtonClick}>Objets</button>
            {showText && (
                <div>
                    {/* Texte à afficher */}
                </div>
            )}
        </div>
    );
};

export default CollapsibleSection;