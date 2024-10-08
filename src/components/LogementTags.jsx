// Importation du fichier JSON contenant les informations sur les maisons (assurez-vous que le chemin est correct).
import Maisons from "@data/maison.json";

// Importation de la fonction useParams de react-router-dom pour accéder aux paramètres de l'URL.
import { useParams } from "react-router-dom";

function LogementTag() {
  // Récupération de l'id du logement à partir des paramètres de l'URL.
  const { id } = useParams();

  // Recherche dans le fichier JSON de la maison correspondant à l'id récupéré.
  const maison = Maisons.find((maison) => maison.id === id);

  // Si aucune maison n'est trouvée avec cet id, retourner null pour ne rien afficher (ou gérer l'erreur de manière appropriée).
  if (!maison) {
    return null; // ou une gestion d'erreur appropriée
  }

  return (
    // Conteneur pour afficher les tags du logement sous forme de spans.
    <div className="logement-tags">
      
      {/* Parcours du tableau des tags de la maison et affichage de chaque tag dans un élément <span>. */}
      {maison.tags.map((tag, index) => (
        <span key={index} className="logement-tag">
          {/* Affichage du contenu du tag */}
          {tag}
        </span>
      ))}
    </div>
  );
}

// Exportation du composant LogementTag pour l'utiliser dans d'autres parties de l'application.
export default LogementTag;
