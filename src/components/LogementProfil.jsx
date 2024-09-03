/**
 * Composant LogementProfil - Affiche le profil de l'hôte du logement.
 * @param {string} id - L'identifiant du logement.
 * @param {string} hostName - Le nom de l'hôte.
 * @param {string} hostPicture - Le lien vers la photo de l'hôte.
 * @returns {JSX.Element} Le composant LogementProfil.
 */

// import '../../style/components/LogementProfil/LogementProfil.scss'

function LogementProfil({ id, hostName, hostPicture }) {
    return (
      <div className="logement-profil-container">
        <p className="host-name">{hostName}</p>
        <img className="host-picture" key={id} src={hostPicture} alt={hostName} />
      </div>
    )
  }
  
  export default LogementProfil
  
