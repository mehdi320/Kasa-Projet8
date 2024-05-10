import React from 'react';
import PropTypes from 'prop-types';

const Accommodation = ({ Maisons }) => {
  console.log(Maisons);

  return (
    <div className='gallery'>
      {Maisons.map((item) => (
        <div className='accommodation' key={item.id}>
          <img src={item.cover} alt='accommodation' />
          <h3>{item.title}</h3>
        </div>
      ))}
    </div>
  );
};

Accommodation.propTypes = {
  Maisons: PropTypes.array.isRequired,
};

export default Accommodation;