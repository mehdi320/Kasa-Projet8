/**
 * Composant TopBackground - Composant avec image sous le header.
 * @param {string} picture - L'URL de l'image de fond.
 * @param {string} alt - Texte alternatif pour l'image.
 * @param {string} title - Titre à afficher sur l'image.
 * @returns {JSX.Element} Le composant TopBackground.
 */


import '../sass/TopBackground.scss';



function TopBackground({ picture, alt, title }) {
  return (
    <div className="background-container">
      <img className="background-img" src={picture} alt={alt} />
      <h1 className="background-title">{title}</h1>
    </div>
  );
}



export default TopBackground;
 