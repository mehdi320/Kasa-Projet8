import Maisons from "@data/maison.json";
import { useParams } from "react-router-dom";

function LogementTag() {
  const { id } = useParams();
  const maison = Maisons.find((maison) => maison.id === id);

  if (!maison) {
    return null; // ou une gestion d'erreur appropriée
  }

  return (
    <div className="logement-tags">
      {maison.tags.map((tag, index) => (
        <span key={index} className="logement-tag">
          {tag}
        </span>
      ))}
    </div>
  );
}

export default LogementTag;
