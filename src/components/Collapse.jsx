import { useState } from 'react'; // Importez seulement le hook useState
import PropTypes from 'prop-types';
import '../sass/Collapse.scss'; // Chemin correct vers Collapse.scss


const Collapse = ({ name, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="collapse">
      <button className="collapse-header" onClick={toggleCollapse}>
        {name}
      </button>
      {isOpen && <div className="collapse-content">{content}</div>}
    </div>
  );
};

Collapse.propTypes = {
  name: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default Collapse;