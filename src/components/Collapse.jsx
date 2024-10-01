import { useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import '../sass/Collapselogement.scss'; // Tu peux aussi utiliser l'autre fichier SCSS si nécessaire

const Collapse = ({ name, content, customClass = '' }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`collapse-container ${customClass} ${isOpen ? 'open' : 'close'}`}>
      <div className="collapse-title" onClick={toggleCollapse}>
        <p>{name}</p>
        <button className={isOpen ? 'open' : 'close'}>
          <FontAwesomeIcon icon={isOpen ? faChevronUp : faChevronDown} />
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
  customClass: PropTypes.string,
};

export default Collapse;
