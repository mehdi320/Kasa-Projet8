// Importation de PropTypes pour valider les types des props passées au composant.
import PropTypes from 'prop-types';

// Importation du composant Link de react-router-dom pour la navigation entre les pages.
import { Link } from 'react-router-dom';
import "../sass/body/body.scss";

// Définition du composant Accommodation qui reçoit la prop `Maisons` (un tableau d'objets représentant les logements).
const Accommodation = ({ Maisons }) => {
  // Affichage du tableau Maisons dans la console pour le debug.
  console.log(Maisons);

  // Retourne une galerie avec une liste de vignettes pour chaque maison.
  return (
    <div className='gallery'>
      {/* Parcours du tableau Maisons et affichage d'une vignette pour chaque item (logement) */}
      {Maisons.map((item) => (
        // Chaque vignette a une clé unique basée sur l'ID du logement.
        <div className='thumb' key={item.id}>
          {/* Lien vers la page de description du logement en utilisant son ID */}
          <Link to={`/Descriptions/${item.id}`}>
            {/* Affichage de l'image de couverture du logement */}
            <img src={item.cover} alt='thumb' />
            {/* Titre du logement */}
            <h3>{item.title}</h3>
          </Link>
        </div>
      ))}
    </div>
  );
};

// Utilisation de PropTypes pour s'assurer que la prop `Maisons` est bien un tableau et qu'elle est obligatoire.
Accommodation.propTypes = {
  Maisons: PropTypes.array.isRequired,
};

// Exportation du composant pour qu'il puisse être utilisé dans d'autres parties de l'application.
export default Accommodation;
