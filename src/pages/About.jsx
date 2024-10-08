// Importation du composant Collapse pour afficher les sections repliables
import Collapse from '../components/Collapse';
// Assurez-vous que le chemin est correct pour Footer (composant de pied de page)
import Footer from '../components/Footer'; 
// Importation du composant TopBackground pour l'arrière-plan en haut de la page
import TopBackground from '../components/TopBackground'; 
// Importation de l'image de fond représentant des montagnes
import ImageBackground from '/src/assets/images/Montagnes.svg';

const Apropos = () => {
  return (
    <div>
      <header className="defaultstyle">
        {/* Composant haut de page (Header) - Ici il pourrait y avoir un Header si besoin */}
      </header>
      <main className="apropos-container">
        {/* Composant d'arrière-plan supérieur (TopBackground) avec une image de montagnes */}
        <TopBackground
          picture={ImageBackground} // Image de fond pour la section supérieure
          alt="Image de montagnes" // Texte alternatif pour l'image
          title="" // Pas de titre dans cet exemple
        />
        <div className="collapse-container-apropos">
          {/* Plusieurs composants Collapse pour afficher les informations sur la page 'À Propos' */}
          <Collapse
            name="Fiabilité" // Nom du premier élément de Collapse
            content="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes informations sont régulièrement vérifiées par nos équipes." // Contenu à afficher pour cette section
          />
          <Collapse
            name="Respect" // Nom du deuxième élément de Collapse
            content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme." // Contenu à afficher pour cette section
          />
          <Collapse
            name="Service" // Nom du troisième élément de Collapse
            content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme." // Contenu à afficher (similaire à la section précédente)
          />
          <Collapse
            name="Sécurité" // Nom du quatrième élément de Collapse
            content="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes." // Contenu à afficher pour cette section
          />
        </div>
      </main>
      <footer>
        {/* Composant de pied de page (Footer) */}
        <Footer />
      </footer>
    </div>
  );
};

// Exportation du composant Apropos pour l'utiliser dans d'autres parties de l'application
export default Apropos;
