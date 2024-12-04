
// Importation du composant CollapseLogement depuis le fichier associé.
import CollapseLogement from './CollapseLogement'; // Assurez-vous que le chemin est correct.

const LogementPage = () => {
  // Contenu statique pour la description et les équipements.
  const descriptionContent = "Voici le contenu de la description...";
  const equipementsContent = "Voici la liste des équipements...";

  return (
    // Élément racine de la page logement avec une classe CSS pour styliser la page.
    <div className="logement-page">

      {/* Conteneur pour centrer les boutons de collapse à l'horizontale */}
      <div className="container-collapse-logements">

        {/* Composant CollapseLogement avec le titre 'Description' et le contenu 'descriptionContent' */}
        <CollapseLogement name="Description" content={descriptionContent} />

        {/* Composant CollapseLogement avec le titre 'Équipements' et le contenu 'equipementsContent' */}
        <CollapseLogement name="Équipements" content={equipementsContent} />
      </div>
    </div>
  );
};

// Exportation du composant LogementPage pour qu'il soit utilisé ailleurs dans l'application.
export default LogementPage;
