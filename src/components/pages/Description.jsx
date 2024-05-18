import React from 'react';
import { useParams } from 'react-router-dom';
import Maisons from '../../data/maison.json'; 
import Error404 from './Error404';
import Thumb from '../Thumb';

const Description = () => {
  const { id } = useParams(); // Récupérez l'ID passé dans l'URL
  console.log(id); // Vérifiez si l'ID est correctement récupéré

  const maison = Maisons.find(maison => maison.id === id); // Trouvez l'élément correspondant à l'ID dans votre fichier JSON
  console.log(maison); // Vérifiez si l'élément est correctement récupéré


  if (!maison) {
    // Si aucun élément ne correspond à l'ID, affichez un message d'erreur
    return (
        <Error404 />
    );
  }

  return (
    <div className="description">
      <h1>ID: {id}</h1> {/* Affiche l'ID pour vérification */}
      {maison && (
        <>
          <h1>{maison.title}</h1>
          <img src={maison.cover} alt={maison.title} />
          <p>{maison.description}</p>
        </>
      )}
    </div>
  );
};

export default Description;