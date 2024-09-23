import { useParams } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Maisons from "../../data/maison.json";
import Error404 from './Error404';
import CollapseLogement from '../CollapseLogement';
import '../../sass/logement.scss';  // Correct path
import Footer from '../Footer';
import TitleLogement from '../TitleLogement';
import LogementTag from '../LogementTags';
import LogementProfil from '../LogementProfil';
import LogementRating from '../LogementRating';

const Description = () => {
  const { id } = useParams();
  const maison = Maisons.find(maison => maison.id === id);

  if (!maison) {
    return <Error404 />;
  }

  return (
    <div className="main-logement">
      <Carousel className="custom-carousel">
        {maison.pictures.map((pic, index) => (
          <div key={index}>
            <img src={pic} alt={`Image ${index}`} />
          </div>
        ))}
      </Carousel>
  
      <div className="first-container">
        <div>
          <TitleLogement title={maison.title} subtitle={maison.location} />
          <LogementTag />
        </div>
  
        <div className="logement-profil-mobile">
          <LogementProfil
            id={maison.id}
            hostPicture={maison.host.picture}
            hostName={maison.host.name}
          />
          <LogementRating rating={maison.rating} />
        </div>
      </div>
  
      <div className="buttons-container">
        <CollapseLogement name="Description" content={maison.description} />
        <CollapseLogement
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
  
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Description;
