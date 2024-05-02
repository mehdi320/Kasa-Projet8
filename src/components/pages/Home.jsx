import React from "react";
import Accommodation from "../Accommodation.jsx";
import Maison from "../data/maison-json.js";


const Home = () => {
    return (
      <div className="home">
        <div className="banner">
          <img src="./images/IMG.png" alt="banner" />
          <h1 className="h1">Chez vous, partout et ailleurs</h1>
        </div>
        <div className="gallery">
          <Accommodation Maison={Maison} />
        </div>
      </div>
    );
};

export default Home;
  
