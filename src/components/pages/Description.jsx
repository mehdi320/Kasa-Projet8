import React from 'react';
import { useParams } from 'react-router-dom';
import Maisons from '../../data/maison.json'; 
import Error404 from './Error404';

const Description = () => {
  const { id } = useParams(); // Récupérez l'ID passé dans l'URL

  const maison = Maisons.find(maison => maison.id === parseInt(id)); // Trouvez l'élément correspondant à l'ID dans votre fichier JSON



  if (!maison) {
    // Si aucun élément ne correspond à l'ID, affichez un message d'erreur
    return (
        <Error404 />
    );
  }

    return (
        <div className="description">
        <h1>{maison.title}</h1>
        <img src={maison.cover} alt={maison.title} />
        <p>{maison.description}</p>
        </div>
    );
};

export default Description;