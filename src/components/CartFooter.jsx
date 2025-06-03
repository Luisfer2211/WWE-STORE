import React from 'react';
import styles from './Styles/CartSidebar.module.css';
import { useCart } from '../contexts/useCart';
import { Link } from 'react-router-dom';

const CartFooter = () => {
  const { total, toggleSidebar } = useCart();

  const handleClick = () => {
    toggleSidebar(); // Cierra el carrito lateral
  };

  return (
    <footer className={styles.sidebarFooter}>
      <div className={styles.subtotal}>
        <span>Subtotal:</span>
        <span>${total.toFixed(2)}</span>
      </div>
      <Link to="/cart" className={styles.continueButton} onClick={handleClick}>
        Continuar al Carrito
      </Link>
    </footer>
  );
};

export default CartFooter;
