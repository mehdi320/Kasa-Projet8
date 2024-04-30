import React from 'react';
import Maison from '../../json.js'; // Remonter de deux niveaux pour accéder à la racine du projet

function Thumb() {
    return (
        <div className="thumb">
            {Maison.map((maison) => (
                <div className="banner" key={maison.id}>
                    <img src={maison.cover} alt="maison" />
                    <h3 className="h3">{maison.title}</h3>
                </div>
            ))}
        </div>
    );
}

export default Thumb;