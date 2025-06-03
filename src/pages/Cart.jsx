import React from 'react';
import styles from './Styles/Cart.module.css';
import { useCart } from '../contexts/useCart';
import { Navbar } from '../components/Navbar';
import DiscountPrice from '../components/DiscountPrice';


const Cart = () => {
  const { cart, clearCart } = useCart();

  const subtotal = cart.reduce((acc, item) => {
  const price = item.discount
    ? item.price * (1 - item.discount / 100)
    : item.price;
  return acc + price * item.quantity;
}, 0).toFixed(2);


  return (
    <div className={styles.page}>
      <Navbar />
      <div className={styles.container}>
        <h2 className={styles.title}>Carrito ({cart.length})</h2>

        {cart.length === 0 ? (
          <p className={styles.empty}>Tu carrito está vacío.</p>
        ) : (
          <>
            {cart.map((item, index) => (
              <div className={styles.item} key={index}>
                <div
                  className={styles.image}
                  style={{ backgroundImage: `url(${item.image})` }}
                />
                <div className={styles.info}>
                  <p className={styles.name}>{item.name}</p>
                  <p className={styles.details}>Talla: {item.size || 'Única'}</p>
                  <p className={styles.details}>Cantidad: {item.quantity}</p>
                    <DiscountPrice price={item.price} discount={item.discount} />

                </div>
              </div>
            ))}

            <div className={styles.summary}>
              <p className={styles.subtotal}>Subtotal: ${subtotal}</p>
            </div>

            <div className={styles.actions}>
              <button className={styles.checkout}>Finalizar compra</button>
              <button className={styles.emptyButton} onClick={clearCart}>
                Vaciar carrito
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
