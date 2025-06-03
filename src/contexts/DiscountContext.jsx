import React, { createContext, useContext, useMemo } from 'react';
import { products as originalProducts } from '../data/products';

const DiscountContext = createContext();

export const DiscountProvider = ({ children }) => {
  const products = useMemo(() => {
    const cloned = [...originalProducts];
    const idsConDescuento = new Set();

    while (idsConDescuento.size < 5) {
      const randomId = Math.floor(Math.random() * 20) + 1;
      idsConDescuento.add(randomId);
    }

    return cloned.map((p) => {
      if (idsConDescuento.has(p.id)) {
        const descuento = Math.floor(Math.random() * 21) + 10;
        const final = parseFloat((p.price * (1 - descuento / 100)).toFixed(2));
        return {
          ...p,
          descuento,
          precioOriginal: p.price,
          price: final,
        };
      }
      return p;
    });
  }, []);

  return (
    <DiscountContext.Provider value={products}>
      {children}
    </DiscountContext.Provider>
  );
};

export const useDiscountedProducts = () => useContext(DiscountContext);
