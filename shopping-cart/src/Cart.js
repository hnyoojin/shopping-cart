import React from 'react';
import CartItem from './CartItem';

function Cart ({cartItems,removeFromCart}){
    return(
        <div>
        <h2>Cart</h2>
        {cartItems.length === 0 && <p>Your cart is empty.</p>}
        {cartItems.map((item)=>(
            <cartItem key={item.js} item={item} removeFromCart={removeFromCart}/>
        ))}
        </div>
    )
}

export default Cart;