import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Maisons from "../../data/maison.json";
import Error404 from './Error404'; 

const Description = () => {
  const { id } = useParams();
  const maison = Maisons.find(maison => maison.id === id);

  if (!maison) {
    return <Error404 />;
  }

  const [showText, setShowText] = useState(false);

  const handleButtonClick = () => {
    setShowText(!showText);
  };

  return (
    <div>
      <h1>{maison.title}</h1>
      <Carousel
        renderArrowPrev={(onClickHandler, hasPrev) => (
          <button onClick={onClickHandler} disabled={!hasPrev}>
            &#x276E;
          </button>
        )}
        renderArrowNext={(onClickHandler, hasNext) => (
          <button onClick={onClickHandler} disabled={!hasNext}>
            &#x276F;
          </button>
        )}
      >
        {maison.pictures.map((pic, index) => (
          <div key={index}>
            <img src={pic} alt={`Image ${index}`} />
          </div>
        ))}
      </Carousel>
      <button onClick={handleButtonClick}>Description</button>
      <button onClick={handleButtonClick}>Objets</button>
      {showText && (
        <div>
          <p>{maison.description}</p>
        </div>
      )}
    </div>
  );
};

export default Description;
