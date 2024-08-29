import React from "react";
import Accommodation from "../Thumb.jsx";
import Maisons from "../../data/maison.json";

const Home = () => {
  console.log(Maisons)
    return (
      <div className="home">
        <div className="banner">
          <img src="./images/IMG.png" alt="banner" />
          <h1 className="h1">Chez vous, partout et ailleurs</h1>
        </div>
        <div className="gallery">

          <Accommodation Maisons={Maisons} />
        </div>
      </div>
    );
};

export default Home;
  
