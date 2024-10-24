import PropTypes from 'prop-types';

const Button = ({ text, onClick, show }) => {
  return (
    <button
      style={{
        backgroundColor: '#FF6060',
        color: '#fff',
        border: 'none',
        padding: '10px 20px',
        marginRight: '10px',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '5px',
        transition: 'background-color 0.3s ease',
        flexDirection: 'row',
      }}
      onClick={onClick}
    >
      <span
        style={{
          marginRight: '5px',
          transition: 'transform 0.3s ease'
        }}
      >
        {text}
      </span>
      <i
        className="fas fa-angle-down"
        style={{
          transform: show ? 'rotate(180deg)' : 'rotate(0deg)',
          transition: 'transform 0.3s ease'
        }}
      />
    </button>
  );

  
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
};

export default Button;
