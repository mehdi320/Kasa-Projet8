
import Accommodation from "../Thumb.jsx";
import Maisons from "../../data/maison.json";

const Home = () => {
  return (
    <div className="home">
      <div className="banner">
        <img src="./images/IMG.png" alt="banner" />
        <h1 className="h1">Chez vous, partout et ailleurs</h1>
      </div>
      <div className="cards-container">
        <Accommodation Maisons={Maisons} />
      </div>
    </div>
  );
};

export default Home;
