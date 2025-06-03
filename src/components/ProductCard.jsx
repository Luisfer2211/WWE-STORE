import React from 'react';
import styles from './Styles/ProductCard.module.css';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import DiscountPrice from './DiscountPrice';
import ProductPrice from './ProductPrice';
import FavoriteButton from './FavoriteButton';

const ProductCard = ({ product, onAddToCart }) => {
  const navigate = useNavigate();

  const handleAdd = async (e) => {
    e.stopPropagation(); // Evita la navegación
    const result = await onAddToCart(product);
    if (result.added) {
      toast.success(`${result.name} añadido al carrito`, { theme: 'dark' });
    } else if (result.error) {
      toast.error(result.error, { theme: 'dark' });
    }
  };

  const handleCardClick = () => {
    navigate(`/producto/${product.id}`);
  };

  return (
    <div className={styles.container} onClick={handleCardClick}>
      <img 
        src={product.image} 
        alt={product.name}
        className={styles.image}
      />
      <div className={styles.content}>
        <h3 className={styles.title}>{product.name}</h3>
        <ProductPrice 
          price={product.price} 
          descuento={product.descuento} 
          precioOriginal={product.precioOriginal} 
        />
        <div className={styles.actions}>
          <FavoriteButton product={product} />
          <button
            className={styles.button}
            onClick={handleAdd}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
