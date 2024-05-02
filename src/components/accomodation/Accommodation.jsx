// Accommodation.js
import React from "react";

function Accommodation({ accommodation }) {
  const {
    title,
    cover,
    description,
    host,
    rating,
    location,
    equipments,
    tags,
  } = accommodation;

  return (
    <div className="accommodation">
      <img src={cover} alt={title} className="accommodation-cover" />
      <h2 className="accommodation-title">{title}</h2>
      <p className="accommodation-description">{description}</p>
      <div className="accommodation-host">
        <img
          src={host.picture}
          alt={host.name}
          className="accommodation-host-picture"
        />
        <p className="accommodation-host-name">{host.name}</p>
      </div>
      <p className="accommodation-rating">Rating: {rating}</p>
      <p className="accommodation-location">Location: {location}</p>
      <ul className="accommodation-equipments">
        {equipments.map((equipment, index) => (
          <li key={index}>{equipment}</li>
        ))}
      </ul>
      <ul className="accommodation-tags">
        {tags.map((tag, index) => (
          <li key={index}>{tag}</li>
        ))}
      </ul>
    </div>
  );
}

export default Accommodation;
