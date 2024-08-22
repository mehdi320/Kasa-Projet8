import React from 'react';
import CollapseLogement from './CollapseLogement'; // Importez correctement le composant

const LogementPage = () => {
  const descriptionContent = "Voici le contenu de la description...";
  const equipementsContent = "Voici la liste des équipements...";

  return (
    <div className="logement-page">
      {/* Conteneur pour centrer les boutons de collapse à l'horizontale */}
      <div className="buttons-container">
        <CollapseLogement name="Description" content={descriptionContent} />
        <CollapseLogement name="Équipements" content={equipementsContent} />
      </div>
    </div>
  );
};

export default LogementPage;
