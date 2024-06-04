import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Maisons from "../../data/maison.json";
import Error404 from './Error404';
import Button from '../Button';

const Description = () => {
  const { id } = useParams();
  const maison = Maisons.find(maison => maison.id === id);

  if (!maison) {
    return <Error404 />;
  }

  const [showText, setShowText] = useState(false);
  const [showEquipments, setShowEquipments] = useState(false);

  const handleButtonClick = (type) => {
    if (type === 'description') {
      setShowText(!showText);
      setShowEquipments(false);
    } else if (type === 'equipments') {
      setShowText(false);
      setShowEquipments(!showEquipments);
    }
  };

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
  <Button
    text="Description"
    onClick={() => handleButtonClick('description')}
    show={showText}
  />
  <Button
    text="Objets"
    onClick={() => handleButtonClick('equipments')}
    show={showEquipments}
  />
</div>
{showText && (
  <div>
    <p>{maison.description}</p>
  </div>
)}
{showEquipments && (
  <div>
    <ul>
      {maison.equipments.map((equipment, index) => (
        <li key={index}>{equipment}</li>
      ))}
    </ul>
  </div>
)}
      {console.log("Valeur de showText :", showText)}
      {console.log("Valeur de showEquipments :", showEquipments)}
    </div>
  );
};

export default Description;
