import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import "../sass/Collapselogement.scss";


const CollapseLogement = ({ name, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`collapse-logement-container ${isOpen ? 'open' : 'close'}`}>
      <div className="collapse-logement-title">
        <p>{name}</p>
        <button onClick={toggleCollapse} className={isOpen ? 'open' : 'close'}>
          <FontAwesomeIcon icon={faChevronUp} />
        </button>
      </div>
      <div className={`collapse-logement-content ${isOpen ? 'open' : 'close'}`}>
        <div className="collapse-logement-content-text">{content}</div>
      </div>
    </div>
  );
};

export default CollapseLogement;
