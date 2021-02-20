import React, { useContext } from 'react';
import Product from './Product';
import AppContext from '../context/AppContext'
import '../styles/components/Products.css';

const Products = () => {
  const { state: { products }, addToCart } = useContext(AppContext)
  
  const handlerAddToCart = product => () => {
    addToCart(product)
  }

  return (
    <div className="Products">
      <div className="Products-items">
        {products.map(product => (
          <Product key={product.id} product={product} handlerAddToCart={handlerAddToCart} />
        ))}
      </div>
    </div>
  );
}

export default Products;