import Collapse from '../components/Collapse';
import Footer from '../components/Footer';
import TopBackground from '../components/TopBackground';
import ImageBackground from '/src/assets/images/Montagnes.svg';

const Apropos = () => {
  return (
    <div>
      {/* En-tête de la page */}
      <header className="defaultstyle">
        {/* Si tu n'as pas de contenu ici, enlève ce header ou ajoute le vrai contenu */}
        {/* Ex. <Navigation /> */}
      </header>

      {/* Section principale */}
      <main className="apropos-container">
        {/* Arrière-plan supérieur */}
        <TopBackground
          picture={ImageBackground}
          alt="Image de montagnes"
          title="" // Pas de titre
        />

        {/* Conteneur pour les sections repliables */}
        <div className="collapse-container-apropos">
          <Collapse
            name="Fiabilité"
            content="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes informations sont régulièrement vérifiées par nos équipes."
          />
          <Collapse
            name="Respect"
            content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
          />
          <Collapse
            name="Service"
            content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
          />
          <Collapse
            name="Sécurité"
            content="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
          />
        </div>
      </main>

      {/* Pied de page */}

      <Footer />

    </div>
  );
};

export default Apropos;
