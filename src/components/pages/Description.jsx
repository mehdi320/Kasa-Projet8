
import { useParams } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Maisons from "../../data/maison.json";
import Error404 from './Error404';
import CollapseLogement from '../CollapseLogement';
import '../../sass/logement.scss';  // Correct path
import Footer from '../Footer';

const Description = () => {
  const { id } = useParams();
  const maison = Maisons.find(maison => maison.id === id);

  if (!maison) {
    return <Error404 />;
  }

  return (
    <div className="main-logement">
      <div>
      
        <Carousel className="custom-carousel">
          {maison.pictures.map((pic, index) => (
            <div key={index}>
              <img src={pic} alt={`Image ${index}`} />
            </div>
          ))}
        </Carousel>

       <div><h1>{maison.title}</h1></div>

        <div className="buttons-container">
          <CollapseLogement 
            name="Description" 
            content={maison.description} 
          />
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
      </div>
      <footer>
        {/* Composant de pied de page (Footer) */}
        <Footer />
      </footer>
    </div>
  );
};

export default Description;
