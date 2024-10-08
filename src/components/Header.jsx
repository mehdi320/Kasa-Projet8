// Importation du logo depuis le fichier d'image LOGO.png situé dans le dossier assets/images
import LogoKasa from '../assets/images/LOGO.png';
// Importation du composant NavLink depuis 'react-router-dom' pour gérer la navigation
import { NavLink } from 'react-router-dom';

// Définition du composant Header
const Header = () => {
    return (
        // Création d'un conteneur div avec la classe CSS 'header'
        <div className="header">
            {/* Création d'un lien de navigation avec NavLink qui renvoie à la page d'accueil */}
            <NavLink to="/">
                {/* Affichage de l'image du logo, avec l'attribut alt et la classe CSS 'header-logo' */}
                <img src={LogoKasa} alt="LogoKasa" className="header-logo" />
            </NavLink>
            
            {/* Définition de la barre de navigation */}
            <nav className="header-nav">
                <ul>
                    {/* Création de la première entrée de la navigation vers la page d'accueil */}
                    <li>
                        {/* Utilisation de NavLink pour créer un lien vers la page d'accueil */}
                        {/* Si la page est active, on applique la classe 'underline' pour souligner le lien */}
                        <NavLink to="/" className={({ isActive }) => (isActive ? "underline" : "")}>
                            Accueil
                        </NavLink>
                    </li>
                    {/* Création de la deuxième entrée de la navigation vers la page 'A Propos' */}
                    <li>
                        {/* Utilisation de NavLink pour créer un lien vers la page 'A Propos' */}
                        {/* Si la page est active, on applique la classe 'underline' pour souligner le lien */}
                        <NavLink to="/about" className={({ isActive }) => (isActive ? "underline" : "")}>
                            A Propos
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

// Exportation du composant Header pour qu'il puisse être utilisé dans d'autres parties de l'application
export default Header;
