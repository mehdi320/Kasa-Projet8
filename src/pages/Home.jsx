
import Accommodation from "../components/Thumb.jsx";
import Maisons from "../data/maison.json";
import Footer from "../components/Footer.jsx";

const Home = () => {
  return (
    <div className="body">
    <div className="home">
      <div className="banner">
        <img src="./images/IMG.png" alt="banner" />
        <h1 className="h1">Chez vous, partout et ailleurs</h1>
      </div>
      <div className="cards-container">
        <Accommodation Maisons={Maisons} />
        </div>
      </div>
        <Footer />
    </div>

  );
};

export default Home;
