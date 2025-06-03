
import React from 'react';
import DiscountPrice from './DiscountPrice';

const ProductPrice = ({ price, descuento, precioOriginal }) => {
  return (
    <div style={{ marginTop: '8px' }}>
      <DiscountPrice 
        price={price} 
        discount={descuento} 
        originalPrice={precioOriginal} 
      />
    </div>
  );
};

export default ProductPrice;
