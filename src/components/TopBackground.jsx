/**
 * Composant TopBackground - Composant avec image sous le header.
 * @param {string} picture - L'URL de l'image de fond.
 * @param {string} alt - Texte alternatif pour l'image (important pour l'accessibilité).
 * @param {string} title - Titre à afficher sur l'image.
 * @returns {JSX.Element} Le composant TopBackground.
 */

// Importation du fichier de styles SCSS spécifique au composant TopBackground.
import '../sass/TopBackground.scss';

function TopBackground({ picture, alt, title }) {
  // Retourne une div contenant l'image de fond et un titre superposé.
  return (
    <div className="background-container">
      {/* Affichage de l'image avec la classe CSS `background-img`, avec l'URL de l'image et un texte alternatif pour l'accessibilité */}
      <img className="background-img" src={picture} alt={alt} />
      
      {/* Affichage du titre superposé sur l'image avec la classe CSS `background-title` */}
      <h1 className="background-title">{title}</h1>
    </div>
  );
}

// Importation de PropTypes pour la validation des props.
import PropTypes from 'prop-types';

// Exportation du composant pour qu'il puisse être utilisé dans d'autres parties de l'application.
TopBackground.propTypes = {
  picture: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default TopBackground;
