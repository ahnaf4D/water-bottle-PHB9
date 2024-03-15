import './Bottle.css'
import PropTypes from 'prop-types';
const Bottle = ({ bottle, handleAddToCart }) => {
  const { name, img, price } = bottle;
  return (
    <div className='container'>
      <div className='bottle-card'>
        <img src={img} className='img' alt="" />
        <h1>{name}</h1>
        <h2>Price : ${price}</h2>
        <button className='button-18' onClick={() => handleAddToCart(bottle)}>Purchase</button>
      </div>
    </div>
  );
};
Bottle.propTypes = {
  bottle: PropTypes.array.isRequired,
  handleAddToCart: PropTypes.func.isRequired,
}
export default Bottle;