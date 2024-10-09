// Importation des hooks React et autres dépendances nécessaires
import { useState } from 'react'; // Hook pour gérer l'état du composant
import PropTypes from 'prop-types'; // Pour la validation des types des props
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Pour utiliser les icônes
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons'; // Importation des icônes pour les boutons ouvrir/fermer
import '../sass/Collapselogement.scss'; // Importation du fichier de styles spécifiques à ce composant

// Définition du composant Collapse
const Collapse = ({ name, content, customClass = '' }) => {
  // Déclaration de l'état local pour savoir si le contenu est ouvert ou fermé
  const [isOpen, setIsOpen] = useState(false);

  // Fonction qui bascule l'état ouvert/fermé
  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    // Conteneur principal du composant, avec des classes dynamiques selon l'état ouvert/fermé et les styles personnalisés (customClass)
    <div className={`collapse-container ${customClass} ${isOpen ? 'open' : 'close'}`}>
      {/* Titre de la section repliable qui, quand on clique dessus, appelle la fonction toggleCollapse */}
      <div className="collapse-title" onClick={toggleCollapse}>
        {/* Nom de la section (reçu en tant que prop) */}
        <p>{name}</p>
        {/* Bouton pour afficher l'icône Chevron selon l'état ouvert ou fermé */}
        <button className={isOpen ? 'open' : 'close'}>
          {/* Affichage de l'icône FontAwesome Chevron (haut ou bas selon l'état) */}
          <FontAwesomeIcon icon={isOpen ? faChevronUp : faChevronDown} />
        </button>
      </div>

      {/* Contenu repliable, affiché ou masqué selon l'état isOpen */}
      <div className={`collapse-content ${isOpen ? 'open' : 'close'}`}>
        {/* Conteneur du texte du contenu */}
        <div className="collapse-content-text">
          {content} {/* Contenu textuel passé en tant que prop */}
        </div>
      </div>
    </div>
  );
};

// Validation des props pour s'assurer que le composant reçoit les bons types de données
Collapse.propTypes = {
  name: PropTypes.string.isRequired, // Le nom (ou titre) est requis et doit être une chaîne de caractères
  content: PropTypes.oneOfType([
    PropTypes.string,  // Le contenu peut être une chaîne de caractères
    PropTypes.node,    // Le contenu peut également être du JSX (éléments React)
  ]).isRequired, // Le contenu est requis mais peut être soit du texte, soit du JSX
  customClass: PropTypes.string, // La classe personnalisée est optionnelle et doit être une chaîne de caractères
};

// Exportation du composant Collapse pour pouvoir l'utiliser ailleurs dans l'application
export default Collapse;
