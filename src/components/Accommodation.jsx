import proptypes from 'prop-types';


function Accommodation({Maison}) {
  return (
    <div className='accomodation'>
      <img src='image-du-livre' alt='accomodation' />
      <h3>Accommodations</h3>
    </div>
  );
}
Accommodation.propTypes = {
  Maison: proptypes.array.isRequired,
};
export default Accommodation;