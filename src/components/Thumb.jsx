import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const Accommodation = ({ Maisons }) => {
  console.log(Maisons);

  return (
    <div className='gallery'>
      {Maisons.map((item) => (
        <div className='thumb' key={item.id}>
          <Link to={`/Descriptions/${item.id}`}>
            <img src={item.cover} alt='thumb' />
            <h3>{item.title}</h3>
          </Link>
        </div>
      ))}
    </div>
  );
};

Accommodation.propTypes = {
  Maisons: PropTypes.array.isRequired,
};

export default Accommodation;