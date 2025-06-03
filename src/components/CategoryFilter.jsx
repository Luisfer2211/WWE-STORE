import React from 'react';
import styles from './Styles/CategoryFilter.module.css';

const CategoryFilter = ({ onFilter, selectedCategory }) => {
  const handleClick = (category) => {
    onFilter(selectedCategory === category ? null : category);
  };

  return (
    <nav className={styles.menu}>
      <span
        onClick={() => handleClick('men')}
        className={selectedCategory === 'men' ? styles.active : ''}
      >
        Hombres
      </span>
      <span
        onClick={() => handleClick('women')}
        className={selectedCategory === 'women' ? styles.active : ''}
      >
        Mujeres
      </span>
      <span
        onClick={() => handleClick('kids')}
        className={selectedCategory === 'kids' ? styles.active : ''}
      >
        Niños
      </span>
    </nav>
  );
};

export default CategoryFilter;
