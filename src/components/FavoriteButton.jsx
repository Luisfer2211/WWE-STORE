// components/FavoriteButton.jsx
import React from 'react';
import { useFavorites } from '../contexts/FavoritesContext';
import { FaHeart, FaRegHeart } from 'react-icons/fa';

const FavoriteButton = ({ product }) => {
  const { toggleFavorite, isFavorite } = useFavorites();

  return (
    <button
      onClick={(e) => {
        e.stopPropagation(); // No activar navegación
        toggleFavorite(product);
      }}
      style={{
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        color: isFavorite(product.id) ? 'red' : 'white'
      }}
    >
      {isFavorite(product.id) ? <FaHeart /> : <FaRegHeart />}
    </button>
  );
};

export default FavoriteButton;
