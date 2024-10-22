/**
 * Composant Error404 - Composant d'erreur 404 avec un message et un lien vers la page d'accueil.
 * @returns {JSX.Element} Le composant d'erreur 404.
 */

import { Link } from 'react-router-dom'
import Footer from "../components/Footer.jsx";
import '../sass/error404.scss';

function Error404() {
  return (
    <div className="error404">
      <div>
        {/* Affichage du code d'erreur 404 (404 Not Found) */}
        <h1 className="error404-title">{`404`}</h1>
      </div>
      <div>
        {/* Message d'erreur */}
        <h2 className="error404-subtitle">{`Oups! La page que vous demandez n'existe pas.`}</h2>
      </div>
      <div className="error404-text-container">
        {/* Lien vers la page d'accueil */}
        <Link
          to="/"
          className="error404-text"
        >{`Retourner sur la page d'accueil`}</Link>{' '}
      </div>
      {/* Pied de page de la page d'accueil */}
      <Footer />
    </div>
  )
}

export default Error404
