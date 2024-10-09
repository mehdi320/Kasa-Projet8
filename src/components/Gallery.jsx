/**
 * Composant Carrousel - Composant de carrousel avec une liste d'images.
 * @param {Object} props - Les propriétés du Carrousel.
 * @param {Array} props.images - La liste d'images du Carrousel.
 * @returns {JSX.Element} Le composant Carrousel.
 */

// Importation de la fonction useState pour gérer l'état local du composant.
import { useState } from 'react';

// Importation des icônes depuis FontAwesome pour les flèches de navigation.
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

// Importation du fichier SCSS pour les styles du carrousel (modifier le chemin si nécessaire selon l'organisation de ton projet).
import '../sass/gallery.scss';

import PropTypes from 'prop-types';

// Définition du composant Carrousel, qui prend en entrée un tableau d'images.
const Carrousel = ({ images }) => {
  
  // Création de l'état currentSlide qui stocke l'index de la diapositive courante, initialisé à 0.
  const [currentSlide, setCurrentSlide] = useState(0);

  // Fonction pour passer à la diapositive suivante. Si on est à la dernière, on revient à la première.
  const nextSlide = () => {
    setCurrentSlide((previousSlide) =>
      previousSlide === images.length - 1 ? 0 : previousSlide + 1
    );
  };

  // Fonction pour revenir à la diapositive précédente. Si on est à la première, on revient à la dernière.
  const previousSlide = () => {
    setCurrentSlide((previousSlide) =>
      previousSlide === 0 ? images.length - 1 : previousSlide - 1
    );
  };

  return (
    <div className="carousel">
      
      {/* Affichage du bouton "Précédent" uniquement si le carrousel contient plus d'une image. */}
      {images.length > 1 && (
        <button className="previousButton" onClick={previousSlide}>
          {/* Icône flèche gauche pour aller à l'image précédente. */}
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
      )}

      {/* Conteneur des images du carrousel. */}
      <div className="carousel-container">
        {images.map((image, index) => (
          // Affichage de chaque image, avec une classe "active" si c'est la diapositive courante.
          <div
            className={`carousel-img ${currentSlide === index ? 'active' : ''}`}
            key={index} // Utilisation de l'index de l'image comme clé unique.
            style={{
              position: 'absolute', // Les images sont superposées les unes sur les autres.
              top: 0,
              left: 0,
              opacity: currentSlide === index ? 1 : 0, // L'image courante est visible, les autres sont masquées.
              transition: 'opacity 0.5s ease', // Transition fluide pour le changement d'image.
              zIndex: currentSlide === index ? 1 : 0, // L'image courante est au-dessus des autres.
            }}
          >
            {/* Affichage de l'image */}
            <img
              className="setImg carousel-img" // Classe CSS pour styliser l'image.
              src={image} // Source de l'image.
              alt={`Slide ${index}`} // Texte alternatif dynamique.
            />
          </div>
        ))}
      </div>

      {/* Affichage du bouton "Suivant" uniquement si le carrousel contient plus d'une image. */}
      {images.length > 1 && (
        <button className="nextButton" onClick={nextSlide}>
          {/* Icône flèche droite pour aller à l'image suivante. */}
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      )}

      {/* Indicateur de la diapositive actuelle et du nombre total d'images (ex: 1 / 5) */}
      {images.length > 1 && (
        <div className="carousel-counter">
          {currentSlide + 1} / {images.length} {/* Affichage de l'index humainement compréhensible (donc index+1). */}
        </div>
      )}
    </div>
  );
};

// Définition des propTypes pour le composant Carrousel.
Carrousel.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

// Exportation du composant pour qu'il puisse être utilisé dans d'autres parties de l'application.
export default Carrousel;
