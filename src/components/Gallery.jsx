import React, { useState } from "react";
import maison from "./data/maison.data";
// Assuming your data is exported from this file

const Carousel = () => {
  const [index, setIndex] = useState(0);
  
  const nextSlide = () => {
    setIndex((prevIndex) => (prevIndex + 1) % maison.pictures.length);
  };

  const prevSlide = () => {
    setIndex((prevIndex) => (prevIndex - 1 + maison.pictures.length) % maison.pictures.length);
  };

  const updateBannerTitleAndImage = (i) => {
    return maison.pictures[i];
  };

  return (
    <div className="carousel">
      <div className="carousel-content">
        <button className="arrow_left" onClick={prevSlide}>
          &#10094;
        </button>
        <img src={updateBannerTitleAndImage(index)} alt={`Image ${index}`} />
        <button className="arrow_right" onClick={nextSlide}>
          &#10095;
        </button>
      </div>
      <div className="dots">
        {maison.pictures.map((_, i) => (
          <div
            key={i}
            className={`dot ${i === index ? "dot_selected" : ""}`}
            onClick={() => setIndex(i)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
