import proptypes from 'prop-types';


function Accommodation({Maison}) {
  return (
    Maison.map((maison) => (
      <div className='accomodation'>
        <img src={maison.image} alt='accomodation' />
        <h3>{maison.name}</h3>
      </div>
    ))
  );
}
Accommodation.propTypes = {
  Maison: proptypes.array.isRequired,
};
export default Accommodation;