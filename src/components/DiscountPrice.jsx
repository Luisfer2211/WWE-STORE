import React from 'react';

const DiscountPrice = ({ price, discount, originalPrice }) => {
  return discount ? (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <span style={{ textDecoration: 'line-through', color: 'gray', fontSize: '0.9em' }}>
        ${originalPrice.toFixed(2)}
      </span>
      <span style={{ fontWeight: 'bold', color: 'lime' }}>
        ${price.toFixed(2)} (-{discount}%)
      </span>
    </div>
  ) : (
    <span style={{ fontWeight: 'bold' }}>${price.toFixed(2)}</span>
  );
};

export default DiscountPrice;
