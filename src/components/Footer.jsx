// Importation de l'image du logo pour le pied de page depuis le dossier assets/images
import LogoKasa from '../assets/images/logoFooter.png';
import "../sass/body/body.scss";

// Définition du composant Footer
const Footer = () => {
  return (
    // Conteneur principal du pied de page avec une classe CSS pour le style global
    <footer className="footer-container">

      {/* Conteneur pour l'image du logo */}
      <div>
        {/* Affichage du logo avec une classe CSS pour son style et un attribut alt pour l'accessibilité */}
        <img className="footer-logo" src={LogoKasa} alt="Logo Kasa" />
      </div>

      {/* Conteneur pour le texte du pied de page */}
      <div className="footer-text-container">
        {/* Paragraphe contenant le texte des droits d'auteur, avec une classe CSS pour le style */}
        <p className="footer-text">© 2022 Kasa. All rights reserved</p>
      </div>

    </footer>
  );
};

// Exportation du composant Footer pour l'utiliser dans d'autres parties de l'application
export default Footer;
