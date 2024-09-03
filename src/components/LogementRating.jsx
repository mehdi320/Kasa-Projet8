/**
 * Composant LogementRating - Affiche la notation d'un logement sous forme d'étoiles.
 * @param {number} rating - La note du logement.
 * @returns {JSX.Element} Le composant LogementRating.
 */

import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import '../../style/components/LogementRating/LogementRating.scss';

function LogementRating({ rating }) {
  // Calcul du nombre d'étoiles pleines
  const filledStars = Math.floor(rating)

  return (
    <div className="logement-rating">
      {/* Mapping sur 5 étoiles possibles pour afficher la notation en étoiles */}
      {Array.from({ length: 5 }, (_, index) => (
        <span key={index} className="star">
          {index < filledStars ? (
            <FontAwesomeIcon icon={faStar} className="starFilled" />
          ) : (
            <FontAwesomeIcon icon={faStar} className="star-empty" />
          )}
        </span>
      ))}
    </div>
  )
}

export default LogementRating
