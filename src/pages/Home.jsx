// Importation du composant Accommodation (galerie de vignettes) depuis son fichier.
import Accommodation from "../components/Thumb.jsx";

// Importation des données de logement depuis le fichier JSON (assurez-vous que le chemin est correct).
import Maisons from "../data/maison.json";

// Importation du composant Footer depuis son fichier pour afficher le pied de page.
import Footer from "../components/Footer.jsx";

const Home = () => {
  return (
    // Conteneur global de la page avec la classe CSS `body`.
    <div className="body">
      {/* Conteneur principal de la page d'accueil */}
      <div className="home">
        
        {/* Bannière avec une image et un titre */}
        <div className="banner">
          {/* Affichage de l'image de la bannière (modifiez le chemin de l'image si nécessaire) */}
          <img src="./images/IMG.png" alt="banner" />
          
          {/* Titre de la bannière */}
          <h1 className="h1">Chez vous, partout et ailleurs</h1>
        </div>

        {/* Conteneur des cartes (vignettes des logements) */}
        <div className="cards-container">
          {/* Affichage du composant Accommodation qui reçoit les données des maisons via la prop `Maisons` */}
          <Accommodation Maisons={Maisons} />
        </div>
      </div>
      
      {/* Pied de page de la page d'accueil */}
      <Footer />
    </div>
  );
};

// Exportation du composant Home pour l'utiliser dans d'autres parties de l'application.
export default Home;
