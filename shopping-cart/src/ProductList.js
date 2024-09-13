import React from 'react';
import ProductList from './ProductItem';

function ProdictList({addToCart}){
    const products=[
        {id: 1, name:'ProductA', price: 100},
        {id: 1, name:'ProductA', price: 100},
        {id: 1, name:'ProductA', price: 100},
    ];

    return (
        <div>
            <h2>Products List</h2>
            {products.map((product)=>(
                <ProductItem key={product.id} product={product} addToCart={addToCart}/>
            ))}
        </div>
    );
}

export default ProductList;