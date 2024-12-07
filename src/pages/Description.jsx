// Importation de la fonction useParams pour récupérer les paramètres d'URL (comme l'id du logement).
import { useParams } from 'react-router-dom';

// Importation du composant Carrousel pour afficher les images du logement.
import Carrousel from '../components/Gallery'; // Assurez-vous que le chemin vers le composant est correct.

// Importation des données de logements depuis un fichier JSON.
import Maisons from "../data/maison.json";

// Importation du composant Error404 pour gérer les cas où le logement n'est pas trouvé.
import Error404 from './Error404';

// Importation du composant Collapse pour gérer des sections repliables (si utilisé).
import Collapse from '../components/Collapse';

// Importation du composant Footer pour afficher le pied de page.
import Footer from '../components/Footer';

// Importation du composant TitleLogement pour afficher le titre et la localisation du logement.
import TitleLogement from '../components/TitleLogement';

// Importation du composant LogementTag pour afficher les tags associés au logement.
import LogementTag from "../components/LogementTags";

// Importation du composant LogementProfil pour afficher le profil de l'hôte.
import LogementProfil from '../components/LogementProfil';

// Importation du composant LogementRating pour afficher la note du logement.
import LogementRating from '../components/LogementRating';

// Importation des fichiers SCSS pour les styles des composants.
import "../sass/gallery/gallery.scss";
import "../sass/TitleLogement/TitleLogement.scss";
import "../sass/LogementTags/LogementTags.scss";
import "../sass/LogementProfil/LogementProfil.scss";
import "../sass/LogementRating/LogementRating.scss";
import "../sass/Description/Description.css";
import "../sass/body/body.scss";


const Description = () => {
  // Récupération de l'id du logement depuis l'URL.
  const { id } = useParams();

  // Recherche du logement correspondant à l'id dans le fichier JSON des logements.
  const maison = Maisons.find(maison => maison.id === id);

  // Si le logement n'est pas trouvé, afficher la page d'erreur 404.
  if (!maison) {
    return <Error404 />;
  }

  return (
    <div className="main-logement">
      {/* Composant Carrousel pour afficher les images du logement sous forme de diaporama */}
      <Carrousel images={maison.pictures} />

      <div className="first-container">
        <div>
          {/* Composant TitleLogement pour afficher le titre et la localisation du logement */}
          <TitleLogement title={maison.title} subtitle={maison.location} />

          {/* Composant LogementTag pour afficher les tags du logement */}
          <LogementTag tags={maison.tags} />
        </div>

        <div className="logement-profil-mobile">
          {/* Composant LogementProfil pour afficher le profil de l'hôte */}
          <LogementProfil
            id={maison.id}
            hostPicture={maison.host.picture}
            hostName={maison.host.name}
          />
          {/* Composant LogementRating pour afficher la note du logement */}
          <LogementRating rating={parseFloat(maison.rating)} />

        </div>
      </div>

      <div className="container-collapse-logements">
        {/* Composant Collapse pour afficher la description sous forme repliable */}
        <Collapse name="Description" content={maison.description} />

        {/* Composant Collapse pour afficher la liste des équipements du logement sous forme repliable */}
        <Collapse
          name="Équipements"
          content={
            <ul>
              {maison.equipments.map((equipment, index) => (
                <li key={index}>{equipment}</li>
              ))}
            </ul>
          }
        />
      </div>

      {/* Composant Footer pour afficher le pied de page */}
      <footer>
        <Footer />
      </footer>
    </div>


  );
};

// Exportation du composant Description pour l'utiliser dans d'autres parties de l'application.
export default Description;
