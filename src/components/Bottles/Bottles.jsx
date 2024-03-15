import { useState } from "react";
import { useEffect } from "react";
import Bottle from "../Bottle/Bottle";
import './Bottles.css'
import { addToLocalStorage, getStoredCart, removeFromLS } from "../../utilities/localStorage";
import Cart from "../Cart/Cart";
const Bottles = () => {
  const [bottles, setBottles] = useState([]);
  const [selectedBottle, setSelectedBottle] = useState([]);
  useEffect(() => {
    fetch(`https://mocki.io/v1/624e894b-0d09-4791-a381-a38ae0635877`)
      .then(res => res.json())
      .then(data => setBottles(data));
  }, [])
  // load cart from the local storage
  useEffect(() => {
    if (bottles.length > 0) {
      const storedCart = getStoredCart();
      const savedCart = [];
      for (const id of storedCart) {
        console.log(id);
        const bottle = bottles.find(bottle => bottle.id === id);
        savedCart.push(bottle);
      }
      setSelectedBottle(savedCart);
    }
  }, [bottles]);
  const handleAddToCart = bottle => {
    console.log(bottle);
    const newCart = [...selectedBottle, bottle];
    setSelectedBottle(newCart);
    addToLocalStorage(bottle.id);
  }
  const handleRemoveFromCart = id => {
    const remainingCart = selectedBottle.map(bottle => bottle.id !== id);
    setSelectedBottle(remainingCart);
    // visual cart remove
    removeFromLS(id);
  }
  return (
    <>
      <h2 style={{ textAlign: 'center', fontSize: '60px' }}>Available <span style={{ color: 'red' }}>{bottles.length}</span> Bottles</h2>
      <h2>Added : <span style={{ color: 'blue' }}>{selectedBottle.length}</span></h2>

      <Cart selectedBottle={selectedBottle} handleRemoveFromCart={handleRemoveFromCart}></Cart>
      <div className="container">
        {bottles.map((bottle => <Bottle key={bottle.id} bottle={bottle} handleAddToCart={handleAddToCart}></Bottle>))}
      </div>

    </>
  );
};

export default Bottles;