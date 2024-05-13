import React from 'react';

const LogementDetails = ({ logement }) => {
  return (
    <div>
      <h1>{logement.title}</h1>
      <img src={logement.cover} alt={logement.title} />
      <p>{logement.description}</p>
      {/* Ajoutez d'autres détails sur le logement ici */}
    </div>
  );
};

export default LogementDetails;