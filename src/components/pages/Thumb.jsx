import proptypes from 'prop-types';


function Thumb(Maison) {
    return (
        <div className="thumb">
            {Maison.map((maison) => (
                <div className="banner" key={maison.id}>
                    <img src={maison.cover} alt="maison" />
                    <h3 className="h3">{maison.title}</h3>
                </div>
            ))}
        </div>
    );
    
}
Thumb.proptypes = {
    Maison: proptypes.array.isRequired
};

export default Thumb;