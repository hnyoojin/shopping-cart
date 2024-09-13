import React from 'react';

function CartItem({item, removeFromCart}){
    return (
        <div>
            <h3>{item.name}</h3>
            <p>Price: ${item.price}</p>
            <button onClick={()=>removeFromCart(item.id)}>Remove from Cart</button>
        </div>
    );
}

export default CartItem;