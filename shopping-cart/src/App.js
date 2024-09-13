import React, {useState} from 'react';
import ProductList from './ProductList';
import Cart from './Cart';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart=(product)=> {
    setCartItems([...cartItems,product]);
  };

  const removeFromCart=(productId)=>{
    setCartItems(cartItems.filter(item=>item.id!==productId));
  };

  return (
    <div className="App">
      <h1>Shoppint Cart</h1>
      <ProductList addToCart={addToCart}/>
      <Cart cartItems={cartItems} removeFromCart={removeFromCart}/>
    </div>
  )
}

export default App;