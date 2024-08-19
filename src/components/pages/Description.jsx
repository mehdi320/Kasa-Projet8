import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Maisons from "../../data/maison.json";
import Error404 from './Error404';
import CollapseLogement from '../CollapseLogement';

const Description = () => {
  const { id } = useParams();
  const maison = Maisons.find(maison => maison.id === id);

  if (!maison) {
    return <Error404 />;
  }

  return (
    <div>
      <h1>{maison.title}</h1>
      <Carousel className="custom-carousel">
        {maison.pictures.map((pic, index) => (
          <div key={index}>
            <img src={pic} alt={`Image ${index}`} />
          </div>
        ))}
      </Carousel>
      <div>
        {/* Remplacement des boutons par CollapseLogement */}
        <CollapseLogement 
          name="Description" 
          content={maison.description} 
        />
        <CollapseLogement 
          name="Équipements" 
          content={
            <ul>
              {maison.equipments.map((equipment, index) => (
                <li key={index}>{equipment}</li>
              ))}
            </ul>
          } 
        />
      </div>
    </div>
  );
};

export default Description;
