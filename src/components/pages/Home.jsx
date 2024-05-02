import Accommodation from "../accomodation/Accommodation.jsx";
import jsonData from "../../json.js";



const Home = () => {
    return (
      <div className="home">
        <div className="banner">
          <img src="./images/IMG.png" alt="banner" />
          <h1 className="h1">Chez vous, partout et ailleurs</h1>
        </div>
        <div className="accommodations">
          {jsonData.map((accommodation, index) => (
            <Accommodation key={index} accommodation={accommodation} />
          ))}
        </div>
      </div>
    );
  };
  
  export default Home;
  
