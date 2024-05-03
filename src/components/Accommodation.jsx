import proptypes from 'prop-types';


function Accommodation({Maisons}) {
  console.log(Maisons)
  return (
    Maisons.map((item) => (
      <div className='accomodation' key={item.id}>
        <img src={item.image} alt='accomodation' />
        <h3>{item.name}</h3>
      </div>
    ))
  );
}
Accommodation.propTypes = {
  Maison: proptypes.array.isRequired,
};
export default Accommodation;