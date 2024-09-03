/**
 * Composant TitleLogement - Affiche le titre et le sous-titre d'un logement.
 * @param {string} title - Le titre du logement.
 * @param {string} subtitle - Le sous-titre du logement.
 * @returns {JSX.Element} Le composant TitleLogement.
 */

// import '../../style/components/TitleLogement/TitleLogement.scss'

function TitleLogement({ title, subtitle }) {
    return (
      <div className="title-logement">
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
    )
  }
  
  export default TitleLogement
  