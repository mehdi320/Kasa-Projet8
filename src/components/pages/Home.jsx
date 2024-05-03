import React from "react";
import Accommodation from "../Accommodation.jsx";
import maison from "../../data/maison-json.js";


const Home = () => {
  console.log(maisonaison)
    return (
      <div className="home">
        <div className="banner">
          <img src="./images/IMG.png" alt="banner" />
          <h1 className="h1">Chez vous, partout et ailleurs</h1>
        </div>
        <div className="gallery">
          <Accommodation maison={maison} />
        </div>
      </div>
    );
};

export default Home;
  
