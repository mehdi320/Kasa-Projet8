import { useState } from "react";
import PropTypes from 'prop-types';

const Carousel = ({ pictures }) => {
  const [index, setIndex] = useState(0);
  
  const nextSlide = () => {
    setIndex((prevIndex) => (prevIndex + 1) % pictures.length);
  };

  const prevSlide = () => {
    setIndex((prevIndex) => (prevIndex - 1 + pictures.length) % pictures.length);
  };

  const updateBannerTitleAndImage = (i) => {
    return pictures[i];
  };

  if (!pictures || pictures.length === 0) {
    return <p>No images available</p>; // Fallback en cas de tableau vide ou non défini
  }

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
        {pictures.map((_, i) => (
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

Carousel.propTypes = {
  pictures: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Carousel;
