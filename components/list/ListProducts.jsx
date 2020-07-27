import React from 'react'
import ProductCard from '../cards/ProductCard';

const ListProducts = ({products}) => {
    
    if (!products.length) {
        return <div className="product-list-container">No products</div>
    }
    
    return ( 
        <div className="product-list-container">
            <ul className="products-container">
                {products.map((product, index) => (
                    <ProductCard key={index} product={product}/>
                ))}
            </ul>
        </div>
    );
}
 
export default ListProducts;