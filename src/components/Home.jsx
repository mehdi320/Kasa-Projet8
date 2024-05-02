import Thumb from './pages/Thumb.jsx'; // Remonter d'un niveau pour accéder au dossier components
import Maison from './components/Home.jsx'; // Remonter de deux niveaux pour accéder à la racine du projet
const Home = () => {
    return (
        <div className="home">
            <div className="banner">
            <img src="./images/IMG.png" alt="banner" />
            <h1 className="h1">Chez vous, partout et ailleurs</h1>
            </div>
            <div className="gallery">
                <Thumb Maison = {Maison} />
            </div>
        </div>
    );
};

export default Home;