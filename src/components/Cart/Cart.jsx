import './Cart.css'
import PropTypes from 'prop-types';
const Cart = ({ selectedBottle, handleRemoveFromCart }) => {
  return (
    <div>
      {/* <h2>Selected Bottles : {selectedBottle.length}</h2> */}
      <div className='cart-container'>
        {selectedBottle.map(bottle => <div key={bottle.id}>
          <img src={bottle.img}></img>
          <button onClick={() => handleRemoveFromCart(bottle.id)}>Remove</button>
        </div>)}
      </div>
    </div>
  );
};
Cart.propTypes = {
  selectedBottle: PropTypes.array.isRequired,
  handleRemoveFromCart: PropTypes.func.isRequired
}

export default Cart;