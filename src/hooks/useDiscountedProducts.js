// hooks/useDiscountedProducts.js
import { useMemo } from 'react';
import { products as originalProducts } from '../data/products';

export function useDiscountedProducts() {
  return useMemo(() => {
    const products = [...originalProducts];
    const idsConDescuento = new Set();

    while (idsConDescuento.size < 5) {
      const randomId = Math.floor(Math.random() * 20) + 1;
      idsConDescuento.add(randomId);
    }

    return products.map((p) => {
      if (idsConDescuento.has(p.id)) {
        const descuento = Math.floor(Math.random() * 21) + 10; // 10-30%
        const precioFinal = parseFloat((p.price * (1 - descuento / 100)).toFixed(2));
        return {
          ...p,
          descuento,
          precioOriginal: p.price,
          price: precioFinal,
        };
      }
      return p;
    });
  }, []);
}
