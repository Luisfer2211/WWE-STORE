import React from 'react';
import styles from './Styles/CartSidebar.module.css';
import { useCart } from '../contexts/useCart';

const CartItem = ({ item }) => {
  const { updateQuantity, removeFromCart } = useCart();

  return (
    <article className={styles.cartItem}>
      <img src={item.image} alt={item.name} className={styles.itemImage} />
      <div className={styles.itemDetails}>
        <h3 className={styles.itemName}>{item.name}</h3>
        <p className={styles.itemPrice}>${item.price} x {item.quantity}</p>
      </div>
      <div className={styles.itemActions}>
        <div className={styles.quantitySelector}>
          <button onClick={() => updateQuantity(item.id, item.quantity - 1)} disabled={item.quantity <= 1}>−</button>
          <span>{item.quantity}</span>
          <button onClick={() => updateQuantity(item.id, item.quantity + 1)} disabled={item.quantity >= 9}>+</button>
        </div>
        <button className={styles.removeButton} onClick={() => removeFromCart(item.id)}>Eliminar</button>
      </div>
    </article>
  );
};

export default CartItem;
