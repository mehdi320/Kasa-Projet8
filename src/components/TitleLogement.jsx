/**
 * Composant TitleLogement - Affiche le titre et le sous-titre d'un logement.
 * @param {string} title - Le titre du logement.
 * @param {string} subtitle - Le sous-titre du logement.
 * @returns {JSX.Element} Le composant TitleLogement.
 */

// Importation du fichier de style pour styliser le composant TitleLogement (commenté ici mais à activer selon l'organisation du projet).
// import '../../style/components/TitleLogement/TitleLogement.scss'
import "../sass/body/body.scss";

import PropTypes from 'prop-types';

function TitleLogement({ title, subtitle }) {
  // Retourne une div contenant le titre et le sous-titre du logement.
  return (
    <div className="title-logement">
      {/* Affichage du titre dans un élément h1 */}
      <h1>{title}</h1>

      {/* Affichage du sous-titre dans un élément p */}
      <p>{subtitle}</p>
    </div>
  );
}

// Définition des types de props pour le composant TitleLogement.
TitleLogement.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

// Exportation du composant pour l'utiliser dans d'autres parties de l'application.
export default TitleLogement;
