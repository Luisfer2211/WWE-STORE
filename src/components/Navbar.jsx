import React from 'react';
import styles from './Styles/Navbar.module.css';
import { useCart } from '../contexts/useCart';
import { useNavigate, Link } from 'react-router-dom';
import CategoryFilter from './CategoryFilter';
export function Navbar({ onFilter, selectedCategory }) {
  const { toggleSidebar, cart } = useCart();
  const navigate = useNavigate();

  const handleLogoClick = () => {
    onFilter(null);
    navigate('/');
  };
  return (
    <header className={styles.header}>
      <Link to="/" className={styles.logo} onClick={handleLogoClick}>
        <svg width="24" height="24" viewBox="0 0 48 48" fill="white">
          <path d="M24 4H42V17.3333V30.6667H24V44H6V30.6667V17.3333H24V4Z" />
        </svg>
        <h2 style={{ cursor: 'pointer' }}>WWE Store</h2>
      </Link>
      <CategoryFilter onFilter={onFilter} selectedCategory={selectedCategory} />
      <button
        className={`${styles.favButton} ${selectedCategory === 'favoritos' ? styles.active : ''}`}
        onClick={() => onFilter('favoritos')}
      >
        ❤️ Favoritos
      </button>
      <div className={styles.actions}>
        <button className={styles.cartButton} onClick={toggleSidebar}>
          <svg width="20" height="20" fill="white" viewBox="0 0 256 256">
            <path d="M223.86,61.13a8,8,0,0,0-7.86-5.13H54.68L49.79,29.14A16,16,0,0,0,34.05,16H16a8,8,0,0,0,0,16H34.05L59.56,172.29a24,24,0,0,0,5.33,11.27,28,28,0,1,0,44.4,8.44h45.42a28,28,0,1,0,27.29-36H83.17a8,8,0,0,1-7.87-6.57L72.13,152h116a24,24,0,0,0,23.61-19.71l12.16-66.86A8,8,0,0,0,223.86,61.13Z" />
          </svg>
          <span className={styles.cartText}>Carrito</span>
          {cart.length > 0 && <span className={styles.cartBadge}>{cart.length}</span>}
        </button>
      </div>
    </header>
  );
}