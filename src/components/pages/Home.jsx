import Thumb from "../Thumb";
import Maison from "../json";


const Home = () => {
    return (
        <div className="home">
            <div className="banner">
            <img src="./images/IMG.png" alt="banner" />
            <h1 className="h1">Chez vous, partout et ailleurs</h1>
            </div>
            <div className="gallery">
                <Thumb />
            </div>
        </div>
    );
};

export default Home;