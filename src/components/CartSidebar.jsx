import React from 'react';
import styles from './Styles/CartSidebar.module.css';
import { useCart } from '../contexts/useCart';
import CartItem from './CartItem';
import CartFooter from './CartFooter';

const CartSidebar = () => {
  const { cart, isSidebarOpen, toggleSidebar } = useCart();

  if (!isSidebarOpen) return null;

  return (
    <div className={styles.sidebarOverlay} onClick={toggleSidebar}>
      <div className={styles.sidebar} onClick={(e) => e.stopPropagation()}>
        <header className={styles.sidebarHeader}>
          <h2>Tu Carrito</h2>
          <button className={styles.closeButton} onClick={toggleSidebar}>×</button>
        </header>

        <section className={styles.cartItems}>
          {cart.length === 0 ? (
            <p className={styles.emptyCart}>Tu carrito está vacío</p>
          ) : (
            cart.map(item => <CartItem key={item.id} item={item} />)
          )}
        </section>

        <CartFooter />
      </div>
    </div>
  );
};

export default CartSidebar;
