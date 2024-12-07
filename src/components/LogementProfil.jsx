/**
 * Composant LogementProfil - Affiche le profil de l'hôte du logement.
 * @param {string} id - L'identifiant du logement.
 * @param {string} hostName - Le nom de l'hôte.
 * @param {string} hostPicture - Le lien vers la photo de l'hôte.
 * @returns {JSX.Element} Le composant LogementProfil.
 */

// Importation du fichier de style pour styliser le composant LogementProfil (commenté pour le moment).
// import '../../style/components/LogementProfil/LogementProfil.scss'
import "../sass/body/body.scss";


import PropTypes from 'prop-types';

function LogementProfil({ id, hostName, hostPicture }) {
  // Le composant retourne un conteneur avec le nom de l'hôte et son image.
  return (
    <div className="logement-profil-container">
      {/* Paragraphe affichant le nom de l'hôte */}
      <p className="host-name">{hostName}</p>

      {/* Image de l'hôte avec une clé unique basée sur l'id et une balise alt contenant le nom de l'hôte */}
      <img className="host-picture" key={id} src={hostPicture} alt={hostName} />
    </div>
  )
}

// Définition des propTypes pour valider les props passées au composant LogementProfil.
LogementProfil.propTypes = {
  id: PropTypes.string.isRequired,
  hostName: PropTypes.string.isRequired,
  hostPicture: PropTypes.string.isRequired,
};

// Exportation du composant LogementProfil pour pouvoir l'utiliser dans d'autres parties de l'application.
export default LogementProfil
