import { useState } from 'react'; // Importez seulement le hook useState
import PropTypes from 'prop-types';
import '../sass/Collapse.scss'; // Chemin correct vers Collapse.scss

const Collapse = ({ name, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`collapse-container ${isOpen ? 'open' : 'close'}`}>
      <div className="collapse-title">
        <p>{name}</p>
        <button 
          onClick={toggleCollapse} 
          className={isOpen ? 'open' : 'close'}
        >
          {isOpen ? '-' : '+'}
        </button>
      </div>
      <div className={`collapse-content ${isOpen ? 'open' : 'close'}`}>
        <div className="collapse-content-text">
          {content}
        </div>
      </div>
    </div>
  );
};

Collapse.propTypes = {
  name: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default Collapse;
