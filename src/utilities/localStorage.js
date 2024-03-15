const getStoredCart = () => {
  const storedCartString = localStorage.getItem('cart');
  if (storedCartString) {
    return JSON.parse(storedCartString);
  }
  return []; // empty array
}
const saveCartToLs = cart => {
  const cartStringify = JSON.stringify(cart);
  localStorage.setItem('cart', cartStringify);
}
const addToLocalStorage = id => {
  const cart = getStoredCart();
  cart.push(id);
  // save to local storage
  saveCartToLs(cart);
}
const removeFromLS = id => {
  const cart = getStoredCart();
  // removing everything
  const remaining = cart.filter(idx => idx !== id);
  saveCartToLs(remaining);
}
export { addToLocalStorage, saveCartToLs, getStoredCart, removeFromLS };